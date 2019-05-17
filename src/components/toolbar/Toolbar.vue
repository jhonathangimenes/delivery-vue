<template>
  <div>
    <div v-if="$route.fullPath === '/'">
      <ToolbarHome :urls="urls" class="menu hidden-sm-and-down"/>
      <div class="hidden-sm-and-up">
        <ToolbarGeral/>
      </div>
    </div>
    <div v-else>
        <ToolbarGeral/>
    </div>
  </div>
</template>

<script>
import ToolbarGeral from './ToolbarGeral.vue'
import ToolbarHome from './ToolbarHome.vue'
import { mapState } from 'vuex' 
export default {
  components: {
      ToolbarHome,
      ToolbarGeral
  },
  computed: {
    ...mapState(['urls'])
  }
};
</script>