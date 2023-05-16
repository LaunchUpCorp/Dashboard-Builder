import type { Story, Meta } from '@storybook/vue3';
import Avatar from './Avatar.vue';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    imageUrl: { control: 'text' },
    altText: { control: 'text' },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
      defaultValue: 'md',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is a simple Avatar component that displays an image and alt text.'
      }
    }
  }
} as Meta;

interface AvatarProps {
  imageUrl: string;
  altText: string;
  size?: 'sm' | 'md' | 'lg';
}

const Template: Story<AvatarProps> = (args: AvatarProps) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: '<Avatar :imageUrl="args.imageUrl" :altText="args.altText" :size="args.size"/>',
});

export const Default: Story<AvatarProps> = Template.bind({});
Default.args = {
  imageUrl: 'https://placekitten.com/300/300',
  altText: 'Avatar',
  size: 'md'
};

export const Small = Template.bind({});
Small.args = {
  imageUrl: 'https://placekitten.com/300/300',
  altText: 'Small Avatar',
  size: 'sm'
};

export const Large = Template.bind({});
Large.args = {
  imageUrl: 'https://placekitten.com/300/300',
  altText: 'Large Avatar',
  size: 'lg'
};


