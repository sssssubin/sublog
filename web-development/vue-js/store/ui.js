export const state = () => ({
  isMobile: false,
})

export const getters = {
  getIsMobile(state, getters, rootState) {
    return state.isMobile
  },
}

export const mutations = {
  mutationMobileInfo(state, isMobile) {
    state.isMobile = isMobile
  },
}

export const actions = {
  setMobile(store, isMobile) {
    console.log("isMobile : ", isMobile)
    if (isMobile) store.commit("mutationMobileInfo", true)
    else store.commit("mutationMobileInfo", false)
  },
}
