<template>
  <div class="app">
    <headerTitle></headerTitle>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import headerTitle from './components/Title.vue'

export default defineComponent({
  name: 'App',
  components: { headerTitle }
})
</script>
<style>
@import '@/assets/tailwind.css';
</style>
