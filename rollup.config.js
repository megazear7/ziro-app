import filesize from 'rollup-plugin-filesize';
import {terser} from 'rollup-plugin-terser';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy'
import cleanup from 'rollup-plugin-cleanup';

export default {
  input: 'app/index.js',
  output: {
    file: 'site/index.js'
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({'Reflect.decorate': 'undefined', preventAssignment: true}),
    nodeResolve(),
    copy({
      targets: [
        { src: 'app/index.css', dest: 'site' },
        { src: 'app/index.html', dest: 'site' },
        { src: 'app/manifest.json', dest: 'site' },
        { src: 'app/sw.js', dest: 'site' },
        { src: 'app/assets/**/*', dest: 'site/assets' }
      ]
    }),
    terser({
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    filesize({
      showBrotliSize: true,
    }),
    cleanup({
      comments: 'none'
    })
  ]
}
