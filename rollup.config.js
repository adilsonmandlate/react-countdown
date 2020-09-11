import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      compact: true,
    },
    {
      file: pkg.module,
      format: "es",
      compact: true,
    },
  ],
  plugins: [
    terser(),
    external(),
    url({ exclude: ["**/*.svg"] }),
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
    cleanup(),
  ],
};
