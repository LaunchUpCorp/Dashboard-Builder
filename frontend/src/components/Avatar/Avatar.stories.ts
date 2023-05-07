import type { Story, Meta } from '@storybook/vue3';
import Avatar from './Avatar.vue';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    imageUrl: { control: 'text' },
    altText: { control: 'text' }
  }
} as Meta;

interface AvatarProps {
  imageUrl: string;
  altText: string;
}

const Template: Story<AvatarProps> = (args: AvatarProps) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: '<Avatar :imageUrl="args.imageUrl" :altText="args.altText" />',
});

export const Default: Story<AvatarProps> = Template.bind({});
Default.args = {
  imageUrl: 'https://placekitten.com/150/150',
  altText: 'Avatar'
};


