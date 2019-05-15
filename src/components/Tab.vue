<template>
  <v-tabs
    centered
    color="cyan"
    dark
    icons-and-text
  >
    <v-tabs-slider color="yellow"></v-tabs-slider>

    <v-tab href="#tab-1">
      Promoções
      <v-icon>attach_money</v-icon>
    </v-tab>

    <v-tab href="#tab-2">
      Estabelecimentos
      <v-icon>home</v-icon>
    </v-tab>

    <v-tab href="#tab-3">
      Locais
      <v-icon>location_on</v-icon>
    </v-tab>

    <v-tab-item
      v-for="i in 3"
      :key="i"
      :value="'tab-' + i"
    >
    </v-tab-item>
  </v-tabs>
</template>