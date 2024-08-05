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
  const urlRegex = /((https?|ftp|file):\/\/\S+)/g;

  const sortedKeys = Object.keys(georgianTranslitMap).sort(
    (a, b) => b.length - a.length,
  ) as (keyof typeof georgianTranslitMap)[];

  const urlMap = new Map<string, string>();
  let index = 0;
  let modifiedText = text
    .split(" ")
    .map((word) => {
      if (urlRegex.test(word)) {
        const placeholder = `__###_${index}__`;
        urlMap.set(placeholder, word);
        index++;
        return placeholder;
      }
      return word;
    })
    .join(" ");

  for (const latin of sortedKeys) {
    const georgian = georgianTranslitMap[latin];
    const regex = new RegExp(latin, "gi");
    modifiedText = modifiedText.replace(regex, (match) => {
      return match === match.toUpperCase()
        ? georgian.toUpperCase()
        : georgian.toLowerCase();
    });
  }

  // Восстановление URL из плейсхолдеров
  for (const [placeholder, url] of urlMap.entries()) {
    modifiedText = modifiedText.replaceAll(placeholder, url);
  }

  return modifiedText;
}
