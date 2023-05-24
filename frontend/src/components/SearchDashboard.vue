<template>
  <div class="w-11/12 h-7 flex items-center border-solid border-2 border-gray-300">
    <span class="h-full flex items-center">
      <Icon icon="material-symbols:search" width="32" color="#808080" />
    </span>
    <input
      type="text"
      class="h-full font-medium focus:outline-none"
      v-model="search"
      placeholder="Search"
      @change="handleChange"
      @keyup="handleChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  components: { Icon },
  name: 'SearchComponent',
  setup(props, { emit }) {
    const search = ref('')
    function handleChange() {
      emit('onSearch', search.value)
    }
    return { search, handleChange }
  }
})
</script>
