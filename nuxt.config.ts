// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@pinia/nuxt',
      'vuetify-nuxt-module',
      '@nuxt/image',
      '@vue-email/nuxt'
  ],
    css: ['~/assets/css/main.css'],
    vuetify: {
        vuetifyOptions: {
            theme: {
                defaultTheme: 'light',
                themes: {
                    dark: {
                        colors: {
                            // primary: '#1867C0',
                            // secondary: '#5CBBF6',
                        },
                    },
                },
            },
            icons: {
                defaultSet: 'mdi',
            }
        }
    },
    vueEmail: {
        baseUrl: 'https://www.pagievoegeli.com/',
        autoImport: true,
    }
});