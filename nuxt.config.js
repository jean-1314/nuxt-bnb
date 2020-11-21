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
  plugins: ['~/plugins/maps.client'],
  env: {
    MAPS_API_KEY: process.env.MAPS_API_KEY
  }
}
