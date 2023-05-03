<template>
  <div class="app">
    <Title></Title>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Title from './components/Title.vue'

export default defineComponent({
  name: 'App',
  components: { Title }
})
</script>
<style>
@import '@/assets/tailwind.css';
</style>
