<template>
  <v-layout class="h-100">
    <v-flex md12>
        <v-flex md12
            v-for="estabelecimento in promocoesPorCidade"
            :key="estabelecimento.id"
        >
            <v-card class="shadow-none border mb-3">
                <v-toolbar class="shadow-none cor">
                    <img
                        class="logo-estabelecimento"
                        :src="estabelecimento.imagem"
                        width="50rem"
                        height="50rem"
                    >
                    <v-toolbar-title class="nome font-weight-light">{{ nomeFormatado(estabelecimento.nome_fantasia) }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>keyboard_arrow_down</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-divider></v-divider>
                <PromocoesItem
                    class="cor efeito-hover"
                    v-for="(produto, indice) in estabelecimento.produtos" 
                    :key="produto.id"
                    :produto="produto"
                    :indice="indice"
                    :tamanho="estabelecimento.produtos.length"
                />
            </v-card>
        </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import PromocoesItem from './PromocoesItem.vue';
import { mapState } from 'vuex';

export default {
    components: {
        PromocoesItem
    },
    created() {
        console.log(this.promocoesPorCidade)
    },
    computed: {
        ...mapState(['promocoesPorCidade'])
    },
    methods: {
        nomeFormatado(nome) {
            return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
        }
    }
}
</script>

<style scodep>
    .logo-estabelecimento {
    border-radius: 50%;
    }
    .h-100 {
        height: 650px!important;
        margin-top: 40px;
    }
    .shadow-none {
        box-shadow: none;
    }
    .cor {
        background-color: #fafafa!important;
    }
    .border {
        border: solid 1px #ced6e0!important;
    }
    .nome {
        font-size: 16px;
        color: #2f3542;
    }
    .efeito-hover:hover {
        background-color: #f1f2f6!important;
    }
</style>


