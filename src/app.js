// UnderInk UI. Concatenated after engine.js at build time.

const I18N = {
  tr: {
    headline: 'Sayfanın altında <span class="reveal">ne yazıyor?</span>',
    lede: "PDF'lerde gizlenmiş metinleri arar: beyaz yazı, minik font, sayfa dışı metin, görünmez karakterler. CV'lere, makalelere ve sözleşmelere saklanan AI komutlarını bulmana yardım eder.",
    dropTitle: "PDF'i buraya bırak", dropHint: "ya da seç. Dosya sadece bu tarayıcıda işlenir.",
    choose: "PDF seç",
    loading: "Hazırlanıyor…", reading: "Dosya okunuyor…", scanning: "Sayfa {p} / {n} taranıyor…",
    errNotPdf: "Bu dosya PDF gibi görünmüyor. Taramak için .pdf uzantılı bir dosya gerekiyor.",
    errPassword: "Bu PDF şifreli. Şifresi kaldırıldıktan sonra taranabilir.",
    errGeneric: "PDF okunamadı: {m}",
    vDanger: "Dikkat", vSuspicious: "İncele", vClean: "Temiz",
    tDanger: "AI komutuna benzeyen gizli metin bulundu", tSuspicious: "Görünmeyen metin bulundu", tClean: "Bilinen yöntemlerle gizli metin bulunmadı", tCleanLow: "Yalnızca düşük riskli notlar var",
    sub: "{name} · {pages} sayfa · {ms} ms", subOne: "{name} · 1 sayfa · {ms} ms",
    cHigh: "{n} yüksek", cMedium: "{n} orta", cLow: "{n} düşük",
    copyClean: "Görünen metni kopyala", copied: "Kopyalandı", copyFail: "Kopyalanamadı; metin elle seçilebilir",
    dlClean: "Görünen metni indir (.txt)", dlJson: "Raporu indir (.json)",
    findingsTitle: "Bulgular", pagesTitle: "Sayfalar", uv: "UV ışığı",
    noFindings: "Bu dosyada gizli metin bulunmadı.",
    noFindingsSub: "Bu bir garanti değildir: bilinen yöntemlerin hiçbiri tespit edilmedi.",
    page: "Sayfa {n}", docInfo: "Belge bilgisi", offPage: "önizlemede görünmez",
    inFile: "Gömülü dosya: {f}", inFilePage: "Gömülü dosya: {f} · sayfa {n}",
    unplacedTitle: "PDF'in içinde, hiçbir sayfada değil",
    unplacedSub: "Bu metinler dosyanın içinde saklı ama hiçbir sayfaya yazılmamış. Sayfada ve çıktıda görünmez; belge özellikleri ya da ekler paneli açılırsa görülebilir. Bazı AI ve metin çıkaran araçlar okuyabilir.",
    offLeft: "← sayfanın {d} pt solunda", offRight: "sayfanın {d} pt sağında →", offAbove: "↑ sayfanın {d} pt üstünde", offBelow: "↓ sayfanın {d} pt altında",
    aiReads: "AI'ın okuyabileceği metin", matched: "Şüpheli ifade:",
    sevHigh: "Yüksek", sevMedium: "Orta", sevLow: "Düşük",
    themeSystem: "Sistem teması", themeLight: "Gündüz", themeDark: "Gece", themeGroup: "Tema",
    dlPdf: "Temizlenmiş PDF'i indir",
    dlPdfNote: "Temizlenmiş PDF: her sayfa göründüğü haliyle resim olarak kaydedilir. Sayfaya çizilmeyen metin, belge bilgileri, ekler, gizli notlar ve yer imleri yeni dosyaya taşınmaz; sayfada soluk da olsa iz bırakan her şey resimde kalır. Yazılar seçilemez.",
    framedNote: "Bu görüntüleyicide indirme çalışmayabilir; sayfayı bir tarayıcıda açarak indirebilirsin.",
    cleaning: "Temizlenmiş PDF hazırlanıyor: sayfa {p} / {n}…", errClean: "Temizlenmiş PDF oluşturulamadı: {m}",
    licTitle: "Lisanslar",
    licText: "UnderInk açık kaynaktır; GNU GPL-3.0 lisansıyla herkes ücretsiz kullanabilir. PDF'leri okumak için Mozilla Vakfı'nın pdf.js kütüphanesini içerir (Apache 2.0); Mozilla'nın telif notları olduğu gibi korunmuştur. Tek dosyalık sayfa yapılabilsin diye pdf.js'te yalnızca dışa aktarma satırı değiştirilmiştir. Tam lisans metinleri aşağıdadır.",
    privacyTitle: "Gizlilik",
    privacyText: "Tarayıcı güvenlik kuralı (CSP) dışarıya istek atılmasını engeller. Sayfayı indirip internetsiz de kullanabilirsin. Açık kaynak, GPL-3.0.",
    limitsTitle: "Sınırlar",
    limitsText: "\"Temiz\" sonucu bir garanti değildir. Görsellerin içindeki yazı (OCR), ekranda başka harf gösteren hileli fontlar, ofis belgeleri (.docx) ve bazı karmaşık PDF yapıları henüz taranmıyor. Tarayıcıya kurulan eklentiler sayfaları okuyabilir; hassas dosyalar için eklentisiz ya da gizli bir pencere daha güvenli olabilir. Gözden kaçan bir şey olursa örnek dosyayla bildirilebilir.",
    types: {
      "invisible-mode": ["Görünmez metin modu", "PDF bu metni çizmiyor ama metin olarak saklıyor."],
      "blank-font": ["Hiçbir şey çizmeyen yazı tipi", "Metin, harfleri boş olan bir yazı tipiyle yazılmış: saklanıyor ama sayfada görünmüyor."],
      "ocr-layer": ["Görünmez metin (taranmış belge)", "Taranmış belgelerde genellikle normaldir: görüntünün üzerine aranabilir görünmez metin konur."],
      "hidden-layer": ["Gizli katman", "Metin, kapalı tutulan bir PDF katmanında duruyor."],
      "transparent": ["Saydam metin", "Metnin opaklığı sıfıra yakın; çiziliyor ama görünmüyor."],
      "off-page": ["Sayfa dışında", "Metin sayfanın görünür alanının tamamen dışına konmuş."],
      "tiny": ["Minik yazı", "Yazı okunamayacak kadar küçük ya da sıkıştırılmış."],
      "same-color": ["Arka planla aynı renk", "Yazının rengi arkasındaki renkle neredeyse aynı, ör. beyaz zemine beyaz yazı."],
      "faint": ["Çok soluk yazı", "Yazı arka plandan zor ayırt ediliyor."],
      "covered": ["Üstü kapatılmış", "Metin çiziliyor ama üstüne bir şekil ya da görsel konmuş."],
      "unicode-tags": ["Görünmez Unicode mesajı", "Ekranda görünmeyen Unicode etiket karakterleriyle gizli bir mesaj yazılmış. AI modelleri bunu okuyabilir."],
      "zero-width": ["Sıfır genişlikli karakterler", "Ekranda yer kaplamayan görünmez karakterler var."],
      "variation-run": ["Varyasyon seçici dizisi", "Art arda çok sayıda görünmez karakter: veri gizlemek için kullanılabilir."],
      "bidi": ["Yön kontrol karakterleri", "Metnin okunma yönünü değiştiren görünmez karakterler. Sağdan sola dillerde normal olabilir."],
      "metadata": ["Belge bilgilerinde komut", "Başlık, konu veya anahtar kelimeler gibi sayfada görünmeyen alanlarda şüpheli ifade var."],
      "annotation": ["Notta komut", "Bir PDF notunun ya da form alanının içinde şüpheli ifade var."],
      "metadata-custom": ["Özel meta veri alanı", "Belge bilgilerinde standart olmayan bir alanda metin var. Sayfada görünmez; metni çıkaran araçlar ve AI okuyabilir."],
      "attachment": ["Gömülü ek dosya", "PDF'in içine bir dosya gömülmüş. Sayfada görünmez ama bazı araçlar ve AI'lar içeriğini okuyabilir."],
      "hidden-annotation": ["Gizli not", "Gizli olarak işaretlenmiş bir PDF notu ya da form alanı metin içeriyor. Görüntüleyicilerde gösterilmez ama metin olarak okunabilir."],
      "partial-off-page": ["Sayfa kenarından taşan metin", "Satır sayfanın içinde başlıyor ama büyük kısmı kenarın dışına taşıyor. Taşan kısım ekranda ve çıktıda görünmez, metin olarak okunabilir."],
      "outline": ["Yer iminde komut", "Belgenin yer imi (içindekiler) başlıklarından birinde şüpheli ifade var. Sayfada görünmez."],
      "raw-text": ["Dosyanın içinde saklı komut", "Dosyanın ham içeriğinde, hiçbir sayfada görünmeyen bir yerde AI komutuna benzeyen metin var. Örneğin ActualText veya Alt alanı, hiçbir yere bağlı olmayan bir nesne ya da dosyanın sonuna eklenmiş metin. Bazı metin çıkarıcılar ve AI'lar bunu okuyabilir."],
      "visible-instruction": ["Görünen metinde AI komutu", "Bu metin sayfada görünüyor, gizli değil. Yine de AI'a yönelik bir komuta benziyor. Ekrandaki harflerle saklanan metin font hilesiyle farklı olabilir; sayfada aynı metnin görünüp görünmediğine bakmak faydalı olabilir."],
    },
    details: {
      renderMode: "Render modu {mode}", opacity: "Opaklık %{pct}",
      position: "Konum x={x}, y={y} · sayfa {w}×{h} pt", size: "Etkin boyut {pt} pt",
      hscale: "Yatay ölçek %{pct}", contrast: "Yazı {fg} · arka plan {bg} · kontrast {ratio}:1",
      covered: "Yazı rengi {fg}, ama bu alanda o renk görünmüyor",
      blankFont: "Bu alanda başka bir yazı ya da çizim görünmüyor",
      watermark: "Büyük ve kısa soluk bir yazı (yazı rengi {fg}, kontrast {ratio}:1); \"TASLAK\" ya da \"GİZLİ\" gibi bir filigran olabilir",
      blankFontDrawn: "Aynı yerde yazı ya da çizim görünüyor; dışa aktarılmış grafiklerde aranabilir etiket olarak sık kullanılır",
      tagChars: "{n} görünmez karakter · göründüğü yer: \"{ctx}\"", context: "Göründüğü yer: \"{ctx}\"",
      field: "Alan: {f}", annot: "Not türü: {t}", page: "Sayfa {n}",
      customKnown: "Alan: {f} · üretici programların eklediği bilinen bir alan",
      customMachine: "Alan: {f} · değer bir sürüm bilgisi, tarih ya da kimlik numarasına benziyor",
      attachment: "Dosya: {f} · {size} bayt",
      attachmentBin: "Dosya: {f} · {size} bayt · metin değil (ikili dosya)",
      annotHidden: "Not türü: {t} · gizlilik işareti: {flags}",
      attachmentPdf: "Dosya: {f} · {size} bayt · PDF, içi ayrıca tarandı ({n} bulgu)",
      noInk: "Yazı çiziliyor ama bu alanda hiçbir iz bırakmıyor (renk okunamadı: desen ya da gölgelendirme)",
      partialOff: "Satırın %{pct} kadarı sayfa kenarının dışında kalıyor",
      vsDecoded: "{n} görünmez karakterle kodlanmış mesaj çözüldü · göründüğü yer: \"{ctx}\"",
      visibleInstr: "Sayfada görünen metin",
      outline: "Yer imi başlığı",
      rawKey: "Alan: {f} (nesne {obj}) · sayfada görünmüyor",
      rawStream: "Sıkıştırılmış bir veri akışında (nesne {obj}), hiçbir sayfada görünmüyor",
      rawBody: "Dosyanın gövdesinde, hiçbir sayfaya bağlı olmayan bir yerde",
      rawEof: "Dosyanın bittiği yerden (%%EOF) sonra eklenmiş",
      zwPages: "Sayfalar: {pages} · ilk göründüğü yer: \"{ctx}\"",
    },
  },
  en: {
    headline: 'What’s written <span class="reveal">under the page?</span>',
    lede: "Looks for text hidden inside PDFs: white text, tiny fonts, off-page text, invisible characters. Helps you find AI instructions planted in résumés, papers and contracts.",
    dropTitle: "Drop a PDF here", dropHint: "or choose one. It is processed only in this browser.",
    choose: "Choose PDF",
    loading: "Getting ready…", reading: "Reading file…", scanning: "Scanning page {p} of {n}…",
    errNotPdf: "This doesn’t look like a PDF. Scanning needs a .pdf file.",
    errPassword: "This PDF is password-protected. It can be scanned once the password is removed.",
    errGeneric: "Couldn’t read the PDF: {m}",
    vDanger: "Warning", vSuspicious: "Review", vClean: "Clean",
    tDanger: "Hidden text that reads like an AI instruction", tSuspicious: "Invisible text found", tClean: "No hidden text found by known checks", tCleanLow: "Only low-risk notes found",
    sub: "{name} · {pages} pages · {ms} ms", subOne: "{name} · 1 page · {ms} ms",
    cHigh: "{n} high", cMedium: "{n} medium", cLow: "{n} low",
    copyClean: "Copy visible text", copied: "Copied", copyFail: "Couldn’t copy; the text can be selected by hand",
    dlClean: "Download visible text (.txt)", dlJson: "Download report (.json)",
    findingsTitle: "Findings", pagesTitle: "Pages", uv: "UV light",
    noFindings: "No hidden text found in this file.",
    noFindingsSub: "This is not a guarantee: none of the known techniques were detected.",
    page: "Page {n}", docInfo: "Document info", offPage: "not visible in preview",
    inFile: "Embedded file: {f}", inFilePage: "Embedded file: {f} · page {n}",
    unplacedTitle: "Inside the PDF, on no page",
    unplacedSub: "These texts are stored inside the file but written on no page. They don’t show on the page or in print; a document-properties or attachments panel may show them. Some AI tools and text extractors may read them.",
    offLeft: "← {d} pt left of the page", offRight: "{d} pt right of the page →", offAbove: "↑ {d} pt above the page", offBelow: "↓ {d} pt below the page",
    aiReads: "What an AI may read", matched: "Suspicious phrase:",
    sevHigh: "High", sevMedium: "Medium", sevLow: "Low",
    themeSystem: "System theme", themeLight: "Light", themeDark: "Dark", themeGroup: "Theme",
    dlPdf: "Download cleaned PDF",
    dlPdfNote: "Cleaned PDF: each page is saved as a picture of what it shows. Text that is not drawn on the page, document info, attachments, hidden notes and bookmarks are not carried over; anything that leaves a mark on the page, even faintly, stays in the picture. Text can't be selected.",
    framedNote: "Downloads may not work in this viewer; opening the page in a browser may allow the download.",
    cleaning: "Preparing cleaned PDF: page {p} of {n}…", errClean: "Couldn’t create the cleaned PDF: {m}",
    licTitle: "Licenses",
    licText: "UnderInk is open source; under the GNU GPL-3.0 anyone can use it free of charge. It includes the Mozilla Foundation’s pdf.js library to read PDFs (Apache 2.0); Mozilla’s copyright notices are kept as they are. Only pdf.js’s export statement was changed, so the page can be a single file. The full license texts are below.",
    privacyTitle: "Privacy",
    privacyText: "A browser security rule (CSP) blocks outgoing requests. You can download the page and use it offline. Open source, GPL-3.0.",
    limitsTitle: "Limits",
    limitsText: "A \"clean\" result is not a guarantee. Text inside images (OCR), crafted fonts that show different letters than they store, office documents (.docx) and some complex PDF structures aren’t covered yet. Browser extensions can read pages; for sensitive files a window without extensions may be safer. Anything missed can be reported with a sample file.",
    types: {
      "invisible-mode": ["Invisible render mode", "The PDF stores this text but doesn’t draw it."],
      "blank-font": ["Font that draws nothing", "The text uses a font whose letters are empty: it is stored but never shows on the page."],
      "ocr-layer": ["Invisible text (scanned page)", "Usually normal for scanned documents: a searchable invisible layer sits on top of the image."],
      "hidden-layer": ["Hidden layer", "The text sits in a PDF layer that is switched off."],
      "transparent": ["Transparent text", "The text’s opacity is near zero: it is drawn but can’t be seen."],
      "off-page": ["Off the page", "The text is placed completely outside the visible page area."],
      "tiny": ["Microscopic text", "The text is too small or too squeezed to read."],
      "same-color": ["Same colour as background", "The text colour is almost identical to what’s behind it, e.g. white on white."],
      "faint": ["Very faint text", "The text barely stands out from the background."],
      "covered": ["Covered up", "The text is drawn, but a shape or image sits on top of it."],
      "unicode-tags": ["Invisible Unicode message", "A hidden message is spelled with Unicode tag characters that don’t show on screen. AI models can read it."],
      "zero-width": ["Zero-width characters", "Invisible characters that take up no space."],
      "variation-run": ["Variation selector run", "Many invisible characters in a row: can be used to smuggle data."],
      "bidi": ["Direction control characters", "Invisible characters that change reading direction. Can be normal in right-to-left languages."],
      "metadata": ["Instruction in document info", "Fields that don’t appear on the page, such as title, subject or keywords, contain a suspicious phrase."],
      "annotation": ["Instruction in a note", "A PDF comment or form field contains a suspicious phrase."],
      "metadata-custom": ["Custom metadata field", "A non-standard field in the document info holds text. It doesn’t show on the page; text extractors and AI tools can read it."],
      "attachment": ["Embedded file", "A file is embedded inside the PDF. It doesn’t appear on any page, but some tools and AI models read its contents."],
      "hidden-annotation": ["Hidden note", "A PDF note or form field flagged as hidden contains text. Viewers don’t display it, but it can be read as text."],
      "partial-off-page": ["Text running off the page", "The line starts on the page but most of it runs past the edge. That part doesn’t show on screen or in print, but it can be read as text."],
      "outline": ["Instruction in a bookmark", "One of the document’s bookmark (outline) titles contains a suspicious phrase. It doesn’t appear on any page."],
      "raw-text": ["Instruction hidden in the file", "The file’s raw content holds text that reads like an AI instruction, in a place no page shows: an ActualText or Alt entry, an object nothing links to, or text appended after the end of the file. Some text extractors and AI tools may read it."],
      "visible-instruction": ["AI instruction in visible text", "This text shows on the page, so it isn’t hidden. It still reads like an instruction to an AI. A crafted font can show different letters than the text it stores, so it can help to check the page shows the same thing."],
    },
    details: {
      renderMode: "Render mode {mode}", opacity: "Opacity {pct}%",
      position: "Position x={x}, y={y} · page {w}×{h} pt", size: "Effective size {pt} pt",
      hscale: "Horizontal scale {pct}%", contrast: "Text {fg} · background {bg} · contrast {ratio}:1",
      covered: "Text colour {fg}, but that colour doesn’t show in this area",
      blankFont: "Nothing else is drawn in this area",
      watermark: "Large, short faint text (colour {fg}, contrast {ratio}:1); possibly a watermark such as \"DRAFT\" or \"CONFIDENTIAL\"",
      blankFontDrawn: "Writing or drawing shows in the same place; exported figures often keep searchable labels this way",
      tagChars: "{n} invisible characters · found in: \"{ctx}\"", context: "Found in: \"{ctx}\"",
      field: "Field: {f}", annot: "Note type: {t}", page: "Page {n}",
      customKnown: "Field: {f} · a known field added by the producing program",
      customMachine: "Field: {f} · the value looks like a version string, date or ID",
      attachment: "File: {f} · {size} bytes",
      attachmentBin: "File: {f} · {size} bytes · not text (binary file)",
      annotHidden: "Note type: {t} · hidden flag: {flags}",
      attachmentPdf: "File: {f} · {size} bytes · a PDF, scanned on its own ({n} findings)",
      noInk: "The text is drawn but leaves no mark in this area (colour unreadable: a pattern or shading)",
      partialOff: "{pct}% of the line lies beyond the page edge",
      vsDecoded: "Decoded a message spelled with {n} invisible characters · found in: \"{ctx}\"",
      visibleInstr: "Text visible on the page",
      outline: "Bookmark title",
      rawKey: "Entry: {f} (object {obj}) · not shown on any page",
      rawStream: "In a compressed data stream (object {obj}), not shown on any page",
      rawBody: "In the file body, not attached to any page",
      rawEof: "Appended after the end of the file (%%EOF)",
      zwPages: "Pages: {pages} · first seen in: \"{ctx}\"",
    },
  },
};

