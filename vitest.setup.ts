import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

// next-intl reads the request locale through server helpers that have no
// meaning in a unit test. Components under test are handed their strings
// directly, so the hooks are stubbed with something that behaves like the
// real ones: a lookup that returns the key when a string is missing, which
// is what makes a missing translation visible rather than silent.
vi.mock("next-intl", async () => {
  const actual = await vi.importActual<typeof import("next-intl")>("next-intl");
  return {
    ...actual,
    useTranslations: () => {
      const translate = (key: string) => key;
      translate.rich = (key: string) => key;
      translate.raw = (key: string) => key;
      return translate;
    },
    useLocale: () => "en",
  };
});
