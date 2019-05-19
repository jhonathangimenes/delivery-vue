<template>
  <v-app>
  <Toolbar/>
    <v-content>
      <v-container class="pa-0" align-center justify-center fill-height>
        <transition :name="animacao" mode="out-in" appear>
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue'
import Toolbar from '@/components/Toolbar.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Navigation,
    Toolbar,
    Footer
  },
  computed: {
    ...mapState(['animacao'])
  }
}
</script>

<style scoped>
@media (min-width: 1500px) {
  .pad {
    width: 70%;
  }
}
@media (min-width: 900px) {
  .list-enter, .list-leave-to {
    opacity: 0;
  transform: translateX(70px)
  }
  .list-enter-active, .list-leave-active {
    transition: all 0.5s;
  }
}
</style>


