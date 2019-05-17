<template>
  <div class="buscar">
    <v-layout align-center justify-center fill-height>
      <BuscarCidade/>
    </v-layout>
  </div>
</template>

<script>
import BuscarCidade from "@/components/home/BuscarCidade.vue";

export default {
  components: {
    BuscarCidade
  }
};
</script>

<style scoped>
.card {
  padding-top: 0px;
}

.buscar {
z-index: 4;
}
</style>



