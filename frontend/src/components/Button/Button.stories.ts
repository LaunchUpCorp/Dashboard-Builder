import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './index.vue'
import { Icon } from '@iconify/vue'

interface buttonVariants {
  variant:
    | 'primary'
    | 'primaryOutline'
    | 'secondary'
    | 'secondaryOutline'
    | 'info'
    | 'infoOutline'
    | 'success'
    | 'successOutline'
    | 'danger'
    | 'dangerOutline'
    | 'warning'
    | 'warningOutline'
}

interface buttonSize {
  size: 'small' | 'medium' | 'large'
}

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      name: 'The variant styles of the button',
      type: 'string',
      control: 'select',
      options: [
        'primary',
        'primaryOutline',
        'secondary',
        'secondaryOutline',
        'info',
        'infoOutline',
        'success',
        'successOutline',
        'danger',
        'dangerOutline',
        'warning',
        'warningOutline'
      ]
    },
    size: {
      name: 'The size options for the button',
      type: 'string',
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    btnType: {
      type: 'string',
      control: 'select',
      options: ['button', 'submit', 'reset'],
      default: 'button'
    },
    disabled: {
      type: 'boolean',
      default: false
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const ButtonWithIcon: Story = {
  render: (args) => ({
    components: { Button, Icon },
    setup() {
      return { args }
    },
    template: `<Button v-bind="args"><Icon icon="fa6-solid:paper-plane" /> </Button>`
  })
}

export const ButtonWithTextAndIcon: Story = {
  render: (args) => ({
    components: { Button, Icon },
    setup() {
      return { args }
    },
    template: `<Button v-bind="args">Send <Icon icon="fa6-solid:paper-plane" /></Button>`
  })
}

//this story uses a template element and an arg called 'label' to allow storybook user to dynamically change button label in storybook
export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template:
      '<Button v-bind="args"><template v-slot><text v-html="args.label" /></template></Button>'
  }),
  args: {
    variant: 'primary',
    label: 'Primary'
  }
}

export const PrimaryOutline: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Primary Outline</Button>'
  }),
  args: {
    variant: 'primaryOutline'
  }
}

export const Secondary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Secondary</Button>'
  }),
  args: {
    variant: 'secondary'
  }
}

export const SecondaryOutline: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Secondary Outline</Button>'
  }),
  args: {
    variant: 'secondaryOutline'
  }
}

export const Info: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Info</Button>'
  }),
  args: {
    variant: 'info'
  }
}

export const InfoOutline: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Info Outline</Button>'
  }),
  args: {
    variant: 'infoOutline'
  }
}

export const Success: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Success</Button>'
  }),
  args: {
    variant: 'success'
  }
}

export const SuccessOutline: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Success Outline</Button>'
  }),
  args: {
    variant: 'successOutline'
  }
}

export const Danger: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Danger</Button>'
  }),
  args: {
    variant: 'danger'
  }
}

export const DangerOutline: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Danger Outline</Button>'
  }),
  args: {
    variant: 'dangerOutline'
  }
}

export const Warning: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Warning</Button>'
  }),
  args: {
    variant: 'warning'
  }
}

export const WarningOutline: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Warning Outline</Button>'
  }),
  args: {
    variant: 'warningOutline'
  }
}

export const PurpleOutline: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args" class="border-purple-500 text-purple-500">Click</Button>'
  }),
  args: {
    variant: 'primaryOutline'
  }
}

export const SmallButton: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Click me</Button>'
  }),
  args: {
    size: 'small'
  }
}

export const LargeButton: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Click me</Button>'
  }),
  args: {
    size: 'large'
  }
}
