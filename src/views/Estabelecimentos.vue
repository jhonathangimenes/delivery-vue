<template>
  <component :is="componentes"></component>
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
    ...mapState(['estabelecimentos']),
    componentes() {
      return this.estabelecimentos.length == 0 ? 'Carregamento' : 'EstabelecimentoLista'
    }
  },
  created() {
    this.getEstabelecimentos();
  },
  methods: {
    ...mapActions(['getEstabelecimentos'])
  }
}
</script>