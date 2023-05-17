<script lang="ts">
import { defineComponent, computed } from 'vue'

//an interface helps us manage the types of the props we use
interface AvatarProps {
  imageUrl: string;
  altText: string;
  size?: 'sm' | 'md' | 'lg';
}

export default defineComponent({
  name: 'Avatar',
  //all props are optional by default unless 'required' is specified
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true
    },
    size: {
      type: String as () => AvatarProps['size'],
      validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
    }
  },
  setup(props: AvatarProps) {
    const sizeClass = computed(() => {
      switch (props.size) {
        case 'sm':
          return 'h-8 w-8';
        case 'lg':
          return 'h-24 w-24';
        default:
          return 'h-16 w-16';
      }
    });

    return {
      sizeClass
    };
  }
})
</script>

<template>
  <!-- computed class is added to div element -->
  <div class="flex justify-center items-center rounded-full overflow-hidden bg-gray-200" :class="sizeClass">
    <img :src="imageUrl" :alt="altText" class="w-full h-full object-cover">
  </div>
</template>


