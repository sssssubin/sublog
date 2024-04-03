import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    screenWidth: window.innerWidth,
  },
  mutations: {
    SET_SCREEN_WIDTH(state, width) {
      state.screenWidth = width;
    },
  },
  actions: {
    checkScreenWidth({ commit }) {
      const handleResize = () => {
        commit('SET_SCREEN_WIDTH', window.innerWidth);
      };
      // 초기 해상도 설정
      handleResize();
      // 창 크기 변경 이벤트 리스너 등록
      window.addEventListener('resize', handleResize);
    },
  },
  getters: {
    isMobile(state) {
      return state.screenWidth < 768; // 예시: 가로 해상도 768px 이하면 모바일로 간주
    },
    screenWidth(state) {
      return state.screenWidth;
    },
  },
});
