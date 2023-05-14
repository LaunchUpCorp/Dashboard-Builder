
<script lang="ts">
import { defineComponent, ref } from 'vue'
import StatisticCard from './components/StatisticCard/StatisticCard.vue'

export default defineComponent({
  name: 'App',
  components: {
    StatisticCard
  },
  setup() {
    const dummyData = ref<any>({dataType: 100, date: "2023-04-01", time: "11:00:00"})

    return { dummyData }
  }


  /*

  The Component must have extremely reusable, no hard coded values
  The component should be responsive and allow styling to be applied to it
  Data for data
  type for type of statistic card
  theme for color sceme
  */
})
</script>

<template>
    <div class="bg-slate-100 w-full h-screen" >
      <p class="p-5">Main Pge Msg</p>
      <StatisticCard
        theme = "default"
        cardType = "Errors"
        iconType = "sdasda"
        :dummyData = dummyData
      />
    </div>
  </template>

