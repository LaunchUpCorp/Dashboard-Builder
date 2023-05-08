import { defineComponent } from 'vue';
import type { Meta, Story } from '@storybook/vue3';
import Dropdown from './Dropdown.vue';
import '../../index.css';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    hover: {
      name: 'Background Hover Color',
      type: 'string',
      control: 'text',
    },
    msg: {
      name: 'Dropdown Initial Message',
      type: 'string',
      control: 'text',
    },
    size: {
      name: 'Dropdown Width',
      type: 'string',
      control: 'radio',
      options: ["w-1/4", "w-1/5", "w-1/6", "w-1/8"]
    },
    text: {
      name: 'Dropdown Text Color',
      type: 'string',
      control: 'radio',
      options: ['text-white', 'text-black'],
    },
    color: {
      name: 'Dropdown Background Color',
      type: 'string',
      control: 'text',
    },
  },
};

export default meta;

const Template: Story<typeof Dropdown> = (args) =>
  defineComponent({
    components: { Dropdown },
    setup() {
      return { args };
    },
    template: '<Dropdown v-bind="args" />',
  });

export const Orange = Template.bind({});
Orange.args = {
  selOptions: [
    { msg: 'Test1', id: 0 },
    { msg: 'Test2', id: 1 },
    { msg: 'Test3', id: 2 },
    { msg: 'Test4', id: 3 },
  ],
  msg: 'Select',
  hover: "hover:bg-orange-800",
  color: "bg-orange-500"
};
export const Red = Template.bind({});
Red.args = {
  selOptions: [
    { msg: 'Test1', id: 0 },
    { msg: 'Test2', id: 1 },
    { msg: 'Test3', id: 2 },
    { msg: 'Test4', id: 3 },
  ],
  msg: 'Select',
  hover: "hover:bg-red-800",
  color: "bg-red-500"
};

export const Blue = Template.bind({});
Blue.args = {
  selOptions: [
    { msg: 'Test1', id: 0 },
    { msg: 'Test2', id: 1 },
    { msg: 'Test3', id: 2 },
    { msg: 'Test4', id: 3 },
  ],
  msg: 'Select',
  hover: "hover:bg-blue-800",
  color: "bg-blue-500"
};
export const Yellow = Template.bind({});
Yellow.args = {
  selOptions: [
    { msg: 'Test1', id: 0 },
    { msg: 'Test2', id: 1 },
    { msg: 'Test3', id: 2 },
    { msg: 'Test4', id: 3 },
  ],
  msg: 'Select',
  hover: "hover:bg-yellow-800",
  color: "bg-yellow-500"
};
export const Green = Template.bind({});
Green.args = {
  selOptions: [
    { msg: 'Test1', id: 0 },
    { msg: 'Test2', id: 1 },
    { msg: 'Test3', id: 2 },
    { msg: 'Test4', id: 3 },
  ],
  msg: 'Select',
  hover: "hover:bg-green-800",
  color: "bg-green-500"
};