<template>
  <v-footer height="auto" class="indigo">
    <v-layout justify-center row wrap>
      <v-card-text class="text-center">
        <v-btn href="https://www.facebook.com/deliverychefao/" class="mx-3 white--text" icon>
          <v-icon size="24px">fab fa-facebook</v-icon>
        </v-btn>
        <v-btn href="https://www.instagram.com/deliverychefao/" class="mx-3 white--text" icon>
          <v-icon size="24px">fab fa-instagram</v-icon>
        </v-btn>
      </v-card-text>
      <v-layout row wrap justify-center>
        <v-flex md3>
          <v-card dark class="indigo">
            <v-card-text>
              <p class="title font-weight-light">Sobre o chefão</p>
              <p class="body-2 font-weight-light">
                Somos um serviço de entrega conectado com os 
                melhores estabelecimentos da cidade, escolha a 
                melhor opção para matar sua fome e receba em sua 
                casa. Não perca tempo, veja como é simples fazer 
                o seu pedido.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3>
          <v-card dark class="indigo text-center">
            <v-card-text>
              <p class="title font-weight-light">Acesso Administrativo</p>
              <v-btn color="warning" href="http://chefaodelivery.com.br/login" class="text-black">
                Entrar
              </v-btn>
              <v-btn color="warning" href="https://webmail-seguro.com.br/chefaodelivery.com.br/" class="text-black">
                Web-mail
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3>
          <v-card dark class="indigo text-center">
            <v-card-text>
              <p class="title font-weight-light">Onde Estamos</p>
              <p v-for="cidade in cidades" :key="cidade.nome" class="body-2 font-weight-light">
                {{ cidade.nome }} - {{ cidade.estado.sigla }}
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md3>
          <v-card dark class="indigo text-center">
            <v-card-text>
              <p class="title font-weight-light">Fale conosco</p>
              <p class="body-2 font-weight-light">
                sac@chefaodelivery.com.br
              </p>
              <a href="https://api.whatsapp.com/send?phone=94992977149">
                <p class="body-2 font-weight-light ma-3 cursor-p">
                  <v-icon class="mx-2" size="20px">fab fa-whatsapp</v-icon>+55 (94) 99297 7149
                  </p>
              </a>
              <p class="body-2 font-weight-light">
                +55 (63) 98424 0011
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-flex class="indigo border-top" py-3 text-xs-center white--text xs12>
        &copy;
        <span class="font-weight-light">2019 — Chefão Delivery</span>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-instagram',
      'fas fa-envelope'
    ]
  }),
  created() {
    this.getCidades()
  },
  computed: {
    ...mapState(['cidades'])
  },
  methods: {
    ...mapActions(['getCidades'])
  }
};
</script>

<style scoped>
.indigo {
  background-color: #b71c1c !important;
  text-align: justify;
  box-shadow: none;
}
.width {
  width: 100%;
}
.text-center {
  text-align: center
}
.text-black {
  color: black!important;
}
a {
  text-decoration: none;
  color: #ffff;
}
.border-top {
  border-top: 1px solid;
  border-color:  #c23616!important;
}
</style>

