<template>
  <div class="app">
    <Sidebar></Sidebar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './components/Sidebar.vue'

export default defineComponent({
  name: 'App',
  components: { Sidebar }
})
</script>
