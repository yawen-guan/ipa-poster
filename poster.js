"use strict";

const frenchOral = [
  ["a", "rose", [["ch<b><u>a</u></b>t", "/ʃa/"], ["bat<b><u>eau</u></b>", "/bato/"], ["l<b><u>à</u></b>", "/la/"]]],
  ["ɑ", "rose", [["p<b><u>â</u></b>tes", "/pɑt/"], ["gl<b><u>a</u></b>s", "/ɡlɑ/"]]],
  ["o", "gold", [["<b><u>eau</u></b>", "/o/"], ["vél<b><u>o</u></b>", "/velo/"]]],
  ["ɔ", "gold", [["p<b><u>o</u></b>rte", "/pɔʁt/"], ["f<b><u>o</u></b>rt", "/fɔʁ/"], ["m<b><u>o</u></b>rt", "/mɔʁ/"]]],
  ["u", "mint", [["v<b><u>ou</u></b>s", "/vu/"], ["r<b><u>ou</u></b>e", "/ʁu/"], ["l<b><u>ou</u></b>p", "/lu/"]]],
  ["y", "mint", [["l<b><u>u</u></b>ne", "/lyn/"], ["r<b><u>u</u></b>e", "/ʁy/"], ["t<b><u>u</u></b>", "/ty/"]]],
  ["ø", "lilac", [["p<b><u>eu</u></b>", "/pø/"], ["d<b><u>eu</u></b>x", "/dø/"]]],
  ["ə", "lilac", [["j<b><u>e</u></b>", "/ʒə/"], ["fenêtre", "/f(ə)nɛtʁ/"]]],
  ["e", "peach", [["mang<b><u>er</u></b>", "/mɑ̃ʒe/"], ["cl<b><u>é</u></b>", "/kle/"], ["n<b><u>ez</u></b>", "/ne/"]]],
  ["ɛ", "peach", [["m<b><u>è</u></b>re", "/mɛʁ/"], ["f<b><u>ê</u></b>te", "/fɛt/"], ["No<b><u>ë</u></b>l", "/nɔɛl/"]]],
  ["œ", "peach", [["p<b><u>eu</u></b>r", "/pœʁ/"], ["s<b><u>œu</u></b>r", "/sœʁ/"], ["b<b><u>eu</u></b>rre", "/bœʁ/"]]],
  ["i", "sky", [["sour<b><u>i</u></b>s", "/suʁi/"], ["sk<b><u>i</u></b>", "/ski/"]]],
];

const frenchNasal = [
  ["ɔ̃", "blue", [["p<b><u>om</u></b>pier", "/pɔ̃pje/"], ["r<b><u>on</u></b>d", "/ʁɔ̃/"]]],
  ["ɑ̃", "blue", [["c<b><u>en</u></b>t", "/sɑ̃/"], ["gr<b><u>an</u></b>d", "/ɡʁɑ̃/"]]],
  ["ɛ̃", "blue", [["p<b><u>ain</u></b>", "/pɛ̃/"], ["m<b><u>ain</u></b>", "/mɛ̃/"]]],
  ["œ̃", "blue", [["br<b><u>un</u></b>", "/bʁœ̃/"]]]
];

const frenchGlides = [
  ["j", "green", [["p<b><u>i</u></b>ed", "/pje/"], ["trava<b><u>il</u></b>", "/tʁavaj/"], ["m<b><u>i</u></b>el", "/mjɛl/"]]],
  ["w", "green", [["r<b><u>oi</u></b>", "/ʁwa/"], ["<b><u>ou</u></b>i", "/wi/"], ["m<b><u>oi</u></b>", "/mwa/"]]],
  ["ɥ", "green", [["n<b><u>u</u></b>it", "/nɥi/"], ["h<b><u>u</u></b>it", "/ɥit/"], ["h<b><u>u</u></b>ile", "/ɥil/"]]]
];

