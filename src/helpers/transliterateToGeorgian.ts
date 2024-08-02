const georgianTranslitMap = {
  a: "ა",
  b: "ბ",
  ch: "ჩ",
  "ch'": "ჭ",
  d: "დ",
  dz: "ძ",
  e: "ე",
  g: "გ",
  gh: "ღ",
  h: "ჰ",
  i: "ი",
  j: "ჯ",
  k: "ქ",
  "k'": "კ",
  kh: "ხ",
  l: "ლ",
  m: "მ",
  n: "ნ",
  o: "ო",
  p: "ფ",
  "p'": "პ",
  q: "ყ",
  r: "რ",
  s: "ს",
  sh: "შ",
  t: "თ",
  "t'": "ტ",
  ts: "ც",
  "ts'": "წ",
  u: "უ",
  v: "ვ",
  w: "ც",
  x: "ხ",
  z: "ზ",
  zh: "ჟ",
};

export default function transliterateToGeorgian(text: string): string {
  let georgianText = text.toLowerCase();

  const sortedKeys = Object.keys(georgianTranslitMap).sort(
    (a, b) => b.length - a.length,
  ) as (keyof typeof georgianTranslitMap)[];

  for (const latin of sortedKeys) {
    const georgian = georgianTranslitMap[latin];
    georgianText = georgianText.replaceAll(new RegExp(latin, "g"), georgian);
  }

  return georgianText;
}
