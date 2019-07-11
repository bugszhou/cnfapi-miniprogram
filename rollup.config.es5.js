import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/entry/index.js',
  output: [
    {
      name: 'cnfapi-miniprogram',
      file: 'dist/cnfapi-miniprogram.dev.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    {
      name: 'cnfapi-miniprogram',
      file: 'dist/cnfapi-miniprogram.min.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      configFile: path.resolve(__dirname, './src/entry/.babelrc'),
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    terser({
      include: [/^.+\.min\.js$/],
    }),
  ],
};
