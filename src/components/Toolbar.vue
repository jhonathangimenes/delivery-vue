<template>
  <div class="menu">
    <v-toolbar class="toolbar hidden-sm-and-down" color="#B71C1C" dark>
      <v-toolbar-title>
        <img class="logo" src="./../assets/logo.png" alt width="145px">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Estabelecimentos</v-btn>
        <v-btn flat>Promoções</v-btn>
        <v-btn flat>Entrar</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-toolbar class="hidden-sm-and-up" color="#B71C1C" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>
        <img class="logo" src="./../assets/logo.png" alt width="145px">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container grid-list-md text-xs-center>
      <v-flex xs6 offset-xs3>
      <v-layout row>
          <v-flex xs9>
            <v-select :items="items" label="Escolha cidade" solo></v-select>
          </v-flex>
          <v-flex xs3>
            <v-btn class="button-buscar">
              Buscar
              <v-icon class="icon-search">search</v-icon>
            </v-btn>
          </v-flex>
        
      </v-layout>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Paraupebas - PA', 'Imperatriz - MA']
    }
  }
}
</script>


<style scoped>
.menu {
  width: 100%;
  height: 500px;
  background-image: url("./../assets/image-fundo.jpg");
  background-position: center;
  background-size: 100%;
  padding-bottom: 0px;
}

.toolbar {
  background-color: rgb(183, 28, 28, 0) !important;
}

.logo {
  padding-top: 10px;
}

.button-buscar {
  background-color: #b71c1c !important;
  color: #ffff;
  padding: 10px 10px 37px 20px ;
  margin: 0px;
}

.icon-search {
  margin-left: 10px;
}
</style>
