<template>
  <div class="card-border">
    <v-card-text class="px-0 card">
      <img
        class="logo-estabelecimento"
        :src="estabelecimento.imagem"
        width="80rem"
        height="80rem"
      >
      <div>
        <p class="nome font-weight-light">{{ nomeFormatado }}</p>
        <p class="endereco font-weight-light">{{ enderecoFormatado }}</p>
      </div>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: {
    estabelecimento: {
      type: Object,
      required: true
    }
  },
  computed: {
    enderecoFormatado() {
      return this.estabelecimento.endereco.substring(0, 30);
    },
    nomeFormatado() {
      return this.estabelecimento.nome_fantasia.charAt(0).toUpperCase() + this.estabelecimento.nome_fantasia.slice(1).toLowerCase()
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  text-align: left;
  padding: 20px 20px 10px 20px !important;
  cursor:pointer;
}

.card:hover {
  background-color: #f1f2f6;
}

.nome {
  padding: 0px 0px 0px 10px;
  margin: 0px;
  font-size: 16px;
  color: #2f3542;
}

.endereco {
  padding: 0px 0px 0px 10px;
  font-size: 12px;
  color: #747d8c;
}

.logo-estabelecimento {
  border-radius: 50%;
}

.card-border{
  border: solid 1px #ced6e0;
  border-radius: 5px;
  height: 100%;
}
.nome {
    font-size: 16px;
    color: #2f3542;
}
</style>

