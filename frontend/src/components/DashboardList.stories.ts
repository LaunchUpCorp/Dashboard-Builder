import type { Meta, StoryObj } from '@storybook/vue3'

import DashboardList from './DashboardList.vue'

const meta: Meta<typeof DashboardList> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'DashboardList',
  component: DashboardList
}

export default meta
type Story = StoryObj<typeof DashboardList>

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {
    primary: true,
    filteredBoards: [
      { id: 0, title: 'template1' },
      { id: 1, title: 'template2' },
      { id: 2, title: 'template3' }
    ]
  }
}
