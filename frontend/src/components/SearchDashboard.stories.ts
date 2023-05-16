import type { Meta, StoryObj } from '@storybook/vue3'

import SearchDashboard from './SearchDashboard.vue'

const meta: Meta<typeof SearchDashboard> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'SearchDashboard',
  component: SearchDashboard
}

export default meta
type Story = StoryObj<typeof SearchDashboard>

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {
    primary: true
  }
}
