// Build the article from its sources:
//   article/en.md, article/tr.md     the text, one file per language
//   article/figures.mjs              the figures, drawn once
//   article/figure-text.json         figure labels and captions per language
// Output in article/dist/: one PDF per language and one web page with both.
//   node article/build.mjs
import { chromium } from "playwright";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FIGURES, FIGURE_CSS } from "./figures.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const work = path.join(here, "build");
const dist = path.join(here, "dist");
fs.mkdirSync(work, { recursive: true });
fs.mkdirSync(dist, { recursive: true });
const TEXT = JSON.parse(fs.readFileSync(path.join(here, "figure-text.json"), "utf8"));
const LANGS = ["en", "tr"].filter((l) => fs.existsSync(path.join(here, l + ".md")));
const FILE_BASE = { en: "the-line-your-eyes-cant-see", tr: "gozlerinin-goremedigi-satir" };
const POLY = { en: "english", tr: "turkish" };

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });

// ---- figure assets ---------------------------------------------------------
async function figurePdf(svgText, out) {
  const w = +svgText.match(/width="(\d+)"/)[1], h = +svgText.match(/height="(\d+)"/)[1];
  const page = await browser.newPage();
  await page.setContent(`<!doctype html><style>@page{margin:0}html,body{margin:0}body{font-family:sans-serif}${FIGURE_CSS}</style>${svgText}`);
  await page.pdf({ path: out, width: w + "px", height: h + "px", printBackground: true, pageRanges: "1" });
  await page.close();
}

async function screenshot(lang, out) {
  const page = await browser.newPage({ viewport: { width: 1100, height: 900 }, deviceScaleFactor: 2, colorScheme: "light" });
  await page.addInitScript((l) => { try { localStorage.setItem("underink-lang", l); localStorage.setItem("underink-theme", "light"); } catch (_) {} }, lang);
  await page.goto("file://" + path.join(root, "dist/underink.html"));
  await page.waitForFunction(() => window.__underInkReady, null, { timeout: 60000 });
  await page.setInputFiles("#file", path.join(here, "test-documents", "resume_marker_middle.pdf"));
  await page.waitForFunction(() => window.__lastReport, null, { timeout: 60000 });
  await page.waitForTimeout(800);
  const v = await (await page.$("#verdict")).boundingBox();
  const pages = await (await page.$("#pages .page")).boundingBox();
  const finding = await (await page.$(".finding")).boundingBox();
  const top = v.y, bottom = Math.max(finding.y + finding.height, pages.y + pages.height * 0.62);
  await page.screenshot({ path: out, clip: { x: v.x - 8, y: top - 8, width: v.width + 16, height: bottom - top + 16 } });
  await page.close();
}

