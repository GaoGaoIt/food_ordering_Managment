// https://nuxt.com/docs/api/configuration/nuxt-config
import zh from './lang/zh.json'
export default defineNuxtConfig({
	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},
	ssr: true,
	alias: {
		assets: "/_nuxt/assets"
	},
	app: {
		head: {
			title: "dev-food_managment", //app tittle
			htmlAttrs: {
				lang: 'en',
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
			],
			link: [
				// { rel: 'icon', type: 'image/png', href: '/assets/favicon.png'}
			],
		}
	},
	modules: [
		'nuxt-quasar-ui',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/i18n',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
		'maz-ui/nuxt',
		'dayjs-nuxt',
	],

	quasar: {
		plugins: ['Notify', 'Dialog', 'Loading'],
	},
	components: [
		{
			path: '~/components',
			extensions: ['.vue'],
			pathPrefix: false,
		},
	],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config',
	},
	css: [
		'~/assets/css/quasar.scss',
		// '@fortawesome/fontawesome-svg-core/styles.css',
		'maz-ui/css/main.css',
	],
	i18n: {
		locales: [
			{
				code: 'zh',
				file: 'zh.json',
			},
		],
		lazy: true,
		langDir: 'lang',
		defaultLocale: 'zh',
	},
	dayjs: {
		locales: ['en', 'zh'],
		plugins: ['relativeTime', 'utc', 'timezone', 'updateLocale'],
		defaultLocale: 'zh',
		defaultTimezone: 'Asia/Malaysia',
	},
	build: {
		transpile: ['maz-ui' ,'vue-avatar-editor-improved'], // ⚠️ important ⚠️
	},
	mazUi: {
		injectUseToast: true,
	},

})