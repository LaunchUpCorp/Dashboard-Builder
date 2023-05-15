<script lang="ts">
import { defineComponent } from 'vue'
import Table from './components/Table.vue'

export default defineComponent({
  name: 'App',
  components: { Table }
})
</script>

<template>
  <div>
    <Table></Table>
  </div>
</template>
