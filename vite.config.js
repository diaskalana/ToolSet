// vite.config.js
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    plugins: [
        // input https://www.npmjs.com/package/html-minifier-terser options
        ViteMinifyPlugin({}),
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer({}) // add options if needed
            ],
        }
    }
})