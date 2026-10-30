// False-positive check: scan ordinary PDFs that contain no planted tricks.
//   node tests/realworld.mjs <dir-with-pdfs>
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = process.argv[2];
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".pdf")).sort();
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
const page = await browser.newPage();
await page.goto("file://" + path.join(root, "dist/underink.html"));
await page.waitForFunction(() => window.__underInkReady, null, { timeout: 60000 });

let flagged = 0, pages = 0;
for (const f of files) {
  await page.evaluate(() => { window.__lastReport = null; });
  await page.setInputFiles("#file", path.join(dir, f));
  const t0 = Date.now();
  try {
    await page.waitForFunction(() => window.__lastReport || document.querySelector("#status.err"), null, { timeout: 240000 });
  } catch { console.log(`TIMEOUT ${f}`); continue; }
  const r = await page.evaluate(() => window.__lastReport && ({
    n: window.__lastReport.numPages, verdict: window.__lastReport.verdict,
    f: window.__lastReport.findings.map((x) => `[${x.severity}] ${x.type}: ${x.text.slice(0, 70)} | ${JSON.stringify(x.detail || x.where)}`),
  }));
  if (!r) { console.log(`ERROR ${f}: ${await page.textContent("#status")}`); continue; }
  pages += r.n;
  if (r.verdict !== "clean") flagged++;
  console.log(`${r.verdict.padEnd(10)} ${f} (${r.n} p, ${Date.now() - t0} ms)`);
  r.f.slice(0, 8).forEach((x) => console.log("     ", x));
  if (r.f.length > 8) console.log(`      … ${r.f.length - 8} more`);
}
console.log(`\n${files.length} files, ${pages} pages, flagged as not clean: ${flagged}`);
await browser.close();
