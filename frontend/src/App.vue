<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import Dropdown from './components/Dropdown/Dropdown.vue'
    
    export interface selOptions{
        msg: string,
        id: number,
    }

    export default defineComponent({

        setup(){

            const arr1 = ref<any>([
                {msg: "Cookie", id: 0},
                {msg: "Cake", id: 1},
                {msg: "Bread", id: 2},
                {msg: "Muffin", id: 3},
                {msg: "Biscuit", id: 4},
            ])

            const arr2 = ref<any>([
                {msg: "Car", id: 0},
                {msg: "Bus", id: 1},
                {msg: "Bike", id: 2},
            ])

            const arr3 = ref<any>([
                {msg: "Go", id: 0},
                {msg: "Stop", id: 1},
            ])

            return { arr1, arr2, arr3 }
        },
        components: {
            Dropdown,
        },
    })

</script>

<template>
    <div>
        <Dropdown 
            msg = "select"
            click = "bg-blue-300"
            text = "text-white"
            hover = "hover:bg-blue-700"
            color = "bg-blue-500"
            size = "w-1/3"
            :selOptions =  arr1
        />
        <Dropdown 
            msg = "select"
            click = "bg-red-300"
            text = "text-white"
            hover = "hover:bg-red-700"
            color = "bg-red-500"
            size = "w-1/4"
            :selOptions =  arr2
        />
        <Dropdown 
            :selOptions =  arr3
        />
        <Task />
    </div>
</template>