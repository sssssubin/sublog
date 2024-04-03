import Vue from 'vue';
import App from './App.vue';
import store from './store/ui';
import router from './router/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    // 해상도 변경 감지 액션 실행
    this.$store.dispatch('checkScreenWidth');
  },
}).$mount('#app');
