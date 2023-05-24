<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

interface DropdownThemes {
    theme: 'default' | 'dark' | 'light' | 'alert' | 'confirm' | 'outline danger';
}

const themeTypes = {
    'default': 'bg-blue-500 text-black hover:bg-blue-700',
    'dark': 'bg-slate-800 text-white hover:bg-slate-700',
    'light': 'bg-slate-300 text-black hover:bg-slate-400',
    'alert': 'bg-orange-400 text-black hover:bg-orange-500',
    'confirm': 'bg-green-400 text-black hover:bg-green-500',
    'outline danger': 'border-red-500 border-2 text-black hover:bg-red-500',
};

const themeChildTypes = {
    'default': 'hover:bg-blue-600',
    'dark': 'hover:bg-slate-600',
    'light': 'hover:bg-slate-500',
    'alert': 'hover:bg-orange-600',
    'confirm': 'hover:bg-green-600',
    'outline danger': 'hover:bg-red-600', 
}

export default defineComponent({
  name: 'Dropdown',
  props: {
    theme: {
        type: String as PropType<DropdownThemes['theme']>,
        default: 'default'
    }
  },
  setup(props, { slots }) {
    const isOpen = ref(false);
    const clickIndex = ref(-1);
    const children = slots.default ? slots.default() : [];

    const themeType = themeTypes[props.theme]

    const themeChildType = themeChildTypes[props.theme]

    //Open and close Dropdown
    function toggleDropdown(index: any) {
      if (clickIndex.value === index) {
        clickIndex.value = -1;
      } else {
        clickIndex.value = index;
      }
      isOpen.value = clickIndex.value !== -1;
    }

    return {
      isOpen,
      clickIndex,
      toggleDropdown,
      children,
      themeType,
      themeChildType,
      props
    };
  }
});
</script>

<template>
    <div :class="themeType" class="rounded-md text-center w-fit m-5">
        <div class="flex flex-row items-center px-2 space-x-1">
            <button class="flex flex-grow items-center text-center justify-center" @click="isOpen = !isOpen">{{ props.theme }}</button>
            <p class="ml-auto">{{ isOpen ? " v" : " ^" }}</p>
        </div>
      <transition>
        <div v-if="isOpen">
          <template v-for="(child, index) in children">
            <div :class="themeChildType" v-if="index !== clickIndex" :key="index">
              <slot :name="`item-${index}`">
                {{child.children}}
              </slot>
            </div>
          </template>
        </div>
      </transition>
    </div>
  </template>


