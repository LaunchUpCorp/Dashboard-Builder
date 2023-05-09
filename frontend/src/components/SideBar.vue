<template>
  <div class="w-1/5 h-screen m-2 border-r-2 border-r-gray-300">
    <Search @onSearch="handleSearch" />
    <Add :addDashboard="addDashboard" />
    <DbList :filteredBoards="filteredBoards" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import Search from './SearchDashboard.vue'
import Add from './AddDashboard.vue'
import DbList from './DashboardList.vue'

interface Dashboard {
  id: number
  title: string
}

export default defineComponent({
  components: { Search, Add, DbList },
  setup() {
    const dashboards = ref<Dashboard[]>([
      { id: 0, title: 'template1' },
      { id: 1, title: 'template2' },
      { id: 2, title: 'template3' }
    ])

    const search = ref('')

    const filteredBoards = computed(() => {
      if (search.value.length > 0) {
        return dashboards.value.filter((dashboard: Dashboard) =>
          dashboard.title.includes(search.value)
        )
      } else {
        return dashboards.value
      }
    })

    function handleSearch(event: string) {
      search.value = event
    }

    function addDashboard(newDashboard: string) {
      const idnum = dashboards.value.length + 1
      if (newDashboard) {
        dashboards.value = [...dashboards.value, { id: idnum, title: newDashboard }]
      }
    }
    return { addDashboard, filteredBoards, handleSearch }
  }
})
</script>
