<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

interface DropdownThemes {
    theme: 'default' | 'dark' | 'light';
}

const themeTypes = {
    'default': 'bg-slate-500',
    'dark': 'bg-slate-800',
    'light': 'bg-slate-300'
};

const themeChildTypes = {
    'default': 'hover:bg-slate-700',
    'dark': 'hover:bg-slate-500',
    'light': 'hover:bg-slate-500' 
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
    <div :class="themeType" class="w-1/5 rounded-md text-center">
        <div class="flex flex-row items-center px-2">
            <button class="flex flex-grow items-center text-center justify-center" @click="isOpen = !isOpen">{{ props.theme }}</button>
            <p class="ml-auto">{{ isOpen ? "v" : "^" }}</p>
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


