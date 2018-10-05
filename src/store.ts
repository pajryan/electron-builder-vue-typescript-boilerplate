import Vue from 'vue'
import Vuex from 'vuex'

const appVersion = require('electron').remote.app.getVersion()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAdmin: true,
    applicationVersion: appVersion
  },
  mutations: {
    setIsAdmin(state, isAdmin) {
      state.isAdmin = isAdmin
    }
  },
  actions: {

  }
})
