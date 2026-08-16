import { describe, it, expect } from "vitest";
import { locales } from "../i18n/locales";

import en from "./en.json";
import nl from "./nl.json";
import zh from "./zh.json";

/**
 * A four-language site drifts one key at a time.
 *
 * Someone adds a string to the English file to ship a new section, the
 * other files are updated later or not at all, and the gap only shows up
 * when a visitor in that language reaches that section and sees a raw key.
 * These cases turn every such gap into a failed test instead.
 *
 * The set under test is the set the app actually serves, taken from
 * `locales` rather than from whatever JSON happens to be in this folder,
 * so a file nobody routes to cannot make the suite pass or fail.
 */

type Tree = Record<string, unknown>;

const bundles: Record<string, Tree> = { en, nl, zh };

/** Every leaf path in a message tree, in sorted order. */
function paths(tree: Tree, prefix = ""): string[] {
  const found: string[] = [];
  for (const [key, value] of Object.entries(tree)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      found.push(...paths(value as Tree, path));
    } else {
      found.push(path);
    }
  }
  return found.sort();
}

/** The value at a dotted path. */
function at(tree: Tree, path: string): unknown {
  return path.split(".").reduce<unknown>((node, key) => {
    if (node && typeof node === "object") return (node as Tree)[key];
    return undefined;
  }, tree);
}

const reference = paths(en);

describe("the languages the site serves", () => {
  it("routes exactly the locales it has bundles for", () => {
    expect([...locales].sort()).toEqual(Object.keys(bundles).sort());
  });

  it("serves English", () => {
    expect(locales).toContain("en");
  });

  it("has a non-empty reference bundle", () => {
    expect(reference.length).toBeGreaterThan(100);
  });
});

describe.each(Object.entries(bundles))("the %s bundle", (name, bundle) => {
  const own = paths(bundle);

  it("carries every key English carries", () => {
    const missing = reference.filter((key) => !own.includes(key));
    expect(missing, `${name} is missing ${missing.length} keys`).toEqual([]);
  });

  it("carries no key English does not", () => {
    const extra = own.filter((key) => !reference.includes(key));
    expect(extra, `${name} has ${extra.length} keys English does not`).toEqual([]);
  });

  it("has exactly as many keys as English", () => {
    expect(own).toHaveLength(reference.length);
  });

  it("holds a string at every key", () => {
    const wrong = own.filter((key) => typeof at(bundle, key) !== "string");
    expect(wrong, `${name} has non-string values`).toEqual([]);
  });

  it("has nothing blank", () => {
    const blank = own.filter((key) => String(at(bundle, key)).trim() === "");
    expect(blank, `${name} has blank values`).toEqual([]);
  });

  it("has the same shape at the top level", () => {
    expect(Object.keys(bundle).sort()).toEqual(Object.keys(en).sort());
  });
});

describe("what the translations must not do", () => {
  it("never leaves an English string sitting in another language", () => {
    // A handful of strings are the same everywhere on purpose: a brand
    // name is not translated. Anything beyond that is a copy-paste that
    // never got translated.
    for (const [name, bundle] of Object.entries(bundles)) {
      if (name === "en") continue;
      const identical = reference.filter((key) => at(bundle, key) === at(en, key));
      const share = identical.length / reference.length;
      expect(share, `${name} repeats ${identical.length} English strings`).toBeLessThan(0.5);
    }
  });

  it("keeps the placeholder set of every string", () => {
    const placeholders = (value: unknown) =>
      String(value).match(/\{[a-zA-Z0-9_]+\}/g)?.sort() ?? [];

    for (const [name, bundle] of Object.entries(bundles)) {
      for (const key of reference) {
        expect(
          placeholders(at(bundle, key)),
          `${name}.${key} does not carry the same placeholders as English`
        ).toEqual(placeholders(at(en, key)));
      }
    }
  });

  it("has a navigation section in every language", () => {
    for (const bundle of Object.values(bundles)) {
      expect(bundle).toHaveProperty("nav");
    }
  });

  it("has a footer section in every language", () => {
    for (const bundle of Object.values(bundles)) {
      expect(bundle).toHaveProperty("footer");
    }
  });

  it("has a hero section in every language", () => {
    for (const bundle of Object.values(bundles)) {
      expect(bundle).toHaveProperty("hero");
    }
  });
});
