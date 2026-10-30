// Figures for the article, drawn once as SVG with labels per language.
// Colours come from CSS variables so the web page can follow day/night mode;
// the PDF build renders them with the day colours.

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// A box with one bold title line and up to three small lines under it.
function box(x, y, w, h, title, lines = [], kind = "") {
  const cls = kind ? ` class="fx-${kind}"` : "";
  let t = `<g${cls}><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" class="fx-box"/>`;
  const total = (title ? 1 : 0) + lines.length;
  let ty = y + h / 2 - ((total - 1) * 15) / 2 + 4;
  if (title) { t += `<text x="${x + w / 2}" y="${ty}" class="fx-title">${esc(title)}</text>`; ty += 16; }
  for (const l of lines) { t += `<text x="${x + w / 2}" y="${ty}" class="fx-small">${esc(l)}</text>`; ty += 15; }
  return t + "</g>";
}
const arrow = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="fx-line" marker-end="url(#fx-arrow)"/>`;
const svg = (w, h, body, label) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${esc(label)}">` +
  `<defs><marker id="fx-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">` +
  `<path d="M0,0 L10,5 L0,10 z" class="fx-head"/></marker></defs>${body}</svg>`;

// A small page with grey "text" lines.
function sheet(x, y, label, caption, hidden) {
  let s = `<rect x="${x}" y="${y}" width="150" height="190" rx="4" class="fx-page"/>`;
  s += `<text x="${x + 75}" y="${y + 22}" class="fx-title">${esc(label)}</text>`;
  for (let i = 0; i < 6; i++) s += `<line x1="${x + 18}" y1="${y + 40 + i * 11}" x2="${x + (i === 5 ? 90 : 132)}" y2="${y + 40 + i * 11}" class="fx-text"/>`;
  if (hidden) {
    s += `<rect x="${x + 14}" y="${y + 116}" width="122" height="38" rx="3" class="fx-hidden"/>`;
    hidden.forEach((l, i) => { s += `<text x="${x + 20}" y="${y + 131 + i * 14}" class="fx-hiddentext">${esc(l)}</text>`; });
  }
  s += `<text x="${x + 75}" y="${y + 182}" class="fx-caption">${esc(caption)}</text>`;
  return s;
}

export const FIGURES = {
  "page-vs-text": (L) => svg(420, 210,
    sheet(20, 10, L.resume, L.youSee, null) + arrow(182, 105, 236, 105) + sheet(250, 10, L.resume, L.machineReads, L.hiddenLine),
    L.youSee + " / " + L.machineReads),

  "hiding-ways": (L) => svg(560, 230,
    box(10, 10, 170, 64, L.sameColour, L.sameColourSub) + box(195, 10, 170, 64, L.tiny, L.tinySub) + box(380, 10, 170, 64, L.invisibleMode, L.invisibleModeSub) +
    box(102, 90, 170, 64, L.offPage, L.offPageSub) + box(287, 90, 170, 64, L.noPage, L.noPageSub, "accent") +
    `<text x="280" y="190" class="fx-small">${esc(L.allRely)}</text>`,
    L.sameColour),

  "attack-steps": (L) => svg(600, 96,
    box(4, 14, 130, 66, null, L.step1) + arrow(136, 47, 156, 47) + box(158, 14, 130, 66, null, L.step2) + arrow(290, 47, 310, 47) +
    box(312, 14, 130, 66, null, L.step3) + arrow(444, 47, 464, 47) + box(466, 14, 130, 66, null, L.step4, "warn"),
    L.step1.join(" ")),

  "scanner-flow": (L) => svg(640, 230,
    box(4, 88, 96, 54, L.document) + arrow(102, 115, 128, 60) + arrow(102, 115, 128, 115) + arrow(102, 115, 128, 170) +
    box(130, 30, 170, 60, L.trace, L.traceSub) + box(130, 95, 170, 40, L.compare) + box(130, 140, 170, 60, L.beyond, L.beyondSub) +
    arrow(302, 60, 338, 105) + arrow(302, 115, 338, 115) + arrow(302, 170, 338, 125) +
    box(340, 92, 104, 46, L.hiddenQ) +
    arrow(446, 105, 478, 42) + arrow(446, 115, 478, 115) + arrow(446, 125, 478, 188) +
    box(480, 18, 156, 48, L.warning, L.warningSub, "warn") + box(480, 91, 156, 48, L.review, L.reviewSub, "accent") + box(480, 164, 156, 48, L.clean, L.cleanSub, "ok") +
    `<text x="320" y="225" class="fx-small">${esc(L.cleanCopy)}</text>`,
    L.document),

  "tool-behaviours": (L) => svg(560, 170,
    box(10, 10, 168, 66, L.b1, L.b1s) + box(196, 10, 168, 66, L.b2, L.b2s) + box(382, 10, 168, 66, L.b3, L.b3s) +
    box(103, 94, 168, 66, L.b4, L.b4s, "ok") + box(289, 94, 168, 66, L.b5, L.b5s, "warn"),
    L.b1),
};

// Shared styles. Day colours by default; the web page overrides the variables at night.
export const FIGURE_CSS = `
svg .fx-box{fill:var(--fx-fill,#f7f6fb);stroke:var(--fx-stroke,#3d3a52);stroke-width:1.2}
svg .fx-accent .fx-box{fill:var(--fx-accent-fill,#fff4c8);stroke:var(--fx-accent,#b38600)}
svg .fx-warn .fx-box{fill:var(--fx-warn-fill,#fdecea);stroke:var(--fx-warn,#c0261c)}
svg .fx-ok .fx-box{fill:var(--fx-ok-fill,#e3f5eb);stroke:var(--fx-ok,#17784a)}
svg text{font-family:inherit;text-anchor:middle;fill:var(--fx-ink,#18152b)}
svg .fx-title{font-size:12.5px;font-weight:700}
svg .fx-small{font-size:11px;fill:var(--fx-muted,#4a4660)}
svg .fx-caption{font-size:10.5px;fill:var(--fx-muted,#4a4660)}
svg .fx-line{stroke:var(--fx-stroke,#3d3a52);stroke-width:1.3}
svg .fx-head{fill:var(--fx-stroke,#3d3a52)}
svg .fx-page{fill:var(--fx-paper,#ffffff);stroke:var(--fx-stroke,#3d3a52);stroke-width:1.2}
svg .fx-text{stroke:var(--fx-lines,#9a97ad);stroke-width:2}
svg .fx-hidden{fill:var(--fx-uv-fill,#ece5ff);stroke:var(--fx-uv,#5b2fe0);stroke-width:1.2}
svg .fx-hiddentext{font-size:10.5px;text-anchor:start;fill:var(--fx-uv,#5b2fe0);font-style:italic}
`;
