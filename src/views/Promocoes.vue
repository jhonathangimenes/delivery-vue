<template>
    <component :is="componente"></component>
</template>

<script>
import PromocoesLista from '@/components/promocoes/PromocoesLista.vue'
import Carregamento from '@/components/Carregamento.vue'
import { mapState, mapActions } from 'vuex'

export default {
    components: {
        PromocoesLista,
        Carregamento
    },
    created() {
        const idCidade = window.localStorage.getItem('idCidade')
        idCidade == null ? this.$router.push('/') : this.getPromocoesPorCidade(idCidade)
    },
    computed: {
        ...mapState(['promocoesPorCidade']),
        componente() {
        return this.promocoesPorCidade.length == 0 ? 'Carregamento' : 'PromocoesLista'
        }
    },
    methods: {
        ...mapActions(['getPromocoesPorCidade'])
    }
}
</script>

