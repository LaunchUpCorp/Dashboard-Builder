Storybook Vue3

What is a story?
    A story captures the rendered state of a UI component. Developers write multiple stories per component that describe all the “interesting” states a component can support.

How to get it running

    Install the required dependencies
        -This can be done using the command ( npm install )

    Run storybook to view the story on local host
        -This can be done using the command ( npm run storybook )

Writing a story

    Each component should have a story and a story should end in component name followed by *.stories.js* 
        -Ie. Button.vue should have Button.stores.js.

Example Story

    Button.vue
        <script setup lang="ts">
        import Card from './components/Card.vue'
        import Button from './components/Button.vue'
        </script>
        <template>
        <Card title="Hello"></Card>
        <Button label="Hello"></Button>
        </template>
        <style>
        #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        }
        </style>

    Button.stories.js
        import Button from '../components/Button.vue';
        export default {
        title: 'Button',
        component: {Button},
        argTypes: {
            label: 'String',
            backgroundColor: { control: 'color' },
        },
        };

        const Template = (args) => ({
        // Components used in your story `template` are defined in the `components` object
        components: { Button },
        // The story's `args` need to be mapped into the template through the `setup()` method
        setup() {
            return { args };
        },
        // And then the `args` are bound to your component with `v-bind="args"`
        template: '<Button label="hello" v-bind="args" />',
        });

        export const Rounded = Template.bind({});
        Rounded.args = {
        label: 'Button',
        rounded: true,
        };
        export const Normal = Template.bind({});
        Normal.args = {
        label: 'Button',
        };


More information

    Storybook Documentation for Vue3 can be found here. 
        -https://storybook.js.org/blog/storybook-vue3/