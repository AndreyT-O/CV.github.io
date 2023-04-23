import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { VitePluginFonts } from 'vite-plugin-fonts'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// // https://vitejs.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === "production" ? "/CV.github.io/" : "/",
	plugins: [
		vue(), 
		vueJsx(),
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
			symbolId: 'icon-[name]',
			inject: 'body-last',
			customDomId: 'sprite-basic',
		}),
		VitePluginFonts({
			google: {
				preconnect: true,
				injectTo: 'head-prepend',
				families: [{
					name: 'Neucha'
				}]

			}
			// custom: {
			// 	families: [{
			// 		name: 'Montserrat',
			// 		local: 'Montserrat',
			// 		src: './src/assets/fonts/*.woff'
			// 	}],
			// 	injectTo: 'head-prepend',
			// 	preload: true,
			// },
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@components': fileURLToPath(new URL('./src/views/components', import.meta.url)),
			'@pages': fileURLToPath(new URL('./src/views/pages', import.meta.url)),
			'@views': fileURLToPath(new URL('./src/views', import.meta.url)),
			'@scss': fileURLToPath(new URL('./src/assets/scss', import.meta.url))
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import "./src/assets/scss/helpers/mixins.scss";
					@import "./src/assets/scss/helpers/variables.scss";
					
				`
			}
		}
	}
})
