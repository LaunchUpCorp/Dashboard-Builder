<script setup lang="ts">
import Button from './components/Button/index.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="flex gap-2 m-4">
    <Button variant="success">
      <div class="flex gap-1 items-center">
        <span>Send</span>
        <Icon icon="fa6-solid:paper-plane" class="text-sm" />
      </div>
    </Button>
    <Button variant="primaryOutline">
      <div class="flex gap-1 items-center">
        <span>Send it</span>
        <Icon icon="fa6-solid:paper-plane" class="text-sm" />
      </div>
    </Button>
    <Button variant="warning">Caution</Button>
  </div>
</template>
