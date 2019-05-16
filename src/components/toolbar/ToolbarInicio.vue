<template>
  <div class="fixed">
    <v-toolbar class="toolbar" color="#B71C1C" dark>
      <v-toolbar-title>
        <router-link to="/">
          <img class="logo" src="./../../assets/logo.png" alt width="145px">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Estabelecimentos</v-btn>
        <v-btn flat>Promoções</v-btn>
        <v-btn flat>Entrar</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<style scoped>
.toolbar {
  background-color: rgb(183, 28, 28, 0) !important;
}

.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
}

.logo {
  padding-top: 10px;
}

.v-toolbar {
  -webkit-transition: none;
  transition: none;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
</style>
