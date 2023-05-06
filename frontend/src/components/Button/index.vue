<script setup lang="ts">
import { PropType, ButtonHTMLAttributes, computed } from 'vue'
import { cva } from 'class-variance-authority'

const props = defineProps({
  intent: {
    type: String,
    validator: (val: string) =>
      [
        'primary',
        'primaryOutline',
        'secondary',
        'secondaryOutline',
        'info',
        'infoOutline',
        'success',
        'successOutline',
        'danger',
        'dangerOutline',
        'warning',
        'warningOutline'
      ].includes(val) as boolean,
    default: 'primary'
  },
  disabled: {
    type: Boolean
  },
  size: {
    type: String,
    default: 'medium'
  },
  btnType: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: 'button'
  },
  onClick: {
    type: Function
  }
})

const buttonClass = computed((): string => {
  return cva(
    'px-5 py-2 font-semibold uppercase rounded-md shadow-md hover:opacity-90 focus:outline-none',
    {
      variants: {
        intent: {
          primary: 'bg-blue-500 text-white active:bg-blue-700',
          primaryOutline:
            'border border-blue-500 text-blue-500 hover:bg-gray-50 active:bg-gray-100',
          secondary: 'bg-gray-500 text-white active:bg-gray-600',
          secondaryOutline:
            'border border-gray-500 text-gray-500 hover:bg-gray-50 active:bg-gray-100',
          info: 'bg-blue-400 text-white active:bg-blue-600',
          infoOutline: 'border border-blue-500 text-blue-500 hover:bg-gray-50 active:bg-gray-100',
          success: 'bg-green-500 text-white active:bg-green-700',
          successOutline:
            'border border-green-500 text-green-500 hover:bg-gray-50 active:bg-gray-100',
          danger: 'bg-red-500 text-white active:bg-red-700',
          dangerOutline: 'border border-red-500 text-red-500 hover:bg-gray-50 active:bg-gray-100',
          warning: 'bg-orange-500 text-white active:bg-orange-700',
          warningOutline:
            'border border-orange-500 text-orange-500 hover:bg-gray-50 active:bg-gray-100'
        },
        size: {
          small: 'px-3 py text-xs',
          medium: 'px-5 py-2 text-base',
          large: 'px-8 py-3 text-lg'
        }
      }
    }
  )({
    intent: props.intent,
    size: props.size
  })
})

const isDisabled = computed((): string => {
  return props.disabled
    ? 'bg-gray-200 text-gray-500 px-5 py-2 font-semibold uppercase rounded-md cursor-not-allowed'
    : ''
})
</script>

<template>
  <button
    @click="props.onClick"
    :type="props.btnType"
    :class="[
      props.disabled
        ? isDisabled
        : `${buttonClass} px-5 py-2 font-semibold uppercase rounded-md shadow-md hover:opacity-90`
    ]"
  >
    <div class="mx-auto flex justify-evenly gap-1 items-center">
      <slot></slot>
    </div>
  </button>
</template>
