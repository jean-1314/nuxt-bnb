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
  plugins: [
    '~/plugins/maps.client',
    '~/plugins/dataApi',
    '~/plugins/auth.client',
    '~/plugins/vCalendar.client'
  ],
  env: {
    MAPS_API_KEY: process.env.MAPS_API_KEY,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY
  },
  publicRuntimeConfig: {
    auth: {
      cookieName: 'idToken',
      clientId: process.env.GOOGLE_CLIENT_ID
    },
    algolia:{
      appId: process.env.ALGOLIA_APP_ID,
      key: process.env.ALGOLIA_API_KEY,
    },
    cloudinary:{
      apiKey: process.env.CLOUDINARY_API_KEY,
    }
  },
  privateRuntimeConfig: {
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      key: process.env.ALGOLIA_PRIVATE_API_KEY
    },
    cloudinary: {
      apiSecret: process.env.CLOUDINARY_API_SECRET
    }
  },
  modules: ['~/modules/auth', '~/modules/algolia', '~/modules/cloudinary', '@nuxtjs/cloudinary'],
  cloudinary:{
    cloudName: process.env.CLOUDINARY_CLOUND_NAME,
  },
  image: {
    cloudinary: {
      baseURL: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUND_NAME}/image/upload/`
    }
  },
  buildModules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  css: ['~/assets/sass/app.scss'],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0
    }
  }
}
