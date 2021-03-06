export default {
  components: true,
  head: {
    titleTemplate: 'Nuxt BnB | %s',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: ['my-style']
    },
    meta: [{
      charset: 'UTF-8'
    }]
  },
  router: {
    prefetchLinks: false
  },
  plugins: ['~/plugins/maps.client', '~/plugins/dataApi', '~/plugins/auth.client'],
  env: {
    MAPS_API_KEY: process.env.MAPS_API_KEY,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY
  },
  publicRuntimeConfig: {
    auth: {
      cookieName: 'idToken',
      clientId: process.env.GOOGLE_CLIENT_ID
    }
  },
  modules: ['~/modules/auth'],
  buildModules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/sass/app.scss'],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0
    }
  }
}
