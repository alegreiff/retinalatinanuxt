const pkg = require('./package')


const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name + ' : ' + pkg.version,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ],
    script: [
      { src: "https://www.gstatic.com/charts/loader.js" },
      { src: "/cargaGoogleMap.js" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl', "@/assets/sass/estilos.scss"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify', '~/plugins/lodash', '~/plugins/componentes_comunes', '~/plugins/filtros', '~/plugins/funciones_globales'
  ],

  /*
  ** Nuxt.js modules
  */
 


  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    /* '@nuxtjs/axios', '@nuxtjs/moment', */
    "@nuxtjs/axios", ["@nuxtjs/moment", { locales: ["es-us"] }]
  ],
  /*
  ** Axios module configuration
  */
 axios: {
  baseURL: process.env.BASE_URL || "https://js.presencia.co",
  credentials: false
},

  /*
  ** Build configuration
  */
  buildDir: "static/nua",
  build: {
    publicPath: process.env.NODE_ENV === "production" ? "nua/dist/client" : "",
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },
    
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