let lang = "en";
try { lang = (localStorage.getItem("underink-lang") || navigator.language || "en").toLowerCase().startsWith("tr") ? "tr" : "en"; } catch (_) {
  lang = (navigator.language || "en").toLowerCase().startsWith("tr") ? "tr" : "en";
}
const fmt = (s, p = {}) => s.replace(/\{(\w+)\}/g, (_, k) => (p[k] !== undefined ? p[k] : ""));
const t = (k, p) => fmt(I18N[lang][k] ?? k, p);
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Day / night: "system" follows the device; the choice is remembered only in this browser.
let theme = "system";
try { theme = localStorage.getItem("underink-theme") || "system"; } catch (_) { theme = "system"; }
function applyTheme() {
  if (theme === "light" || theme === "dark") document.documentElement.dataset.theme = theme;
  else delete document.documentElement.dataset.theme;
  for (const b of document.querySelectorAll(".theme button")) b.setAttribute("aria-pressed", String(b.dataset.themeSet === theme));
}

function applyStatic() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = I18N[lang][el.dataset.i18nHtml]; });
  $("lang-tr").setAttribute("aria-pressed", String(lang === "tr"));
  $("lang-en").setAttribute("aria-pressed", String(lang === "en"));
  $("theme").setAttribute("aria-label", t("themeGroup"));
  for (const [id, key] of [["theme-system", "themeSystem"], ["theme-light", "themeLight"], ["theme-dark", "themeDark"]]) {
    $(id).title = t(key);
    $(id).setAttribute("aria-label", t(key));
  }
  applyTheme();
}

