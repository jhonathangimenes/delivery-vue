<template>
  <div>
    <v-flex md12>
      <v-card-text class="text-center">
        <img class="logo" src="./../../assets/logo.png" width="370px" alt="">
      </v-card-text>
    </v-flex>
    <v-layout row class="p-left-right">
      <v-flex md9 class="select">
        <v-select :items="cidades" 
          item-text="nome" item-value="id" 
          :label="cidades.length == 0 ? 'Aguarde...' : 'Escolha cidade'" 
          solo 
          v-model="cidade"
        >
        </v-select>
      </v-flex>
      <v-flex md3>
        <v-btn class="button-buscar" @click="buscar()">
          Buscar
          <v-icon class="icon-search">search</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      cidade: ''
    }
  },
  created() {
    const idCidade = window.localStorage.getItem('idCidade')
    idCidade != null ? this.$router.push('/estabelecimentos') : ''
  },
  computed: {
    ...mapState(['cidades'])
  },
  methods: {
    ...mapActions(['getCidades', 'getEstabelecimentosPorCidade']),
    buscar() {
      window.localStorage.setItem('idCidade', this.cidade)
      this.$router.push('/estabelecimentos')
    }
  }
}
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
  .logo {
    width: 200px
  }
}

@media (max-width: 330px) {
  .display-3 {
    font-size: 30px!important;
  }
  .subheading {
    font-size: 12px!important;
  }
  .logo {
    width: 200px
  }
}
</style>
