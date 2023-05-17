<template>
  <div class="w-11/12 h-7 mt-2 flex items-center border-solid border-2 border-gray-300">
    <input
      type="text"
      v-model="newDashboard"
      placeholder="Add a new dashboard"
      class="w-4/5 focus:outline-none"
    />
    <button @click="handleAddDashboard" class="w-1/5 text-white bg-sky-500">add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'

interface Props {
  addDashboard: (title: string) => void
}

export default defineComponent({
  props: {
    addDashboard: {
      type: Function as PropType<Props['addDashboard']>,
      required: true
    }
  },
  setup(props) {
    const newDashboard = ref('')

    function handleAddDashboard() {
      const title = newDashboard.value.trim()
      if (title) {
        props.addDashboard(title)
        newDashboard.value = ''
      }
    }

    return { newDashboard, handleAddDashboard }
  }
})
</script>
