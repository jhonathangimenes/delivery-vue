<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="(caixa,index) in caixas" :key="index" md4 style="padding: 20px">
        <v-card class="mx-auto elevation-20" color="purple" dark style="max-width: 400px;">
          <v-layout justify-space-between>
            <v-flex xs8>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Halycon Days</div>
                  <div>Ellie Goulding</div>
                  <div>(2013)</div>
                </div>
              </v-card-title>
            </v-flex>
            <v-img
              class="shrink ma-2"
              contain
              height="125px"
              src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
              style="flex-basis: 125px"
            ></v-img>
          </v-layout>
          <v-divider dark></v-divider>
          <v-card-actions class="pa-3">
            Rate this album
            <v-spacer></v-spacer>
            <span class="grey--text text--lighten-2 caption mr-2">({{ rating }})</span>
            <v-rating
              v-model="rating"
              background-color="white"
              color="yellow accent-4"
              dense
              half-increments
              hover
              size="18"
            ></v-rating>
          </v-card-actions>
        </v-card>
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
    caixas: ["1", "1", "1", "1", "1"]
  })
};
</script>
