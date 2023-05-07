<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Avatar',
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <div class="flex justify-center items-center rounded-full overflow-hidden h-16 w-16 bg-gray-200">
    <img :src="imageUrl" :alt="altText" class="w-full h-full object-cover">
  </div>
</template>


