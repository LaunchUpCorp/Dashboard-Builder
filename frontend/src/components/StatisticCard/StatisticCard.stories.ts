import { defineComponent } from "vue";
import type { Meta, Story } from '@storybook/vue3';
import StatisticCard from './StatisticCard.vue';
import '../../main.css'

interface cardThemes {
    theme: 'default' | 'dark' | 'light' | 'blue' | 'red';
}

export default {
    title: "Statistic Cards",
    component: StatisticCard,
    argTypes: {
        theme: {
            name: 'The theme of the dropdown',
            type: 'string',
            control: 'select',
            options: [ 'light', 'dark', 'default', 'blue', 'red' ]
        },
        dummyData: {
            
        }
    },
} as Meta

const Template: Story<cardThemes> = (args: cardThemes) => 
    defineComponent({
        components: { StatisticCard },
        setup() {

            args.dummyData = {dataType: 100, date: "2023-03-12", time: "11:00:00"}
            return {
                args,
            };
        },
        template: `
        <StatisticCard v-bind="args"
        />
        `
    })

    export const Default = Template.bind({});
    Default.args = {
      theme: 'default',
    };
    
    export const Dark = Template.bind({});
    Dark.args = {
      theme: 'dark'
    };
    
    export const Light = Template.bind({});
    Light.args = {
      theme: 'light'
    };

    export const Blue = Template.bind({});
    Blue.args = {
      theme: 'blue'
    };

    export const Red = Template.bind({});
    Red.args = {
      theme: 'red'
    };
