<template>
  <div class="headerTitle">
    <div class="relative">
      <img class="w-8 h-8 fixed top-5 left-0" :src="imageSrc" alt="header" />
      <h1 class="font-bold text-4xl fixed top-5 left-10">{{ title }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import imageSrc from '@/assets/title1.png'

export default defineComponent({
  name: 'headerTitle',
  setup() {
    const title = ref('Launchup Dashboard Management')
    return { title, imageSrc }
  }
})
</script>
<style>
@import '@/assets/tailwind.css';
</style>