// ---- markdown pre-processing ----------------------------------------------
function prepare(lang, target) {
  let md = fs.readFileSync(path.join(here, lang + ".md"), "utf8");
  const L = TEXT.labels[lang], C = TEXT.captions[lang];
  // Figure numbers follow their order in the text; {{ref:id}} becomes that number.
  const order = [...md.matchAll(/^\{\{figure:([a-z-]+)\}\}$/gm)].map((m) => m[1]);
  md = md.replace(/\{\{ref:([a-z-]+)\}\}/g, (_, id) => {
    const i = order.indexOf(id);
    if (i < 0) throw new Error("unknown figure reference " + id);
    return String(i + 1);
  });
  let n = 0;
  md = md.replace(/^\{\{figure:([a-z-]+)\}\}$/gm, (_, id) => {
    n++;
    const cap = `${L.figureWord} ${n}: ${C[id]}`;
    if (target === "latex") {
      const file = id === "scanner-screen" ? `fig-${id}-${lang}.png` : `fig-${id}-${lang}.pdf`;
      const width = id === "scanner-screen" ? "0.74\\linewidth" : id === "page-vs-text" ? "0.62\\linewidth" : "0.86\\linewidth";
      const capTex = cap.replace(/([&%$#_{}])/g, "\\$1").replace(/^([^:]+:)/, "\\textbf{$1}");
      return "```{=latex}\n\\begin{figure}[htbp]\\centering\\includegraphics[width=" + width + "]{" + file + "}\\par\\vspace{4pt}{\\small " + capTex + "}\\end{figure}\n```";
    }
    const body = id === "scanner-screen"
      ? `<img src="data:image/png;base64,${fs.readFileSync(path.join(work, `fig-${id}-${lang}.png`)).toString("base64")}" alt="${C[id].replace(/"/g, "&quot;")}">`
      : FIGURES[id](L);
    const capHtml = cap.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/^([^:]+:)/, "<strong>$1</strong>");
    return "```{=html}\n<figure class=\"fig fig-" + id + "\">" + body + "<figcaption>" + capHtml + "</figcaption></figure>\n```";
  });
  if (target === "latex") {
    md = md.replace(/^::: abstract\n([\s\S]*?)\n:::$/m, "```{=latex}\n\\begin{abstractbox}\n```\n\n$1\n\n```{=latex}\n\\end{abstractbox}\n```");
  }
  return md;
}

const pandoc = (args, input) => execFileSync("pandoc", args, { input, encoding: "utf8", maxBuffer: 64 << 20 });

// ---- build -----------------------------------------------------------------
const htmlParts = {};
for (const lang of LANGS) {
  const L = TEXT.labels[lang];
  for (const id of Object.keys(FIGURES)) await figurePdf(FIGURES[id](L), path.join(work, `fig-${id}-${lang}.pdf`));
  await screenshot(lang, path.join(work, `fig-scanner-screen-${lang}.png`));

  // PDF
  const tex = pandoc(["-f", "markdown", "-t", "latex", "--number-sections", "--standalone",
    "--template", path.join(here, "templates", "article.latex"), "-V", "polyglossia-lang=" + POLY[lang],
    "--highlight-style", "tango"], prepare(lang, "latex"));
  const texFile = path.join(work, FILE_BASE[lang] + ".tex");
  fs.writeFileSync(texFile, tex);
  for (let i = 0; i < 2; i++) execFileSync("xelatex", ["-interaction=nonstopmode", "-halt-on-error", path.basename(texFile)], { cwd: work, stdio: "pipe" });
  fs.copyFileSync(texFile.replace(/\.tex$/, ".pdf"), path.join(dist, FILE_BASE[lang] + ".pdf"));

  // Web page section
  const meta = JSON.parse(pandoc(["-f", "markdown", "-t", "json"], fs.readFileSync(path.join(here, lang + ".md"), "utf8"))).meta;
  const metaText = (k) => (meta[k] ? pandoc(["-f", "json", "-t", "plain"], JSON.stringify({ "pandoc-api-version": [1, 23, 1], meta: {}, blocks: [{ t: "Plain", c: meta[k].c }] })).trim() : "");
  htmlParts[lang] = {
    title: metaText("title"), subtitle: metaText("subtitle"), author: metaText("author"), contact: metaText("contact"), repo: metaText("repo"), date: metaText("date"),
    body: pandoc(["-f", "markdown", "-t", "html5", "--number-sections", "--id-prefix=" + lang + "-", "--highlight-style", "tango"], prepare(lang, "html")),
  };
  console.log("built", lang);
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const sections = LANGS.map((l) => {
  const p = htmlParts[l];
  return `<article lang="${l}" data-lang="${l}"${l === LANGS[0] ? "" : " hidden"}>
<header class="head"><h1>${esc(p.title)}</h1><p class="sub">${esc(p.subtitle)}</p>
<p class="by">${esc(p.author)}<br><span>${esc(p.contact)}</span><br>${p.repo ? `<a href="https://${esc(p.repo)}">${esc(p.repo)}</a><br>` : ""}<span>${esc(p.date)}</span></p></header>
${p.body}</article>`;
}).join("\n");
const page = fs.readFileSync(path.join(here, "templates", "page.html"), "utf8")
  .replace("{{TITLE}}", () => esc(htmlParts[LANGS[0]].title))
  .replace("{{FIGURE_CSS}}", () => FIGURE_CSS)
  .replace("{{LANG_BUTTONS}}", () => LANGS.map((l) => `<button type="button" data-set-lang="${l}">${l.toUpperCase()}</button>`).join(""))
  .replace("{{ARTICLES}}", () => sections);
fs.writeFileSync(path.join(dist, "article.html"), page);
fs.writeFileSync(path.join(root, "docs", "article.html"), page);
await browser.close();
console.log("wrote", fs.readdirSync(dist).join(", "));
