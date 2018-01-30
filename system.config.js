/* global SystemJS */

SystemJS.config({
  transpiler: 'ts',
  typescriptOptions: {
    tsconfig: true
  },
  packages: {
    ts: {
      main: 'lib/plugin.js'
    },
    typescript: {
      main: 'lib/typescript.js',
      meta: {
        'lib/typescript.js': {
          'exports': 'ts'
        }
      }
    },
    src: {
      defaultExtension: 'ts',
      format: 'esm'
    }
  },
  map: {
    ts: 'node_modules/plugin-typescript',
    typescript: 'node_modules/typescript'
  },
});
