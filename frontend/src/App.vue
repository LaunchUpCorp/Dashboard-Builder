<script lang="ts">
import { defineComponent } from 'vue'
import LineChartCard from './components/LineChartCard/LineChartCard.vue';

export default defineComponent({
  name: 'App',
  components: {
    LineChartCard
  }
})
</script>

<template>
    <div class="m-5" >
      <LineChartCard />
    </div>
  </template>