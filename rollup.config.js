import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

export default {
  external: ['lodash', 'url-parse', 'events'],
  input: 'src/entry/index.js',
  output: [
    {
      name: 'cnfapi-miniprogram',
      file: 'dist/cnfapi-miniprogram.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    {
      name: 'cnfapi-miniprogram',
      file: 'dist/cnfapi-miniprogram.common.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    {
      file: 'dist/cnfapi-miniprogram.esm.js',
      format: 'esm',
      sourcemap: true,
      strict: true,
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
      include: [/^.+\.common\.js$/],
    }),
  ],
};
