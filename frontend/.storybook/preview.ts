import type { Preview } from '@storybook/vue3'
//loads in the tailwind styles to Storybook:
import '../src/main.css' 

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
