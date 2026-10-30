// Reproduce the scanner results reported in the article.
//   python3 tools/make_article_docs.py && node tests/article.mjs
// Scans every document in article/test-documents/, then downloads the cleaned
// copy of each and scans that too. Writes article/results.json.
import { chromium } from "playwright";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "article", "test-documents");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".pdf")).sort();
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
const page = await browser.newPage({ acceptDownloads: true });
await page.goto("file://" + path.join(root, "dist/underink.html"));
await page.waitForFunction(() => window.__underInkReady, null, { timeout: 60000 });

const scan = async (file) => {
  await page.evaluate(() => { window.__lastReport = null; });
  await page.setInputFiles("#file", file);
  await page.waitForFunction(() => window.__lastReport, null, { timeout: 60000 });
  return page.evaluate(() => ({
    verdict: window.__lastReport.verdict,
    pages: window.__lastReport.numPages,
    textRuns: window.__lastReport.pages.reduce((n, p) => n + p.runCount, 0),
    findings: window.__lastReport.findings.map((f) => ({ type: f.type, severity: f.severity, text: f.text, phrases: f.patterns || [] })),
  }));
};

const results = [];
for (const f of files) {
  const r = await scan(path.join(dir, f));
  let cleaned = null;
  if (r.findings.length) {
    const [dl] = await Promise.all([page.waitForEvent("download"), page.click("#dl-pdf")]);
    const out = path.join(os.tmpdir(), "article-clean-" + f);
    await dl.saveAs(out);
    const c = await scan(out);
    cleaned = { verdict: c.verdict, findings: c.findings.length, pages: c.pages, samePageCount: c.pages === r.pages, textRuns: c.textRuns };
    fs.rmSync(out, { force: true });
  }
  results.push({ file: f, ...r, cleaned });
  const main = r.findings[0];
  console.log(`${f.padEnd(28)} ${r.verdict.padEnd(10)} ${main ? `${main.type} [${main.severity}] phrases: ${main.phrases.join(" | ")}` : "no findings"}` +
    (cleaned ? `  -> cleaned copy: ${cleaned.verdict}, ${cleaned.findings} findings, pages ${cleaned.pages}/${r.pages}, text runs ${cleaned.textRuns}` : ""));
}
fs.writeFileSync(path.join(root, "article", "results.json"), JSON.stringify(results, null, 2) + "\n");
await browser.close();
