import { describe, it, expect } from "vitest";
import { locales, defaultLocale, isLocale } from "./locales";

/**
 * The locale list is the one piece of configuration every other part of
 * the site reads: the middleware routes on it, the layout renders on it,
 * and the message bundles are checked against it. A mistake here is not a
 * mistake in one page, it is a mistake on every page in one language.
 */

describe("the locale list", () => {
  it("names at least one language", () => {
    expect(locales.length).toBeGreaterThan(0);
  });

  it("has no duplicates", () => {
    expect(new Set(locales).size).toBe(locales.length);
  });

  it("uses short lowercase codes", () => {
    for (const locale of locales) {
      expect(locale).toMatch(/^[a-z]{2}$/);
    }
  });

  it("includes the default", () => {
    expect(locales).toContain(defaultLocale);
  });

  it("defaults to English", () => {
    expect(defaultLocale).toBe("en");
  });
});

describe("recognising a locale", () => {
  it("accepts every language the site serves", () => {
    for (const locale of locales) {
      expect(isLocale(locale)).toBe(true);
    }
  });

  it("refuses a language the site does not serve", () => {
    expect(isLocale("fr")).toBe(false);
    expect(isLocale("de")).toBe(false);
  });

  it("Trap: refuses Arabic, which has a bundle but is not routed", () => {
    // messages/ar.json exists but is not in the list, so nothing serves
    // it. This is here so that adding the bundle back to the list is a
    // deliberate act rather than something that happens by accident.
    expect(isLocale("ar")).toBe(false);
  });

  it("refuses an empty string", () => {
    expect(isLocale("")).toBe(false);
  });

  it("Trap: refuses a code that differs only in case", () => {
    expect(isLocale("EN")).toBe(false);
  });

  it("Trap: refuses a regional variant of a served language", () => {
    expect(isLocale("en-GB")).toBe(false);
  });

  it("refuses something that is not a language at all", () => {
    expect(isLocale("favicon.ico")).toBe(false);
    expect(isLocale("api")).toBe(false);
  });
});
