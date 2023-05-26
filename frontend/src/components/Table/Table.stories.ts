import type { Meta, StoryObj } from '@storybook/vue3'
import Table from './Table.vue'
import { within, userEvent } from '@storybook/testing-library'

const meta: Meta<typeof Table> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Table',
  component: Table
}

export default meta
type Story = StoryObj<typeof Table>

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {
    primary: true
  }
}

export const Delete: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const DeleteButton = await canvas.getAllByText('Delete')[1]
    await userEvent.click(DeleteButton)
  }
}
export const Search: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const SearchInput = await canvas.getByPlaceholderText('Filter by calories')
    await userEvent.click(SearchInput)
    await userEvent.keyboard('159')
  }
}
