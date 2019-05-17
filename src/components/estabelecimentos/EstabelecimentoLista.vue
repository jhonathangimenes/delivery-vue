<template>
  <div>
    <template v-if="estabelecimentos.length == 0">
      <v-layout align-center justify-center>
        <v-progress-circular :width="3" color="red" :size="70" indeterminate></v-progress-circular>
      </v-layout>
    </template>
    <template v-else>
      <v-container grid-list-md text-xl-center>
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
          <v-flex v-for="estabelecimento in estabelecimentos" :key="estabelecimento.id" md4>
            <EstabelecimentoItem :estabelecimento="estabelecimento"/>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
  </div>
</template>

<script>
import axios from "@/axios.js";
import EstabelecimentoItem from "@/components/estabelecimentos/EstabelecimentoItem.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    EstabelecimentoItem
  },
  data() {
    return {
      items: ["Imperatriz", "Paraupebas"],
      cidade: "Paraupebas"
    };
  },
  created() {
    this.getEstabelecimentos();
  },
  computed: {
    ...mapState(["estabelecimentos"])
  },
  methods: {
    ...mapActions(["getEstabelecimentos"])
  }
};
</script>