<template>
  <div class="fundo">
    <v-container align-center>
        <v-layout row class="max-width text-xs-center">
          <v-flex md9>
            <v-select :items="items" label="Escolha cidade" solo></v-select>
          </v-flex>
          <v-flex md3>
            <v-btn class="button-buscar">
              Buscar
              <v-icon class="icon-search">search</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
    </v-container>
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
.card {
  padding-top: 0px;
}

.fundo {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: 100%;
  background-image: url("../assets/image-fundo.jpg");
}

.button-buscar {
  background-color: #b71c1c !important;
  color: #ffff;
  padding: 10px 10px 37px 20px;
  margin: 0px;
}

.icon-search {
  margin-left: 10px;
}

.max-width {
  max-width: 500px;
  background-color: blue;
}
</style>

