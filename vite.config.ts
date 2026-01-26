import { defineConfig } from "vite";
import type { CSSModulesConfig, Drafts, Features, NonStandard, PseudoClasses, Targets } from "lightningcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: { minify: "esbuild", outDir: "./build", cssMinify: "lightningcss" },
  css: {
    transformer: "lightningcss",
    lightningcss: {
      minify: true,
    },
  },
  base: "./",
});
