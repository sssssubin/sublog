module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "vue-js",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
  },
  css: ["~assets/scss/common.scss"],
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["@/assets/scss/_*.scss"],
  },
  target: "static", // 정적 웹사이트임을 명시
  router: {
    base: "/sublog/", // github repository 이름 넣기
  },
};
