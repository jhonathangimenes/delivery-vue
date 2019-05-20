<template>
  <v-container grid-list-md text-xl-center class="vh-100">
    <v-layout row wrap>
      <v-flex md3 class="mar-bottom">
        <v-text-field
          label="Buscar..."
          solo
        ></v-text-field>
      </v-flex>
      <v-flex md3 offset-md6 class="mar-bottom">
         <v-select
          class="custom"
          :items="items"
          label="Ordenar por"
          solo
          v-model="ordenar"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-if="estabelecimentosPorCidade[0] == 'vazio'" md12>
        <v-card-text class="he">
          <p class="display-2 font-weight-light text-center ma-20">
            Em breve
          </p>
        </v-card-text>
      </v-flex>
      <v-flex v-else v-for="estabelecimento in estabelecimentosPorCidade" :key="estabelecimento.id" md4>
        <EstabelecimentoItem :estabelecimento="estabelecimento"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EstabelecimentoItem from './EstabelecimentoItem.vue';
import { mapState } from 'vuex';

export default {
  components: {
    EstabelecimentoItem
  },
  data() {
    return {
      items: ['Mais recentes', 'Mais antigos'],
      ordenar: 'Alfabético crescente'
    }
  },
  computed: {
    ...mapState(['estabelecimentosPorCidade'])
  }
}
</script>

<style>
  .mar-bottom{
    margin-bottom: -23px
  }
  .text-center {
    text-align: center;
  }
  .he {
    height: 700px;
  }
  .ma-20 {
    margin-top: 200px;
  }
</style>
