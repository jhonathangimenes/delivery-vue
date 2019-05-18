<template>
  <div>
    <v-flex md12>
      <v-card-text class="text-center">
        <p class="display-3 font-weight-light">Não fique com fome</p>
        <p class="subheading font-weight-light">Escolha a cidade e encontre um estabelecimento</p>
      </v-card-text>
    </v-flex>
    <v-layout row class="p-left-right">
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

.p-left-right {
  padding: 5px 15px 0px 15px
}

.icon-search {
  margin-left: 10px;
}

.select {
  margin-right: 10px;
}

.text-center {
  text-align: center!important;
  color: #ffff;
  padding: 0px!important;
}

@media (max-width: 600px) {
  .display-3 {
    font-size: 38px!important;
    margin: 0px;
  }
  .subheading {
    font-size: 14px!important;
    margin: 5px 0px 0px 0px;
  }
}

@media (max-width: 330px) {
  .display-3 {
    font-size: 30px!important;
  }
  .subheading {
    font-size: 12px!important;
  }
}
</style>
