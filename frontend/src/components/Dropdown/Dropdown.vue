<script lang="ts">
    import { defineComponent} from 'vue';

    export interface selOptions{
        msg: string,
        id: number,
    }

    export default defineComponent({
        name: "Dropdown",
        props: {
            color: {
                type: String,
                default: "bg-slate-500"
            },
            selOptions: {
                type: Array<selOptions>,
            },
            hover: {
                type: String,
                default: "hover:bg-slate-700"
            },
            text: {
                type: String,
                default: "text-black"
            },
            size: {
                type: String,
                default: "w-1/5"
            },
            msg: {
                type: String,
                default: "Select"
            }
        },
        setup(props: any) {
            const bgColor = props.color
            const selectOptions = props.selOptions
            const hoverColor = props.hover
            const textColor = props.text
            const selectSize = props.size
            const initMsg = props.msg
            return {
                initMsg, bgColor, selectOptions, hoverColor, textColor, selectSize
            }        
        },
    })
</script>

<template>
    <div> 
        <select  class=" m-5 p-1 rounded-md drop-shadow-md" :class="`${selectSize} ${bgColor} ${textColor} ${hoverColor}`" >
            <option selected hidden>{{ initMsg }}</option>
            <option v-for="option in selOptions" :key="option.id">
               {{ option.msg }}
            </option>
        </select>
    </div>
</template>


