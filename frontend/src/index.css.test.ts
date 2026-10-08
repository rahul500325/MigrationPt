// @vitest-environment node
import tailwindcss from "@tailwindcss/vite";
import { build, type Rollup } from "vite";
import { describe, expect, it } from "vitest";

// Nothing else compiles CSS: `tsc` ignores it and no component test imports it,
// so a broken Tailwind toolchain — a plugin whose engine packages resolved to a
// different 4.x, say — first surfaces as a dev-server overlay in the browser.
// Input is relative to the package root, which is where every script runs.
describe("index.css", () => {
  it("compiles through the Tailwind plugin", async () => {
    const result = (await build({
      configFile: false,
      logLevel: "silent",
      plugins: [tailwindcss()],
      build: { write: false, rollupOptions: { input: "src/index.css" } },
    })) as Rollup.RollupOutput;

    const css = result.output.find((chunk) => chunk.fileName.endsWith(".css"));
    expect(css).toBeDefined();
    expect(String((css as Rollup.OutputAsset).source)).toContain("--color-brand");
  });
});
