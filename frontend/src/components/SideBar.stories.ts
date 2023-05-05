import type { Meta, StoryObj } from '@storybook/vue3'

import SideBar from './Sidebar.vue'

const meta: Meta<typeof SideBar> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'title',
  component: SideBar
}

export default meta
type Story = StoryObj<typeof SideBar>

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {
    primary: true
  }
}
