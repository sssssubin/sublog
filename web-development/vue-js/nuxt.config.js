export default {
  /*
   ** Headers of the page
   */
  head: {
    title: "vue-js",
    meta: [
      { charset: "utf-8" },
      { lang: 'ko' },
      { name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;800&family=Noto+Sans+KR:wght@300;400;500;700&display=swap",
      },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
    babel: {
      // envName: server, client, modern
      presets({ envName }) {
        return [
          [
            "@nuxt/babel-preset-app",
            {
              corejs: { version: 3 },
            },
          ],
        ];
      },
    },
  },
  css: ["~assets/scss/common.scss"],
  buildModules: [
    "@nuxtjs/style-resources",
  ],
  styleResources: {
    scss: ["@/assets/scss/_*.scss"],
  },
  target: "static", // 정적 웹사이트임을 명시
  router: {
    base: "/sublog/", // github repository 이름 넣기
  },
  components: true,
};