// ---- pdf.js setup: real worker from a blob, fallback to main thread ----
let pdfReady = null;
function setupPdfjs() {
  if (pdfReady) return pdfReady;
  pdfReady = (async () => {
    const lib = globalThis.pdfjsLib;
    const src = $("pdfjs-worker-src").textContent;
    let ok = false;
    try {
      const url = URL.createObjectURL(new Blob([src], { type: "text/javascript" }));
      const w = new Worker(url, { type: "module" });
      ok = await new Promise((res) => {
        const timer = setTimeout(() => res(false), 5000);
        w.addEventListener("message", () => { clearTimeout(timer); res(true); }, { once: true });
        w.addEventListener("error", () => { clearTimeout(timer); res(false); }, { once: true });
      });
      if (ok) lib.GlobalWorkerOptions.workerPort = w; else w.terminate();
    } catch (_) { ok = false; }
    if (!ok) {
      // Run pdf.js's worker code on the main thread instead.
      await new Promise((res) => {
        // pdf.js's minified code declares its own top-level names (even "Event"),
        // so signal completion through a uniquely named global callback.
        globalThis.__underInkWorkerLoaded = res;
        const s = document.createElement("script");
        s.type = "module";
        s.textContent = src.replace(/export\s*\{[^}]*\};?\s*$/, "") + "\nglobalThis.__underInkWorkerLoaded();";
        document.head.appendChild(s);
      });
    }
    window.__underInkWorkerMode = ok ? "worker" : "main-thread";
    return lib;
  })();
  return pdfReady;
}

