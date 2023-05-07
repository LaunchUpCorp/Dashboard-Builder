<script lang="ts">
import { defineComponent } from 'vue'
import Avatar from './components/Avatar/Avatar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Avatar
  }
})
</script>

<template>
    <div>
      <h1>Avatar Component</h1>
      <Avatar imageUrl="http://placekitten.com/150/150" altText="Placeholder avatar" />
    </div>
  </template>