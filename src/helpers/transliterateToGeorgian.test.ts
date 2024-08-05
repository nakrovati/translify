import { describe, expect, test } from "bun:test";

import transliterateToGeorgian from "./transliterateToGeorgian";

describe("transliterateToGeorgian", () => {
  describe("common cases", () => {
    test("should transliterate `gamarjoba` to georgian", () => {
      const text = "gamarjoba";
      const expected = "გამარჯობა";

      expect(transliterateToGeorgian(text)).toBe(expected);
    });

    test("should transliterate `sakartvelo` to georgian", () => {
      const text = "sakartvelo";
      const expected = "საქართველო";

      expect(transliterateToGeorgian(text)).toBe(expected);
    });

    test("should transliterate `tbilisi`to georgian", () => {
      const text = "tbilisi";
      const expected = "თბილისი";

      expect(transliterateToGeorgian(text)).toBe(expected);
    });

    test("should transliterate `ch'aba` to georgian", () => {
      const text = "ch'aba";
      const expected = "ჭაბა";

      expect(transliterateToGeorgian(text)).toBe(expected);
    });
  });

  describe("random phrases", () => {
    test("should transliterate to georgian", () => {
      const text =
        "Gatsnobebt, rom 31 ivliss, saqartvelos umetes regionshi mosalodnelia amindis mkvetri gauareseba.";
      const expected =
        "Გაცნობებთ, რომ 31 ივლისს, საყართველოს უმეთეს რეგიონში მოსალოდნელია ამინდის მქვეთრი გაუარესება.";

      const result = transliterateToGeorgian(text);

      expect(result).toBe(expected);
    });

    test("should transliterate to georgian", () => {
      const text = "mosakhleobas movutsodebt siphrtkhilisken.";
      const expected = "მოსახლეობას მოვუცოდებთ სიფჰრთხილისქენ.";

      const result = transliterateToGeorgian(text);

      expect(result).toBe(expected);
    });
  });

  describe("URLs", () => {
    test("should transliterate text with http URL to georgian", () => {
      const text = "ikhilet http://example.com det'alebistvis";
      const expected = "იხილეთ http://example.com დეტალებისთვის";

      const result = transliterateToGeorgian(text);

      expect(result).toBe(expected);
    });

    test("should transliterate text with https URL to georgian", () => {
      const text = "ikhilet https://example.com det'alebistvis";
      const expected = "იხილეთ https://example.com დეტალებისთვის";

      const result = transliterateToGeorgian(text);

      expect(result).toBe(expected);
    });

    test("should transliterate text with ftp URL to georgian", () => {
      const text = "ikhilet ftp://example.com det'alebistvis";
      const expected = "იხილეთ ftp://example.com დეტალებისთვის";

      const result = transliterateToGeorgian(text);

      expect(result).toBe(expected);
    });

    test("should transliterate text with file URL to georgian", () => {
      const text = "ikhilet file://example.com det'alebistvis";
      const expected = "იხილეთ file://example.com დეტალებისთვის";

      const result = transliterateToGeorgian(text);

      expect(result).toBe(expected);
    });
  });
});
