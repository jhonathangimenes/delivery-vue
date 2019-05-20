import Vue from 'vue'
import Vuex from 'vuex'
import Service from './service'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urls: [
      { nome: 'Estabelecimentos', url: '/estabelecimentos', icon: 'home' },
      { nome: 'Promoções', url: '/promoções', icon: 'attach_money' }
    ],
    estabelecimentos: [],
    estabelecimentosPorCidade: [],
    cidades:[],
    cidade: {},
    animacao: 'list'
  },
  mutations: {
    getEstabelecimentos: (state, payload) => {
      state.estabelecimentos = payload
    },
    getCidades: (state, payload) => {
      state.cidades = payload
    },
    removerAnimacao: (state) => {
      state.animacao = ''
    },
    adicionarAnimacao: (state) => {
      setTimeout(() => {
        state.animacao = 'list'
      }, 500)
    },
    getEstabelecimentosPorCidade: (state, payload) => {
      state.estabelecimentosPorCidade = payload
      payload.length == 0 ? state.estabelecimentosPorCidade = ['vazio'] : state.estabelecimentosPorCidade = payload
    }
  },
  actions: {
    getEstabelecimentos: async (context) => {
      const response = await Service.getEstabelecimentos()
      context.commit('getEstabelecimentos', response.data.estabelecimentos)
    },
    getCidades: async (context) => {
      const response = await Service.getCidades()
      context.commit('getCidades', response.data)
    },
    getEstabelecimentosPorCidade: async (context, idCidade) => {
      const response = await Service.getEstabelecimentosPorCidade(idCidade)
      context.commit('getEstabelecimentosPorCidade', response.data.estabelecimentos)
    }
  }
})