<template>
  <v-container class="pa-0 pt-5" grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex md6 class="pb-5">
        <v-card-text class="px-0">
          <p class="display-3 font-weight-light">Baixe o aplicativo</p>
          <p class="title font-weight-light">E faça um pedido agora mesmo!</p>
        </v-card-text>
        <v-btn href="https://play.google.com/store/apps/details?id=chefao.dixbpo.com&hl=pt" fab dark large color="purple">
          <v-icon dark>android</v-icon>
        </v-btn>
        <a href="https://itunes.apple.com/br/app/chef%C3%A3o-delivery/id1455536224?mt=8">
        <v-btn fab dark large color="purple">
          <v-icon dark>fab fa-apple</v-icon>
        </v-btn>
        </a>
      </v-flex>
      <v-flex md6 class="hidden-sm-and-down">
        <img src="./../assets/home/iphone.png" width="300px" height="100%" alt>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  created() {
    this.removerAnimacao()
  },
  methods: {
    ...mapMutations(['removerAnimacao', 'adicionarAnimacao'])
  },
  beforeRouteLeave (to, from, next) {
    this.adicionarAnimacao()
    next()
  }
}
</script>

<style scoped>
  .v-btn {
    background-color: #b71c1c!important
  }
  a {
    text-decoration: none;
  }
  .title {
    font-size: 16px!important;
  }
</style>





