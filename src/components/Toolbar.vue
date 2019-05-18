<template>
  <div>
    <v-toolbar v-if="$route.fullPath != '/'" color="#B71C1C" dark>
      <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/">
          <img src="./../assets/logo.png" class="logo" width="150px" alt="">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(url, index) in urls" 
          :key="index"
          :to="url.url"
          flat
        >
          {{ url.nome }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div v-else class="image-fundo">
      <v-toolbar class="transparante" color="#B71C1C" dark>
      <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/">
          <img src="./../assets/logo.png" class="logo" width="150px" alt="">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(url, index) in urls" 
          :key="index"
          :to="url.url"
          flat
        >
          {{ url.nome }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
      <v-layout align-center justify-center fill-height>
        <BuscarCidade/>
      </v-layout>
    </div>
  </div>
</template>

<script>
import BuscarCidade from './home/BuscarCidade.vue';
import { mapState } from "vuex";
export default {
  components: {
    BuscarCidade
  },
  computed: {
    ...mapState(["urls"])
  }
};
</script>

<style>
  .logo {
    padding-top: 20px;
  }
  .image-fundo {
    background-image: url('./../assets/image-fundo.jpg');
    width: 100%;
    height: 700px;
    background-size: 100%;
  }

  .transparante{ 
    background-color: rgba(183, 28, 28, 0)!important;
    box-shadow: none!important;
  }
  @media (max-width: 600px) {
    .image-fundo {
      height: 250px;
    }
  }

  @media (max-width: 330px) {
    .image-fundo {
      height: 220px;
    }
  }
</style>
