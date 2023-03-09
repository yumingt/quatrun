import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'sketch.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'MyLibrary'
  },
  plugins: [
    nodeResolve(),
    commonjs()
  ]
};
/*
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'sketch.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
      ],
    }),
  ],
};
*/


/*import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'sketch.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env']
    })
  ]
}*/


/*import copy from "rollup-plugin-copy";

module.exports = {
  input: "index.js",
  output: {
    dir: "dist",
  },
  treeshake: false,
  plugins: [
    copy({
      targets: [{ src: ["index.html", "p5.play.js", "p5.serialport.js", "player.js", "sketch.js", "blob.js", "style.css", "1pot.PNG", "background.PNG", "box cat.PNG", "game over black.png", "ground.PNG"], dest: "dist" }],
    }),
  ],
};*/