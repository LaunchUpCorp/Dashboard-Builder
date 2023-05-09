import type { Meta, StoryObj } from '@storybook/vue3'

import AddDashboard from './AddDashboard.vue'

const meta: Meta<typeof AddDashboard> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'AddDashboard',
  component: AddDashboard
}

export default meta
type Story = StoryObj<typeof AddDashboard>

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {
    primary: true
  }
}
