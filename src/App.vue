<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <v-container class="pad" align-center justify-center row fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navigation from "@/components/Navigation.vue";
import Toolbar from "@/components/toolbar/Toolbar.vue";
import Tab from "@/components/Tab.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Toolbar,
    Footer
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped>
@media (min-width: 1500px) {
  .pad {
    width: 70%;
  }
}
</style>


