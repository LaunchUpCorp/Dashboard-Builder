import { defineComponent } from "vue";
import type { Meta } from '@storybook/vue3';
import Upload from './Upload.vue'
import '../../index.css';

export default {
    title: "Upload CSV file",
    component: Upload,
    argTypes: {

    }
} as Meta;

const Template = (args: any) => 
    defineComponent({
        components: { Upload },
        setup() {
            return {
                args
            }
        },
        template: `
            <Upload v-bind="args" />
        `
    })

export const Default = Template.bind({});