import type { RollupOptions } from "rollup";
import esbuild from "rollup-plugin-esbuild";

const config: RollupOptions = {
  input: "./dist/index.js",
  output: [
    {
      file: "./dist/index.mjs",
      format: "esm",
      exports: "named",
    },
  ],
  plugins: [
    esbuild({
      target: "ESNext",
      tsconfig: "./tsconfig.build.json",
    }),
  ],
};

export default config;
