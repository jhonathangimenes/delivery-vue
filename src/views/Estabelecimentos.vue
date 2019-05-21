<template>
  <component :is="componente"></component>
</template>

<script>
import EstabelecimentoLista from '@/components/estabelecimentos/EstabelecimentoLista.vue';
import Carregamento from '@/components/Carregamento.vue';
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    EstabelecimentoLista,
    Carregamento
  },
  computed: {
    ...mapState(['estabelecimentosPorCidade']),
    componente() {
      return this.estabelecimentosPorCidade.length == 0 ? 'Carregamento' : 'EstabelecimentoLista'
    }
  },
  created() {
    const idCidade = window.localStorage.getItem('idCidade')
    idCidade == null ? this.$router.push('/') : this.getEstabelecimentosPorCidade(idCidade)
  },
  methods: {
    ...mapActions(['getEstabelecimentosPorCidade'])
  }
}
</script>