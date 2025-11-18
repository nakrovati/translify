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

interface TransliterateOptions {
  preserveUrls?: boolean;
}

function replaceUrls(text: string) {
  const urlRegex = /((https?|ftp|file):\/\/\S+)/g;
  const urlMap = new Map<string, string>();
  let index = 0;

  const modifiedText = text.replaceAll(urlRegex, (url) => {
    const placeholder = `__###_${index}__`;
    urlMap.set(placeholder, url);
    index++;
    return placeholder;
  });

  return { modifiedText, urlMap };
}

function restoreUrls(text: string, urlMap: Map<string, string>): string {
  let restoredText = text;
  for (const [placeholder, url] of urlMap.entries()) {
    restoredText = restoredText.replaceAll(placeholder, url);
  }
  return restoredText;
}

function transliterateText(
  text: string,
  translitMap: Record<string, string>,
): string {
  let modifiedText = text;

  const sortedKeys = Object.keys(translitMap).toSorted(
    (a, b) => b.length - a.length,
  );

  for (const latin of sortedKeys) {
    const letter = translitMap[latin];
    const regex = new RegExp(latin, "gi");
    modifiedText = modifiedText.replace(regex, (match) => {
      return match === match.toUpperCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
    });
  }
  return modifiedText;
}

const defaultOptions: TransliterateOptions = {
  preserveUrls: true,
};

export function transliterate(
  text: string,
  options: TransliterateOptions = {},
): string {
  const config = { ...defaultOptions, ...options };

  const translitMap = georgianTranslitMap;

  if (config.preserveUrls) {
    const { modifiedText, urlMap } = replaceUrls(text);

    const transliteratedText = transliterateText(modifiedText, translitMap);

    return restoreUrls(transliteratedText, urlMap);
  }

  return transliterateText(text, translitMap);
}
