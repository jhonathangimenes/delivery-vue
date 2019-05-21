<template>
  <v-list two-line>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title class="nome font-weight-light">{{ nomeFormatado }}</v-list-tile-title>
          <v-list-tile-sub-title class="nome font-weight-light">{{ descricaoFormatado }}</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
            <v-list-tile-action-text class="porcetagemOFF font-weight-medium border px-1">{{ porcetagemOFF }}</v-list-tile-action-text>
            <v-list-tile-action-text class="preco_promocional font-weight-light">R$ {{ precoPromocionalFormatado }}</v-list-tile-action-text>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider v-if="bordarFinal"></v-divider>
  </v-list>
</template>

<script>
export default {
    props: {
        produto: {
            type: Object,
            required: true
        },
        indice: {
            type: Number,
            required: true
        },
        tamanho: {
            type: Number,
            required: true
        }
    },
    computed: {
        porcetagemOFF() {
            return `${((this.produto.valor - this.produto.preco_promocional) * 100 / this.produto.valor).toFixed(0)}% OFF`
        },
        bordarFinal() {
            return this.indice + 1 < this.tamanho
        },
        nomeFormatado() {
            return this.produto.nome.charAt(0).toUpperCase() + this.produto.nome.slice(1).toLowerCase()
        },
        descricaoFormatado() {
            return this.produto.descricao.charAt(0).toUpperCase() + this.produto.descricao.slice(1).toLowerCase()
        },
        precoPromocionalFormatado() {
            return this.produto.preco_promocional.replace('.',',')
        }
    }
}
</script>

<style scoped>
    .nome {
        font-size: 16px!important;
        color: #2f3542!important;
    }
    .preco_promocional {
        font-size: 18px!important;
        color: #2f3542!important
    }
    .valor {
        font-size: 16px!important;
        color: #2f3542!important
    }
    .porcetagemOFF {
        font-size: 16px!important;
        color: red!important;
        border-color:red!important;
        border-width: 1.5px!important;
    }
</style>


