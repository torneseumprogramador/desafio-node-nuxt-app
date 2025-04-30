// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
          integrity: 'sha384-ENjdO4Dr2bkBIFxQpeoVFnkS7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM+',
          crossorigin: 'anonymous'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-qQ2S1+Z5LpCDq1d1q9UiMBQmv9PfveQqtK5FzvZzld9s3DYQ5exh0C6ywnm5LgN9',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL
    }
  }
})
