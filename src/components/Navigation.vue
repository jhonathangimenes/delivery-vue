<template>
<div>
  <v-toolbar flat>
    <v-list class="color-red">
      <v-list-tile>
        <v-list-tile-title class="title text-white">
          Chefão Delivery
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-toolbar>
  <v-divider></v-divider>
  <v-list dense class="pt-0">
    <v-list-tile
      v-for="url in urls"
      :key="url.nome"
    >
      <v-list-tile-action>
        <v-icon class="text-white">{{ url.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <router-link :to="url.url">
        <v-list-tile-title class="text-white">{{ url.nome }}</v-list-tile-title>
        </router-link>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</div>
</template>

<script>
export default {
  props: {
    urls: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .color-red {
    background-color: #b71c1c!important;
  }

  .text-white {
    color: #ffff!important;

  }

  a {
    text-decoration:none!important; 
  }
</style>