// ---- state ----
let current = null; // { report, name, ms }

function setStatus(msg, isErr = false) {
  const el = $("status");
  el.textContent = msg || "";
  el.classList.toggle("err", !!isErr);
}

async function runOn(bytes, name) {
  setStatus(t("loading"));
  const lib = await setupPdfjs();
  const head = new TextDecoder("latin1").decode(bytes.subarray(0, 1024));
  if (!head.includes("%PDF")) { setStatus(t("errNotPdf"), true); return; }
  const t0 = performance.now();
  try {
    const report = await hiAnalyze(lib, bytes, {
      onProgress: (p, n) => setStatus(t("scanning", { p, n })),
    });
    if (current) current.report.pages.forEach((pg) => { if (pg.previewBlobUrl) URL.revokeObjectURL(pg.previewBlobUrl); });
    current = { report, name, ms: Math.round(performance.now() - t0) };
    window.__lastReport = report;
    setStatus("");
    render();
    $("result").scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (e) {
    console.error(e);
    if (e && e.name === "PasswordException") setStatus(t("errPassword"), true);
    else setStatus(t("errGeneric", { m: (e && e.message) || String(e) }), true);
  }
}

function detailText(d) {
  if (!d) return "";
  const tpl = I18N[lang].details[d.k];
  return tpl ? fmt(tpl, d.p) : "";
}

function render() {
  if (!current) return;
  const { report, name, ms } = current;
  $("result").hidden = false;
  const v = report.verdict;
  $("verdict").dataset.v = v;
  $("v-badge").textContent = t(v === "danger" ? "vDanger" : v === "suspicious" ? "vSuspicious" : "vClean");
  $("v-title").textContent = t(v === "danger" ? "tDanger" : v === "suspicious" ? "tSuspicious" : report.findings.length ? "tCleanLow" : "tClean");
  $("v-sub").textContent = t(report.numPages === 1 ? "subOne" : "sub", { name, pages: report.numPages, ms });
  const c = { high: 0, medium: 0, low: 0 };
  report.findings.forEach((f) => c[f.severity]++);
  $("v-counts").innerHTML = ["high", "medium", "low"].filter((k) => c[k]).map((k) =>
    `<span class="count ${k}">${esc(t("c" + k[0].toUpperCase() + k.slice(1), { n: c[k] }))}</span>`).join("");

  // findings
  const list = $("findings");
  if (!report.findings.length) {
    list.innerHTML = `<div class="empty"><strong>${esc(t("noFindings"))}</strong>${esc(t("noFindingsSub"))}</div>`;
  } else {
    list.innerHTML = report.findings.map((f) => {
      const [label, explain] = I18N[lang].types[f.type];
      const where = f.inFile ? t(f.inPage ? "inFilePage" : "inFile", { f: f.inFile, n: f.inPage })
        : f.page ? t("page", { n: f.page }) : t("docInfo");
      const onPreview = f.rectPx && f.type !== "off-page" && !f.inFile;
      const sevKey = "sev" + f.severity[0].toUpperCase() + f.severity.slice(1);
      const pats = (f.patterns || []).slice(0, 3).map((p) => `<span class="pat">${esc(p)}</span>`).join("");
      return `<article class="finding" data-id="${f.id}" tabindex="0">
        <div class="f-head">
          <span class="num">${f.id}</span>
          <span class="f-label">${esc(label)}</span>
          <span class="sev ${f.severity}">${esc(t(sevKey))}</span>
          <span class="f-page">${esc(where)}${f.page && !onPreview && !f.inFile ? " · " + esc(t("offPage")) : ""}</span>
        </div>
        <p class="f-explain">${esc(explain)}</p>
        <div class="f-text-label">${esc(t("aiReads"))}</div>
        <pre class="f-text">${esc(f.text)}</pre>
        <div class="f-meta">${esc(detailText(f.detail || f.where))}${pats ? ` <span>${esc(t("matched"))}</span> ${pats}` : ""}</div>
      </article>`;
    }).join("");
  }

  // pages
  const pagesEl = $("pages");
  pagesEl.innerHTML = "";
  const short = (s, n) => { const v = String(s).replace(/\s+/g, " ").trim(); return v.length > n ? v.slice(0, n - 1) + "…" : v; };
  const drawn = new Set();
  const pxWide = Math.max(200, pagesEl.clientWidth - 6 || 600);  // on-screen width of one page preview
  const LABEL_PX = 17;                                               // on-screen height of one label
  const pageBoxes = [];
  for (const pg of report.pages) {
    const holder = document.createElement("div");
    holder.className = "pagebox";
    const cap = document.createElement("div");
    cap.className = "page-cap";
    cap.textContent = t("page", { n: pg.num });
    holder.appendChild(cap);
    const wrap = document.createElement("div");
    wrap.className = "page";
    wrap.dataset.page = pg.num;
    wrap.style.aspectRatio = `${pg.cssWidth} / ${pg.cssHeight}`;
    const img = document.createElement("img");
    // Where blob: images are blocked, switch this page to a data: URL once.
    img.addEventListener("error", () => {
      if (!pg.previewBlob || pg.previewUrl.startsWith("data:")) return;
      const fr = new FileReader();
      fr.onload = () => { pg.previewUrl = fr.result; img.src = fr.result; };
      fr.readAsDataURL(pg.previewBlob);
    }, { once: true });
    img.src = pg.previewUrl;
    img.alt = t("page", { n: pg.num });
    img.decoding = "async";
    wrap.appendChild(img);
    const ptPerPx = pg.cssWidth / pxWide;         // page points per on-screen pixel
    const labelH = LABEL_PX * ptPerPx;
    const placed = [], links = [];
    // A label sits exactly where its hidden text starts: same left edge, centred
    // on the text's line. Only if another label already occupies that spot is it
    // nudged the smallest distance up or down, with a line back to the text.
    const addLabel = (f, x, yMid, prefix, anchor, alignRight) => {
      const textShown = short((prefix || "") + f.text, 60);
      const w = Math.min(pg.cssWidth * 0.94, (textShown.length * 5.9 + 26) * ptPerPx);
      let cx = alignRight ? x - w : x;
      cx = Math.max(1, Math.min(cx, pg.cssWidth - w - 1));
      const want = Math.max(1, Math.min(yMid - labelH / 2, pg.cssHeight - labelH - 1));
      const free = (cy) => cy >= 1 && cy + labelH <= pg.cssHeight - 1 &&
        !placed.some((c) => cy < c.y + c.h && cy + labelH > c.y && cx < c.x + c.w && cx + w > c.x);
      let cy = want;
      if (!free(cy)) {
        const step = 1 * ptPerPx;
        for (let k = 1; k * step < pg.cssHeight; k++) {
          if (free(want + k * step)) { cy = want + k * step; break; }
          if (free(want - k * step)) { cy = want - k * step; break; }
        }
      }
      placed.push({ x: cx, y: cy, w, h: labelH });
      if (anchor && Math.abs(cy - want) > labelH * 0.6) {
        const ay = Math.max(anchor[1], Math.min(cy + labelH / 2, anchor[3]));
        links.push([cx + 7 * ptPerPx, cy > ay ? cy : cy + labelH, Math.max(anchor[0], Math.min(cx + 7 * ptPerPx, anchor[2])), ay]);
      }
      const el = document.createElement("div");
      el.className = "callout";
      el.dataset.id = f.id;
      el.style.left = (cx / pg.cssWidth * 100) + "%";
      el.style.top = (cy / pg.cssHeight * 100) + "%";
      el.innerHTML = `<span class="cn">${f.id}</span><span class="ct">${esc(textShown)}</span>`;
      el.title = f.text;
      el.addEventListener("click", () => focusFinding(f.id, "list"));
      wrap.appendChild(el);
      drawn.add(f.id);
    };
    for (const f of report.findings) {
      if (f.page !== pg.num || !f.rectPx || f.inFile) continue;
      const [x0, y0, x1, y1] = f.rectPx;
      if (f.type === "off-page") {
        // At the real height (or side) where the text sits, against the edge it is beyond.
        const W = pg.cssWidth, H = pg.cssHeight;
        let key, d, ex, ey, right = false;
        if (x1 < 0) { key = "offLeft"; d = -x1; ex = 1; ey = (y0 + y1) / 2; }
        else if (x0 > W) { key = "offRight"; d = x0 - W; ex = W - 1; ey = (y0 + y1) / 2; right = true; }
        else if (y1 < 0) { key = "offAbove"; d = -y1; ex = Math.max(1, x0); ey = labelH / 2 + 1; }
        else { key = "offBelow"; d = y0 - H; ex = Math.max(1, x0); ey = H - labelH / 2 - 1; }
        addLabel(f, ex, ey, t(key, { d: Math.round(d) }) + ": ", null, right);
        continue;
      }
      const pad = 2;
      const L = Math.max(0, x0 - pad), T = Math.max(0, y0 - pad);
      const R = Math.min(pg.cssWidth, x1 + pad), B = Math.min(pg.cssHeight, y1 + pad);
      if (R <= L || B <= T) continue;
      const box = document.createElement("div");
      box.className = "box";
      box.dataset.id = f.id;
      box.style.left = (L / pg.cssWidth * 100) + "%";
      box.style.top = (T / pg.cssHeight * 100) + "%";
      box.style.width = Math.max(0.6, (R - L) / pg.cssWidth * 100) + "%";
      box.style.height = Math.max(0.5, (B - T) / pg.cssHeight * 100) + "%";
      box.addEventListener("click", () => focusFinding(f.id, "list"));
      wrap.appendChild(box);
      drawn.add(f.id);
      if (f.detail && f.detail.k === "blankFontDrawn") {
        box.classList.add("quiet");
        box.title = f.text;
        continue;
      }
      // Hidden text big enough to read on this screen is written back in place at its
      // own size; anything smaller (or cut off, or a note with no drawn text) gets a label.
      const readable = (f.lines || []).some((ln) => (ln.rectPx[3] - ln.rectPx[1]) / ptPerPx >= 9);
      if (!readable || f.type === "partial-off-page" || f.type === "hidden-annotation") {
        addLabel(f, Math.max(1, x0), (y0 + y1) / 2, "", [L, T, R, B]);
        continue;
      }
      box.innerHTML = `<span class="tag">${f.id}</span>`;
      placed.push({ x: L, y: T, w: R - L, h: B - T });
      for (const ln of f.lines || []) {
        const [lx0, ly0, lx1, ly1] = ln.rectPx;
        const h = ly1 - ly0;
        if (h < 5 || !ln.text || lx1 <= 0 || ly1 <= 0 || lx0 >= pg.cssWidth || ly0 >= pg.cssHeight) continue;
        const rv = document.createElement("span");
        rv.className = "reveal";
        rv.style.left = (lx0 / pg.cssWidth * 100) + "%";
        rv.style.top = (ly0 / pg.cssHeight * 100) + "%";
        rv.style.width = ((lx1 - lx0) / pg.cssWidth * 100) + "%";
        rv.style.height = (h / pg.cssHeight * 100) + "%";
        rv.style.fontSize = (h / pg.cssWidth * 100 * 0.78).toFixed(3) + "cqw";
        rv.textContent = ln.text;
        wrap.appendChild(rv);
      }
    }
    if (links.length) {
      const NS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(NS, "svg");
      svg.setAttribute("class", "links");
      svg.setAttribute("viewBox", `0 0 ${pg.cssWidth} ${pg.cssHeight}`);
      svg.setAttribute("preserveAspectRatio", "none");
      for (const [lx1, ly1, lx2, ly2] of links) {
        const ln = document.createElementNS(NS, "line");
        ln.setAttribute("x1", lx1); ln.setAttribute("y1", ly1); ln.setAttribute("x2", lx2); ln.setAttribute("y2", ly2);
        svg.appendChild(ln);
      }
      wrap.appendChild(svg);
    }
    holder.appendChild(wrap);
    pageBoxes.push(holder);
  }
  // Hidden text that lives inside the PDF file but on no page at all (document
  // info, attached files, raw file content): shown first, in the same UV style,
  // with where exactly it is stored. Inventing a spot on a page would mislead.
  const rest = report.findings.filter((f) => !drawn.has(f.id));
  if (rest.length) {
    const box = document.createElement("div");
    box.className = "unplaced";
    box.innerHTML = `<h4>${esc(t("unplacedTitle"))}</h4><p class="unplaced-sub">${esc(t("unplacedSub"))}</p><ul>${rest.map((f) => {
      const where = f.inFile ? t(f.inPage ? "inFilePage" : "inFile", { f: f.inFile, n: f.inPage }) : f.page ? t("page", { n: f.page }) : "";
      const det = detailText(f.detail || f.where);
      const meta = [I18N[lang].types[f.type][0], where, det].filter(Boolean).join(" · ");
      return `<li data-id="${f.id}"><span class="cn">${f.id}</span><div><div class="ux">${esc(short(f.text, 160))}</div><div class="ul">${esc(meta)}</div></div></li>`;
    }).join("")}</ul>`;
    box.querySelectorAll("li").forEach((li) => li.addEventListener("click", () => focusFinding(li.dataset.id, "list")));
    pagesEl.appendChild(box);
  }
  for (const h of pageBoxes) pagesEl.appendChild(h);
}

function focusFinding(id, scrollTo) {
  document.querySelectorAll(".finding.active, .box.active, .callout.active, .unplaced li.active").forEach((el) => el.classList.remove("active"));
  const card = document.querySelector(`.finding[data-id="${id}"]`);
  const box = document.querySelector(`.box[data-id="${id}"]`) || document.querySelector(`.callout[data-id="${id}"]`) || document.querySelector(`.unplaced li[data-id="${id}"]`);
  if (card) card.classList.add("active");
  if (box) box.classList.add("active");
  const target = scrollTo === "list" ? card : box;
  if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
}

// ---- downloads / copy ----
function download(name, content, type) {
  const url = URL.createObjectURL(content instanceof Blob ? content : new Blob([content], { type }));
  const a = document.createElement("a");
  a.href = url; a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
const baseName = () => (current ? current.name.replace(/\.pdf$/i, "") : "document");

function reportJson() {
  const r = current.report;
  return JSON.stringify({
    tool: "UnderInk", version: "0.5.1", file: current.name, pages: r.numPages, verdict: r.verdict,
    findings: r.findings.map((f) => ({
      id: f.id, type: f.type, severity: f.severity, page: f.page, text: f.text,
      inFile: f.inFile, inFilePage: f.inPage || undefined,
      detail: detailText(f.detail || f.where), suspiciousPhrases: f.patterns || [],
      bbox: f.bbox ? f.bbox.map((v) => Math.round(v * 10) / 10) : undefined,
    })),
  }, null, 2);
}

// ---- events ----
function bind() {
  applyStatic();
  // Some embedding hosts block downloads inside frames: say so, keep the buttons.
  let framed = false;
  try { framed = window.self !== window.top; } catch (_) { framed = true; }
  $("framed-note").hidden = !framed;
  for (const b of document.querySelectorAll(".theme button")) {
    b.addEventListener("click", () => {
      theme = b.dataset.themeSet;
      try { localStorage.setItem("underink-theme", theme); } catch (_) { /* fine */ }
      applyTheme();
    });
  }
  for (const b of document.querySelectorAll(".lang button")) {
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      try { localStorage.setItem("underink-lang", lang); } catch (_) { /* fine */ }
      applyStatic(); render();
    });
  }
  const input = $("file");
  input.addEventListener("change", async () => {
    const f = input.files && input.files[0];
    if (!f) return;
    setStatus(t("reading"));
    const buf = new Uint8Array(await f.arrayBuffer());
    input.value = "";
    runOn(buf, f.name);
  });
  const drop = $("drop");
  ["dragenter", "dragover"].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add("over"); }));
  ["dragleave", "drop"].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.remove("over"); }));
  drop.addEventListener("drop", async (e) => {
    const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (!f) return;
    runOn(new Uint8Array(await f.arrayBuffer()), f.name);
  });
  // stop page-level drops from opening the PDF in the tab
  window.addEventListener("dragover", (e) => e.preventDefault());
  window.addEventListener("drop", (e) => e.preventDefault());

  $("uv").addEventListener("change", (e) => $("pages").classList.toggle("uv", e.target.checked));
  // Labels are sized in screen pixels, so lay them out again when the width changes.
  let resizeTimer = null, lastW = 0;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { const w = $("pages").clientWidth; if (current && w !== lastW) { lastW = w; render(); } }, 200);
  });
  $("findings").addEventListener("click", (e) => {
    const card = e.target.closest(".finding");
    if (card && !window.getSelection().toString()) focusFinding(card.dataset.id, "box");
  });
  $("findings").addEventListener("keydown", (e) => {
    const card = e.target.closest(".finding");
    if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); focusFinding(card.dataset.id, "box"); }
  });
  $("copy-clean").addEventListener("click", async () => {
    if (!current) return;
    const btn = $("copy-clean");
    const text = current.report.cleanText;
    try { await navigator.clipboard.writeText(text); btn.textContent = t("copied"); }
    catch (_) {
      const ta = $("copybuf"); ta.value = text; ta.select();
      let ok = false; try { ok = document.execCommand("copy"); } catch (__) { ok = false; }
      btn.textContent = ok ? t("copied") : t("copyFail");
    }
    setTimeout(() => { btn.textContent = t("copyClean"); }, 1800);
  });
  $("dl-clean").addEventListener("click", () => current && download(baseName() + ".visible.txt", current.report.cleanText, "text/plain;charset=utf-8"));
  $("dl-json").addEventListener("click", () => current && download(baseName() + ".underink.json", reportJson(), "application/json"));
  $("dl-pdf").addEventListener("click", async () => {
    if (!current || !current.report.sourceBytes) return;
    const btn = $("dl-pdf");
    btn.disabled = true;
    try {
      const lib = await setupPdfjs();
      const blob = await hiCleanPdf(lib, current.report.sourceBytes, { onProgress: (p, n) => setStatus(t("cleaning", { p, n })) });
      setStatus("");
      download(baseName() + ".clean.pdf", blob, "application/pdf");
    } catch (e) {
      console.error(e);
      setStatus(t("errClean", { m: (e && e.message) || String(e) }), true);
    } finally { btn.disabled = false; }
  });
}

bind();
// Nothing is scanned until someone picks a file. Get the PDF engine ready
// in the background so the first scan starts quickly.
setupPdfjs().then(() => { window.__underInkReady = true; }, () => { window.__underInkReady = true; });
