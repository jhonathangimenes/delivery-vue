import Vue from 'vue'
import Vuex from 'vuex'
import Service from './service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urls: {
      estabelecimento: '/estabelecimentos',
      promocoes: '/promoções',
      entrar: '/login'
    },
    estabelecimentos: []
  },
  mutations: {
    getEstabelecimentos: (state, payload) => {
      state.estabelecimentos = payload
    }
  },
  actions: {
    getEstabelecimentos: async (context) => {
      const response = await Service.getEstabelecimentos()
      context.commit('getEstabelecimentos', response.data.estabelecimentos)
    }
  }
})
