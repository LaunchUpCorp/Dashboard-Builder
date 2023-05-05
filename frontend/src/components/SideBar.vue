<template>
  <div class="w-1/5 h-screen m-2 border-r-2 border-r-gray-300">
    <div class="w-11/12 h-7 flex items-center border-solid border-2 border-gray-300">
      <span class="h-full flex items-center"
        ><Icon icon="material-symbols:search" width="32" color="#808080"
      /></span>
      <input
        type="text"
        class="h-full font-medium focus:outline-none"
        v-model="search"
        placeholder="Search"
      />
    </div>
    <div class="w-11/12 h-7 mt-2 flex items-center border-solid border-2 border-gray-300">
      <input
        type="text"
        v-model="newDashboard"
        placeholder="Add a new dashboard"
        class="w-4/5 focus:outline-none"
      />
      <button @click="addDashboard" class="w-1/5 text-white bg-sky-500">add</button>
    </div>
    <div v-for="dashboard in filteredBoards" :key="dashboard.id">
      <article class="bg-sky-200 w-11/12 mt-2">
        <h2 class="text-xl">{{ dashboard.title }}</h2>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { Icon } from '@iconify/vue'

interface Dashboard {
  id: number
  title: string
}
export default defineComponent({
  components: { Icon },
  setup() {
    const dashboards = ref<Dashboard[]>([
      { id: 0, title: 'template1' },
      { id: 1, title: 'template2' },
      { id: 2, title: 'template3' }
    ])
    const search = ref('')
    const newDashboard = ref('')
    const filteredBoards = computed(() => {
      return dashboards.value.filter((dashboard: Dashboard) =>
        dashboard.title.includes(search.value)
      )
    })
    function addDashboard() {
      const idnum = dashboards.value.length + 1
      const newtitle = newDashboard.value
      if (newtitle) {
        dashboards.value.push({ id: idnum, title: newtitle })
        newDashboard.value = ''
      }
    }
    return { dashboards, search, filteredBoards, newDashboard, addDashboard }
  }
})
</script>
