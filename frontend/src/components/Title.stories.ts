import type { Meta, StoryObj } from '@storybook/vue3'

import Title from './Title.vue'

const meta: Meta<typeof Title> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Title',
  component: Title
}

export default meta
type Story = StoryObj<typeof Title>

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {
    primary: true
  }
}
