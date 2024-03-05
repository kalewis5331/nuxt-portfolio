// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: `Kevin's Portfolio`,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },
  },
  css: ['~/assets/app.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    [
      'nuxt-graphql-server',
      {
        url: '/relative/path/to/your/graphql/endpoint',
        schema: './server/**/*.graphql',
      },
    ],
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    ghToken: 'placeholder',
    personalGHUrl: 'user/repos',
    professionalGHUrl: 'users/kalewis5331/repos',
  },
})
