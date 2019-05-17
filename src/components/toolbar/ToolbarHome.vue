<template>
  <div class="fixed fundo">
    <v-toolbar class="toolbar" color="#B71C1C" dark>
      <v-toolbar-title>
        <router-link to="/">
          <img class="logo" src="./../../assets/logo.png" alt width="145px">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :to="urls.estabelecimento" flat>Estabelecimentos</v-btn>
        <v-btn :to="urls.promocoes" flat>Promoções</v-btn>
        <v-btn :to="urls.entrar" flat>Entrar</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    urls: {
      type: Object,
      required: true
    }
  }
}
</script>


<style scoped>
.toolbar {
  background-color: rgb(183, 28, 28, 0) !important;
}

.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.v-toolbar {
  -webkit-transition: none;
  transition: none;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.fundo {
  width: 100%;
  height: 80%;
  background-position: center;
  background-size: 100%;
  background-image: url("./../../assets/image-fundo.jpg");
}
</style>
