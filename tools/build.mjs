// Build UnderInk into ONE self-contained HTML file (no network needed).
//   node tools/build.mjs
// Outputs:
//   dist/underink.html      full standalone page (open locally or put on any static web host)
//   docs/index.html          same file, for hosts that serve a /docs folder as a website
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rd = (p) => fs.readFileSync(path.join(root, p), "utf8");
const PDFJS = "node_modules/pdfjs-dist/legacy/build";

// pdf.js main library: turn its trailing `export{a as B,...}` into a global.
let lib = rd(`${PDFJS}/pdf.min.mjs`).trimEnd();
const m = lib.match(/export\s*\{([^}]*)\};?$/);
if (!m) throw new Error("pdf.js export footer not found");
const entries = m[1].split(",").map((s) => s.trim()).filter(Boolean).map((s) => {
  const [local, exported] = s.split(/\s+as\s+/);
  return `${JSON.stringify(exported || local)}:${local}`;
});
// Apache-2.0 section 4(b): say that this file was changed, and how.
const MODIFIED = "/* Modified by UnderInk: the trailing ES-module export statement of this file was replaced by a " +
  "globalThis.pdfjsLib assignment so the library can be inlined in a single HTML page. No other changes. */\n";
lib = lib.slice(0, m.index) + MODIFIED + `globalThis.pdfjsLib={${entries.join(",")}};`;

const worker = rd(`${PDFJS}/pdf.worker.min.mjs`);
const engine = rd("src/engine.js");
const app = rd("src/app.js");
const version = JSON.parse(rd("node_modules/pdfjs-dist/package.json")).version;

for (const [name, code] of [["pdf.js", lib], ["worker", worker], ["engine", engine], ["app", app]]) {
  if (/<\/script|<!--/i.test(code)) throw new Error(`${name} contains a sequence that would break inline embedding`);
}

// Apache-2.0 section 4(a) and GPL-3.0 section 4: the page carries the full license texts.
const escHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const licGpl = escHtml(rd("LICENSE"));
const licThird = escHtml(rd("THIRD_PARTY_LICENSES.txt"));

let page = rd("src/index.html")
  .replace("{{LICENSE_GPL}}", () => licGpl)
  .replace("{{LICENSE_THIRD_PARTY}}", () => licThird)
  .replace("{{PDFJS_WORKER}}", () => worker)
  .replace("{{PDFJS_LIB}}", () => lib)
  .replace("{{ENGINE}}", () => engine)
  .replace("{{APP}}", () => app)
  .replace("<!-- pdf.js (Apache-2.0, Mozilla)", `<!-- pdf.js ${version} (Apache-2.0, Mozilla)`);

// Split head-only tags (title, meta, style) from the body content.
const cut = page.indexOf('<div class="wrap">');
const headPart = page.slice(0, cut).trim();
const bodyPart = page.slice(cut);

const full = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light dark">
${headPart}
</head>
<body>
${bodyPart}
</body>
</html>
`;

fs.mkdirSync(path.join(root, "dist"), { recursive: true });
fs.writeFileSync(path.join(root, "dist/underink.html"), full);
fs.mkdirSync(path.join(root, "docs"), { recursive: true });
fs.writeFileSync(path.join(root, "docs/index.html"), full); // static hosting from the /docs folder
// Fragment without <html>/<head>/<body>, for hosts that supply their own page shell.
fs.writeFileSync(path.join(root, "dist/embed.html"), headPart + "\n" + bodyPart);
const kb = (s) => (Buffer.byteLength(s) / 1024).toFixed(0) + " KB";
console.log(`built dist/underink.html (${kb(full)}), pdf.js ${version}`);