const frenchConsonants = [
  ["ʁ", "stone", [["<b><u>r</u></b>ue", "/ʁy/"], ["me<b><u>r</u></b>", "/mɛʁ/"]]],
  ["l", "stone", [["<b><u>l</u></b>ire", "/liʁ/"], ["mi<b><u>ll</u></b>e", "/mil/"]]],
  ["z", "sand", [["poi<b><u>s</u></b>on", "/pwazɔ̃/"], ["dé<b><u>s</u></b>ert", "/dezɛʁ/"]]],
  ["s", "sand", [["poi<b><u>ss</u></b>on", "/pwasɔ̃/"], ["de<b><u>ss</u></b>ert", "/desɛʁ/"]]],
  ["b", "pink", [["<b><u>b</u></b>oule", "/bul/"], ["<b><u>b</u></b>ière", "/bjɛʁ/"]]],
  ["p", "pink", [["<b><u>p</u></b>oule", "/pul/"], ["<b><u>p</u></b>ierre", "/pjɛʁ/"]]],
  ["v", "aqua", [["<b><u>v</u></b>ille", "/vil/"], ["<b><u>v</u></b>eau", "/vo/"]]],
  ["f", "aqua", [["<b><u>f</u></b>il", "/fil/"], ["<b><u>f</u></b>aux", "/fo/"]]],
  ["d", "violet", [["<b><u>d</u></b>oigt", "/dwa/"], ["<b><u>d</u></b>ent", "/dɑ̃/"]]],
  ["t", "violet", [["<b><u>t</u></b>oi", "/twa/"], ["<b><u>t</u></b>emps", "/tɑ̃/"]]],
  ["ɡ", "amber", [["<b><u>g</u></b>are", "/ɡaʁ/"], ["<b><u>g</u></b>oût", "/ɡu/"]]],
  ["k", "amber", [["<b><u>c</u></b>ar", "/kaʁ/"], ["<b><u>c</u></b>ou", "/ku/"]]],
  ["ʒ", "coral", [["<b><u>j</u></b>oue", "/ʒu/"], ["bou<b><u>g</u></b>e", "/buʒ/"]]],
  ["ʃ", "coral", [["<b><u>ch</u></b>ou", "/ʃu/"], ["bou<b><u>ch</u></b>e", "/buʃ/"]]],
  ["m", "sage", [["<b><u>m</u></b>aire", "/mɛʁ/"], ["fla<b><u>mm</u></b>e", "/flɑm/"]]],
  ["n", "sage", [["<b><u>n</u></b>ez", "/ne/"], ["ba<b><u>n</u></b>ane", "/banan/"]]],
  ["ɲ", "sage", [["a<b><u>gn</u></b>eau", "/aɲo/"], ["monta<b><u>gn</u></b>e", "/mɔ̃taɲ/"]]],
  ["h", "grey", [["<b><u>h</u></b>a !", "/ha/"]]],
  ["ŋ", "grey", [["campi<b><u>ng</u></b>", "/kɑ̃piŋ/"], ["parki<b><u>ng</u></b>", "/paʁkiŋ/"]]],
  ["x", "grey", [["<b><u>j</u></b>ota", "/xota/"]]]
];

const englishShort = [
  ["ɪ", "sky", [["k<b><u>i</u></b>t", "/kɪt/"], ["b<b><u>i</u></b>g", "/bɪɡ/"]]],
  ["ʊ", "mint", [["f<b><u>oo</u></b>t", "/fʊt/"]]],
  ["ʌ", "rose", [["f<b><u>u</u></b>n", "/fʌn/"], ["s<b><u>un</u></b>g", "/sʌŋ/"]]],
  ["ɒ", "gold", [["l<b><u>o</u></b>t", "/lɒt/"], ["b<b><u>o</u></b>ther", "/ˈbɒðə(r)/"]]],
  ["ə", "lilac", [["ov<b><u>e</u></b>r", "/ˈəʊvə(r)/"],["comm<b><u>a</u></b>", "/ˈkɒmə/"]]],
  ["ɛ", "", [["dr<b><u>e</u></b>ss", "/drɛs/"], ["b<b><u>e</u></b>g", "/bɛɡ/"]], "1"],
  ["æ", "", [["c<b><u>a</u></b>t", "/kæt/"], ["tr<b><u>a</u></b>p", "/træp/"]]]
];

const englishLong = [
  ["iː", "sky", [["<b><u>ea</u></b>t", "/iːt/"], ["fl<b><u>ee</u></b>ce", "/fliːs/"]]],
  ["uː", "mint", [["f<b><u>oo</u></b>d", "/fuːd/"], ["goose", "/ɡuːs/"]]],
    ["ɑː", "rose", [["c<b><u>a</u></b>r", "/kɑː(r)/"], ["p<b><u>a</u></b>lm", "/pɑːm/"]]],
    ["ɔː", "gold", [["sh<b><u>or</u></b>t", "/ʃɔːt/"], ["th<b><u>ough</u></b>t", "/θɔːt/"]]],
    ["ɜː", "lilac", [["b<b><u>ir</u></b>d", "/bɜːd/"], ["n<b><u>ur</u></b>se", "/nɜːs/"]]]
];

const englishDiphthongColumns = [
  [["iə", "", [["Californ<b><u>ia</u></b>", "/ˌkælɪˈfɔːniə/"]]]],
  [["uə", "", [["t<b><u>ou</u></b>r", "/tʊə(r)/"], ["infl<b><u>ue</u></b>nce", "/ˈɪnfluəns/"]]]],
  [["aɪ", "", [["bye", "/baɪ/"], ["pr<b><u>i</u></b>ce", "/praɪs/"]]],
   ["aʊ", "", [["how", "/haʊ/"], ["m<b><u>ou</u></b>th", "/maʊθ/"]]]],
  [["ɔɪ", "", [["ch<b><u>oi</u></b>ce", "/tʃɔɪs/"]]],
   ["oʊ", "", [["g<b><u>oa</u></b>t", "/ɡəʊt/"], ["mott<b><u>o</u></b>", "/ˈmɒtəʊ/"]], "2"]],
  [["eə", "", [["h<b><u>air</u></b>", "/heə(r)/"], ["square", "/skweə/"]]]],
  [["eɪ", "", [["f<b><u>a</u></b>ce", "/feɪs/"], ["v<b><u>a</u></b>gue", "/veɪɡ/"]]]],
  []
];

