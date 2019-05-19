<template>
  <v-container class="pa-0 pt-5" grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex md6 class="pb-5">
        <v-card-text class="px-0">
          <p class="display-3 font-weight-light">Baixe o aplicativo</p>
          <p class="title font-weight-light">E faça um pedido agora mesmo!</p>
        </v-card-text>
        <v-btn fab dark large color="purple">
          <v-icon dark>android</v-icon>
        </v-btn>
        <v-btn fab dark large color="purple">
          <v-icon dark>fab fa-apple</v-icon>
        </v-btn>
      </v-flex>
      <v-flex md6 class="hidden-sm-and-down">
        <img src="./../assets/home/iphone.png" width="300px" height="100%" alt>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {  
  created() {
    this.removerAnimacao()
  },
  methods: {
    ...mapMutations(['removerAnimacao', 'adicionarAnimacao'])
  },
  beforeRouteLeave (to, from, next) {
    console.log('router')
    this.adicionarAnimacao()
    next()
  }
}
</script>




