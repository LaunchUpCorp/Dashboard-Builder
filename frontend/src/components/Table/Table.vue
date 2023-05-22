<template>
  <div class="container mx-auto">
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th
            v-for="dessertkey in dessertkeys"
            :key="dessertkey"
            class="py-2 px-4 border-b text-left"
          >
            <div class="flex">
              <span>{{ dessertkey.toUpperCase() }}</span>
              <Icon
                icon="mdi:arrow-down"
                width="24"
                color="#808080"
                @click="sortDessert(dessertkey)"
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dessert in sortedData" :key="dessert.id">
          <td
            v-for="dessertkey in dessertkeys"
            :key="dessertkey"
            class="py-2 px-4 border-b rounded-full text-center"
            :style="{
              backgroundColor: getCellColor(dessert[dessertkey as keyof typeof dessert])
            }"
          >
            {{ dessert[dessertkey as keyof typeof dessert] }}
          </td>
          <td class="py-2 px-4 border-b">
            <button @click="deleteDessert(dessert.id)" class="text-red-500">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'Table',
  components: { Icon },
  setup() {
    const itemsPerPage = 6
    const desserts = ref([
      {
        id: 1,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: 1,
        glutenfree: true
      },
      {
        id: 2,
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: 0,
        glutenfree: false
      },
      {
        id: 3,
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: 6,
        glutenfree: false
      },
      {
        id: 4,
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: 7,
        glutenfree: true
      },
      {
        id: 5,
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: 16,
        glutenfree: true
      },
      {
        id: 6,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1',
        glutenfree: false
      },
      {
        id: 7,
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2',
        glutenfree: false
      },
      {
        id: 8,
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8',
        glutenfree: false
      },
      {
        id: 9,
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45',
        glutenfree: true
      },
      {
        id: 10,
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22',
        glutenfree: false
      }
    ])

    function deleteDessert(dessertId: number) {
      const index = sortedData.value.findIndex((dessert) => dessert.id === dessertId)
      if (index >= 0) {
        sortedData.value.splice(index, 1)
      }
    }
    function getCellColor(value: any) {
      if (typeof value == 'boolean') {
        return value ? 'LightGreen' : 'LightPink'
      } else {
        return ''
      }
    }
    let sortedbyASC = true
    const sortedData = ref([...desserts.value])
    function sortDessert(sortBy: string) {
      if (sortedbyASC) {
        sortedData.value.sort((x, y) =>
          x[sortBy as keyof typeof x] > y[sortBy as keyof typeof y] ? -1 : 1
        )
        sortedbyASC = false
      } else {
        sortedData.value.sort((x, y) =>
          x[sortBy as keyof typeof x] < y[sortBy as keyof typeof y] ? -1 : 1
        )
        sortedbyASC = true
      }
      return sortedData
    }
    const dessertkeys = ref(Object.keys(sortedData.value[0]))
    return {
      itemsPerPage,
      desserts,
      deleteDessert,
      getCellColor,
      sortedbyASC,
      sortDessert,
      sortedData,
      dessertkeys
    }
  }
})
</script>
