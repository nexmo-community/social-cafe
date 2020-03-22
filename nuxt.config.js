
export default {
  mode: 'spa',
  head: {
    title: 'Social Cafe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  router: {
    mode: 'hash'
  },
  css: [
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/dotenv'
  ],
  env: {
    EMBED_ID: process.env.EMBED_ID
  },
  build: {
    extend (config, ctx) {
    }
  }
}
