<template>
  <div class="min-width">
    <v-layout row>
      <v-flex md9 class="select">
        <v-select :items="items" label="Escolha cidade" solo></v-select>
      </v-flex>
      <v-flex md3>
        <v-btn class="button-buscar">
          Buscar
          <v-icon class="icon-search">search</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["Paraupebas - PA", "Imperatriz - MA"]
    };
  }
};
</script>

<style scoped>
.button-buscar {
  background-color: #b71c1c !important;
  color: #ffff;
  padding: 10px 10px 38px 20px;
  margin: 0px;
}

.icon-search {
  margin-left: 10px;
}

.min-width {
  width: 30%;
  min-width: 300px;
}

.select {
  margin-right: 10px;
}
</style>