const englishVoiceless = [
  ["p", "pink", [["<b><u>p</u></b>ie", "/paɪ/"]]], ["t", "violet", [["<b><u>t</u></b>ie", "/taɪ/"]]],
  ["tʃ", "coral", [["<b><u>ch</u></b>air", "/tʃeə(r)/"]]], ["k", "amber", [["<b><u>k</u></b>ind", "/kaɪnd/"]]],
  ["f", "aqua", [["<b><u>f</u></b>ind", "/faɪnd/"]]],
  ["θ", "peach", [["<b><u>th</u></b>ink", "/θɪŋk/"], ["<b><u>th</u></b>igh", "/θaɪ/"]]],
  ["s", "sand", [["<b><u>s</u></b>igh", "/saɪ/"]]], ["ʃ", "lilac", [["<b><u>sh</u></b>y", "/ʃaɪ/"]]], null
];

const englishVoiced = [
  ["b", "pink", [["<b><u>b</u></b>uy", "/baɪ/"]]], ["d", "violet", [["<b><u>d</u></b>ye", "/daɪ/"]]],
  ["dʒ", "coral", [["<b><u>j</u></b>ob", "/dʒɒb/"]]], ["ɡ", "amber", [["<b><u>g</u></b>uy", "/ɡaɪ/"]]],
  ["v", "aqua", [["<b><u>v</u></b>ie", "/vaɪ/"]]], ["ð", "peach", [["<b><u>th</u></b>ere", "/ðeə(r)/"]]],
  ["z", "sand", [["<b><u>z</u></b>oo", "/zuː/"]]], ["ʒ", "lilac", [["vi<b><u>s</u></b>ion", "/ˈvɪʒn/"]]], null
];

const englishOther = [
  ["m", "aqua", [["<b><u>m</u></b>y", "/maɪ/"]]], ["n", "aqua", [["<b><u>n</u></b>igh", "/naɪ/"]]],
  ["ŋ", "grey", [["si<b><u>ng</u></b>", "/sɪŋ/"]]], ["h", "grey", [["<b><u>h</u></b>igh", "/haɪ/"]]],
  ["w", "grey", [["<b><u>w</u></b>ine", "/waɪn/"]]], ["r", "grey", [["<b><u>r</u></b>ain", "/reɪn/"]]],
  ["l", "grey", [["<b><u>l</u></b>ie", "/laɪ/"]]], ["j", "grey", [["<b><u>y</u></b>es", "/jɛs/"]]],
  ["dj", "grey", [["<b><u>d</u></b>ew", "/djuː/"]]]
];

function makeCard(entry) {
  if (!entry) return "<div class=\"empty-cell\" aria-hidden=\"true\"></div>";
  const ipa = entry[0];
  const tone = entry[1] ? " tone-" + entry[1] : "";
  const examples = entry[2].map(function (example) {
    return "<span>" + example[0] + " <i>" + example[1] + "</i></span>";
  }).join("");
  const footnote = entry[3] ? "<sup>" + entry[3] + "</sup>" : "";
  return "<article class=\"ipa-card" + tone + "\"><div class=\"symbol\">" +
    ipa + footnote + "</div><div class=\"examples\">" + examples +
    "</div></article>";
}

function renderCards(id, entries) {
  document.getElementById(id).innerHTML = entries.map(makeCard).join("");
}

function renderStacks(id, columns) {
  document.getElementById(id).innerHTML = columns.map(function (column) {
    return "<div class=\"card-stack\">" + column.map(makeCard).join("") + "</div>";
  }).join("");
}

renderCards("french-oral", frenchOral);
renderCards("french-nasal", frenchNasal);
renderCards("french-glides", frenchGlides);
renderCards("french-consonants", frenchConsonants);
renderCards("english-short", englishShort);
renderCards("english-long", englishLong);
renderStacks("english-diphthongs", englishDiphthongColumns);
renderCards("english-voiceless", englishVoiceless);
renderCards("english-voiced", englishVoiced);
renderCards("english-other", englishOther);

const poster = document.querySelector(".poster");
const viewport = document.querySelector(".viewport");
const printButton = document.querySelector("#print-poster");

function fitPoster() {
  const availableWidth = Math.max(1, window.innerWidth - 32);
  const maxPreviewWidth = 1130;
  const scale = Math.min(1, availableWidth / poster.offsetWidth,
    maxPreviewWidth / poster.offsetWidth);

  poster.style.transform = "scale(" + scale + ")";
  viewport.style.width = poster.offsetWidth * scale + "px";
  viewport.style.height = poster.offsetHeight * scale + "px";
}

printButton.addEventListener("click", function () { window.print(); });
window.addEventListener("resize", fitPoster);
fitPoster();
