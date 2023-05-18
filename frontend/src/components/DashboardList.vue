<template>
  <div>
    <div v-for="dashboard in newfilteredBoards" :key="dashboard.id">
      <article class="bg-sky-200 w-11/12 mt-2">
        <h2 class="text-xl">{{ dashboard.title }}</h2>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'

interface Dashboard {
  id: number
  title: string
}

export default defineComponent({
  props: {
    filteredBoards: {
      required: true,
      type: Array as PropType<Dashboard[]>,
      default: () => []
    }
  },
  setup(props) {
    const newfilteredBoards = computed(() => props.filteredBoards)
    return { newfilteredBoards }
  }
})
</script>
