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
  plugins: ['~/plugins/maps.client', '~/plugins/dataApi'],
  env: {
    MAPS_API_KEY: process.env.MAPS_API_KEY,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY
  }
}
