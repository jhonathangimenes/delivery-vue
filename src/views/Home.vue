<template>
<div>
  <Tab/>
  <router-view></router-view>
</div>
</template>

<script>
import Tab from '@/components/Tab.vue'

export default {
  components: {
    Tab,
  }
}
</script>
