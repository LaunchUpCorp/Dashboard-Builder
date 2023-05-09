import type { Meta, StoryObj } from '@storybook/vue3'
import { within, userEvent } from '@storybook/testing-library'

import SideBar from './Sidebar.vue'

const meta: Meta = {
  title: 'Sidebar',
  component: SideBar
}

export default meta

type Story = StoryObj<typeof SideBar>

export const Primary: Story = {
  args: {
    primary: true
  }
}
export const Search: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const searchInput = await canvas.getByPlaceholderText('Search')
    await userEvent.click(searchInput)
    await userEvent.keyboard('1')
  }
}

export const Add: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const addInput = await canvas.getByPlaceholderText('Add a new dashboard')
    await userEvent.click(addInput)
    await userEvent.keyboard('new template')
    const submitButton = canvas.getByRole('button')
    await userEvent.click(submitButton)
  }
}
