<template>
  <v-toolbar color="#B71C1C" dark>
    <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>
      <router-link to="/">
        <img src="./../../assets/logo.png" alt width="145px">
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Estabelecimentos</v-btn>
      <v-btn flat>Promoções</v-btn>
      <v-btn flat>Entrar</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>


<style scoped>
img {
  padding-top: 15px;
}
</style>


