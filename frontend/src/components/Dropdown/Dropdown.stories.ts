import { defineComponent } from 'vue';
import type { Meta, Story } from '@storybook/vue3';
import Dropdown from './Dropdown.vue';
import '../../index.css';

interface DropdownProps {
  theme: 'default' | 'dark' | 'light' | 'confirm'| 'alert' | 'outline danger';
}

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    theme: {
      name: 'The theme of the dropdown',
      type: 'string',
      control: 'select',
      options: [ 'light', 'dark', 'default', 'confirm', 'alert', 'outline danger' ]
    },
  },
} as Meta;

const Template: Story<DropdownProps> = (args: DropdownProps) =>
  defineComponent({
    components: { Dropdown },
    setup() {
      return { 
        args
      };
    },
    template: `
      <Dropdown v-bind="args">
        <span>Select 1</span>
        <span>Select 2</span>
        <span>Select 3</span>
        <span>Select 4</span>
      </Dropdown>
  `
  });

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

export const Confirm = Template.bind({});
Confirm.args = {
  theme: 'confirm',
};

export const Alert = Template.bind({});
Alert.args = {
  theme: 'alert'
};

export const Outline = Template.bind({});
Outline.args = {
  theme: 'outline danger'
};

