<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex md3>
        <v-text-field class="buscar" label="Buscar"></v-text-field>
      </v-flex>
      <v-flex md3 offset-md6>
        <v-select
          class="escolher-cidade"
          :items="items"
          label="Escolha cidade"
          v-model="cidade"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="(caixa,index) in caixas" :key="index" md4>
        <EstabelecimentoItem/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EstabelecimentoItem from "@/components/estabelecimentos/EstabelecimentoItem.vue";

export default {
  components: {
    EstabelecimentoItem
  },
  data: () => ({
    rating: 4.3,
    caixas: ["1", "1", "1", "1", "1"],
    items: ["Imperatriz", "Paraupebas"],
    cidade: 'Paraupebas'
  })
};
</script>

