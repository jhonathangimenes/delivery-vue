<template>
  <v-layout>
    <v-flex md12>
        <v-flex md12
            v-for="estabelcimento in promocoesPorCidade"
            :key="estabelcimento.id"
        >
            <v-card>
                <v-toolbar>
                <v-toolbar-side-icon></v-toolbar-side-icon>

                <v-toolbar-title>Inbox</v-toolbar-title>

                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>keyboard_arrow_down</v-icon>
                </v-btn>
                </v-toolbar>

                
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
    }
}
</script>

