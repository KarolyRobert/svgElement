import { resolve } from 'node:path'
import macrosPlugin from 'vite-plugin-babel-macros'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    macrosPlugin()
  ], 
  define: {
    'process.env': {},
  },
  build: {
    lib: {
      entry: resolve('src', 'index.js'),
      name: 'svgElement',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `svgElement.${format}.js`,
    },
    manifest: true,
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  }
})
