<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue'
import Toolbar from '@/components/Toolbar.vue'
import Tab from '@/components/Tab.vue'


export default {
  name: 'App',
  components: {
    Navigation,
    Toolbar,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
