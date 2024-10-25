import { describe, expect, test } from "vitest";

import { transliterate } from "./transliterate";

describe("transliterate", () => {
  describe("common cases", () => {
    test("should transliterate `gamarjoba` to georgian", () => {
      const text = "gamarjoba";
      const expected = "გამარჯობა";

      expect(transliterate(text)).toBe(expected);
    });

    test("should transliterate `sakartvelo` to georgian", () => {
      const text = "sakartvelo";
      const expected = "საქართველო";

      expect(transliterate(text)).toBe(expected);
    });

    test("should transliterate `tbilisi`to georgian", () => {
      const text = "tbilisi";
      const expected = "თბილისი";

      expect(transliterate(text)).toBe(expected);
    });

    test("should transliterate `ch'aba` to georgian", () => {
      const text = "ch'aba";
      const expected = "ჭაბა";

      expect(transliterate(text)).toBe(expected);
    });
  });

  describe("random phrases", () => {
    test("should transliterate to georgian", () => {
      const text =
        "Gatsnobebt, rom 31 ivliss, saqartvelos umetes regionshi mosalodnelia amindis mkvetri gauareseba.";
      const expected =
        "Გაცნობებთ, რომ 31 ივლისს, საყართველოს უმეთეს რეგიონში მოსალოდნელია ამინდის მქვეთრი გაუარესება.";

      const result = transliterate(text);

      expect(result).toBe(expected);
    });

    test("should transliterate to georgian", () => {
      const text = "mosakhleobas movutsodebt siphrtkhilisken.";
      const expected = "მოსახლეობას მოვუცოდებთ სიფჰრთხილისქენ.";

      const result = transliterate(text);

      expect(result).toBe(expected);
    });
  });

  describe("URLs", () => {
    test("should transliterate text with http URL to georgian", () => {
      const text = "ikhilet http://example.com det'alebistvis";
      const expected = "იხილეთ http://example.com დეტალებისთვის";

      const result = transliterate(text);

      expect(result).toBe(expected);
    });

    test("should transliterate text with https URL to georgian", () => {
      const text = "ikhilet https://example.com det'alebistvis";
      const expected = "იხილეთ https://example.com დეტალებისთვის";

      const result = transliterate(text);

      expect(result).toBe(expected);
    });

    test("should transliterate text with ftp URL to georgian", () => {
      const text = "ikhilet ftp://example.com det'alebistvis";
      const expected = "იხილეთ ftp://example.com დეტალებისთვის";

      const result = transliterate(text);

      expect(result).toBe(expected);
    });

    test("should transliterate text with file URL to georgian", () => {
      const text = "ikhilet file://example.com det'alebistvis";
      const expected = "იხილეთ file://example.com დეტალებისთვის";

      const result = transliterate(text);

      expect(result).toBe(expected);
    });
  });
});
