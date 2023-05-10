<script lang="ts">
    import { defineComponent } from 'vue';
    import Dropdown from './components/Dropdown/Dropdown.vue'
    import Test  from './components/Test/Test.vue';

    
    export default defineComponent({
        name: 'Main Component',
        components: {
            Dropdown,
        },
    })

</script>

<template>
    <div>
        <Dropdown class="m-5"
            theme = "light"
        >
            <span>Item 1</span>
            <span>Item 2</span>
            <span>Item 3</span>
            <span>Item 4</span>
        </Dropdown>
    </div>
</template>