// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr:true,
  app:{
    head:{
      title:"", //app tittle
      htmlAttrs:{
        lang:'en',
      },
      meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
			],
			link: [
				{ rel: 'icon', type: 'image/png', href: '/assets/favicon.png'}
			],
    }
  },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'dayjs-nuxt'
  ],
  quasar: { 
    plugins: ['Notify', 'Dialog', 'Loading'], 
  },

  tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config',
	},
  css: [
		'~/assets/css/quasar.scss',
		// '@fortawesome/fontawesome-svg-core/styles.css',
		// 'maz-ui/css/main.css',
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
		locales: ['zh', 'en'],
		plugins: ['relativeTime', 'utc', 'timezone','customParseFormat'],
		defaultLocale: 'zh',
		defaultTimezone: 'Asia/Malaysia',
	},

})
