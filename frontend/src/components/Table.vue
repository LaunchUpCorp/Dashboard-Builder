<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="desserts"
    item-value="name"
    class="elevation-1"
  >
    <template v-slot:item.calories="{ item }">
      <v-chip :color="getColor(item.raw.calories)">
        {{ item.raw.calories }}
      </v-chip>
    </template>
    <template v-slot:item.glutenfree="{ item }">
      <v-checkbox-btn v-model="item.raw.glutenfree" disabled></v-checkbox-btn>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Table',
  setup() {
    const itemsPerPage = 6
    const headers = [
      {
        title: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        key: 'name'
      },
      { title: 'Calories', key: 'calories' },
      { title: 'Fat (g)', key: 'fat' },
      { title: 'Carbs (g)', key: 'carbs' },
      { title: 'Protein (g)', key: 'protein' },
      { title: 'Iron (%)', key: 'iron' },
      { title: 'Glutenfree', key: 'glutenfree' }
    ]
    const desserts = [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1',
        glutenfree: true
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0',
        glutenfree: false
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6',
        glutenfree: false
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7',
        glutenfree: true
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16',
        glutenfree: true
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1',
        glutenfree: false
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2',
        glutenfree: false
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8',
        glutenfree: false
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45',
        glutenfree: true
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22',
        glutenfree: false
      }
    ]
    function getColor(calories: number) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    }
    return { itemsPerPage, headers, desserts, getColor }
  }
})
</script>
