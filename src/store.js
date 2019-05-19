import Vue from 'vue'
import Vuex from 'vuex'
import Service from './service'
import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urls: [
      { nome: 'Estabelecimentos', url: '/estabelecimentos', icon: 'home' },
      { nome: 'Promoções', url: '/promoções', icon: 'attach_money' },
      { nome: 'Entrar', url: '/login', icon: 'account_circle' }
    ],
    estabelecimentos: [],
    animacao: 'list'
  },
  mutations: {
    getEstabelecimentos: (state, payload) => {
      state.estabelecimentos = payload
    },
    removerAnimacao: (state) => {
      state.animacao = ''
    },
    adicionarAnimacao: (state) => {
      setTimeout(() => {
        state.animacao = 'list'
      }, 500)

    }
  },
  actions: {
    getEstabelecimentos: async (context) => {
      const response = await Service.getEstabelecimentos()
      context.commit('getEstabelecimentos', response.data.estabelecimentos)
    }
  }
})
