<template>
  <v-footer height="auto" color="primary lighten-1">
    <v-layout justify-center row wrap>
      <v-card-text class="text-center">
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
        &copy;2019 —
        <strong>Chefão Delivery</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-instagram',
      'fas fa-envelope'
    ]
  })
};
</script>

<style scoped>
.indigo {
  background-color: #b71c1c !important;
}
.width {
  width: 100%;
}
.text-center {
  text-align: center
}
</style>

