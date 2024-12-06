import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import copy from "rollup-plugin-copy";
import external from "rollup-plugin-auto-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import alias from "rollup-plugin-alias";

import pkg from "./package.json";

export default {
  input: `src/react-elastic-carousel/index.js`,
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    alias({
      "react-elastic-carousel": `./src/react-elastic-carousel/index.js`,
    }),
    external(),
    postcss({
      modules: false,
    }),
    url(),
    babel({
      exclude: "node_modules/**",
      plugins: ["@babel/external-helpers"],
    }),
    resolve(),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/react-is/index.js": ["isValidElementType"],
      },
    }),
    copy({
      targets: [{ src: `src/react-elastic-carousel/index.d.ts`, dest: "dist" }],
    }),
  ],
};
