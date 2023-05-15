
<script lang="ts">
import { defineComponent, ref } from 'vue'
import StatisticCard from './components/StatisticCard/StatisticCard.vue'

export default defineComponent({
  name: 'App',
  components: {
    StatisticCard
  },
  setup() {
    const dummyData = ref<any>({dataType: 100, date: "2023-05-12", time: "11:00:00"})
    const dummyData2 = ref<any>({dataType: 100, date: "2023-05-15", time: "11:00:00"})
    const dummyData3 = ref<any>({dataType: 100, date: "2023-03-12", time: "11:00:00"})

    return { dummyData, dummyData2, dummyData3 }
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
    <div class="bg-slate-100 w-full h-screen p-5" >
        <div class="space-y-5">
          <StatisticCard
            theme = "dark"
            cardType = "Income"
            :dummyData = dummyData
          />
          <StatisticCard
            theme = "default"
            cardType = "Errors"
            :dummyData = dummyData2
          />
          <StatisticCard
            theme = "light"
            cardType = "Completed"
            :dummyData = dummyData3
          />
      </div>
    </div>
  </template>

