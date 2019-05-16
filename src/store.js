import Vue from 'vue'
import Vuex from 'vuex'
import Service from './service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    estabelecimentos: []
  },
  mutations: {
    getEstabelecimentos: (state, payload) => {
      state.estabelecimentos = payload
      console.log(state.estabelecimentos)
    }
  },
  actions: {
    getEstabelecimentos: async (context) => {
      const response = await Service.getEstabelecimentos()
      context.commit('getEstabelecimentos', response.data.estabelecimentos)
    }
  }
})
