import { createStore } from 'vuex'

export default createStore({
  state: {
    userId: "17b102d5-13cc-4b58-8665-30fad179dbc2",
    profileStore:[],
    pass:0,
  },
  getters: {
  },
  mutations: {
    set(state, value) {
      state.userId = value;
    },
    setProfile(state, value) {
      state.profileStore = value;
    },
    setPass(state, value) {
      state.pass = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
