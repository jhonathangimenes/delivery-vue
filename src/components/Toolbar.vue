<template>
  <div>
    <div v-if="$route.fullPath === '/'">
      <ToolbarInicio class="menu hidden-sm-and-down"/>
      <div class="hidden-sm-and-up">
        <v-toolbar color="#B71C1C" dark>
          <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
          <v-toolbar-title>
            <router-link to="/"><img class="logo" src="./../assets/logo.png" alt width="145px"></router-link> 
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Estabelecimentos</v-btn>
            <v-btn flat>Promoções</v-btn>
            <v-btn flat>Entrar</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </div>
    </div>
    <div v-else>
      <v-toolbar color="#B71C1C" dark>
        <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to="/"><img class="logo" src="./../assets/logo.png" alt width="145px"></router-link> 
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Estabelecimentos</v-btn>
          <v-btn flat>Promoções</v-btn>
          <v-btn flat>Entrar</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
  </div>
</template>

<script>
import ToolbarInicio from '@/components/toolbar/ToolbarInicio.vue'

export default {
  components: {
      ToolbarInicio
  },
  created() {
    console.log(this.$route.fullPath);
  }
};
</script>



