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
    <div class="flex flex-row">
        <div class="flex flex-col">
            <Dropdown
                theme = "default"
            >
                <span>Item 1</span>
                <span>Item 2</span>
                <span>Item 3</span>
                <span>Item 4</span>
            </Dropdown>
            <Dropdown
                theme = "light"
            >
                <span>Item 1</span>
            </Dropdown>
            <Dropdown
                theme = "dark"
            >
                <span>Item 1</span>
                <span>Item 2</span>
                <span>Item 3</span>
            </Dropdown>
        </div>
        <div class="flex flex-col">
            <Dropdown
                theme = "alert"
            >
                <span>Item 1</span>
                <span>Item 2</span>
            </Dropdown>
            <Dropdown
                theme = "confirm"
            >
                <span>Item 1</span>
                <span>Item 2</span>
                <span>Item 3</span>
            </Dropdown>
            <Dropdown
                theme = "outline danger"
            >
                <span>Item 1</span>
                <span>Item 2</span>
                <span>Item 3</span>
            </Dropdown>
        </div>
    </div>
</template>