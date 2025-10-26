import type { Meta, StoryObj } from '@storybook/vue3'
import CTAButton from './CTAButton.vue'

const meta: Meta<typeof CTAButton> = {
  title: 'Atoms/CTAButton',
  component: CTAButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A call-to-action button component with multiple variants, sizes, and states.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'ghost', 'outline'],
      description: 'Button variant style'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: (args) => ({
    components: { CTAButton },
    setup() {
      return { args }
    },
    template: '<CTAButton v-bind="args">Get Started</CTAButton>'
  })
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md'
  },
  render: (args) => ({
    components: { CTAButton },
    setup() {
      return { args }
    },
    template: '<CTAButton v-bind="args">Learn More</CTAButton>'
  })
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md'
  },
  render: (args) => ({
    components: { CTAButton },
    setup() {
      return { args }
    },
    template: '<CTAButton v-bind="args">Contact Us</CTAButton>'
  })
}

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm'
  },
  render: (args) => ({
    components: { CTAButton },
    setup() {
      return { args }
    },
    template: '<CTAButton v-bind="args">Small</CTAButton>'
  })
}

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg'
  },
  render: (args) => ({
    components: { CTAButton },
    setup() {
      return { args }
    },
    template: '<CTAButton v-bind="args">Large Button</CTAButton>'
  })
}

export const Loading: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    loading: true
  },
  render: (args) => ({
    components: { CTAButton },
    setup() {
      return { args }
    },
    template: '<CTAButton v-bind="args">Loading...</CTAButton>'
  })
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true
  },
  render: (args) => ({
    components: { CTAButton },
    setup() {
      return { args }
    },
    template: '<CTAButton v-bind="args">Disabled</CTAButton>'
  })
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    fullWidth: true
  },
  render: (args) => ({
    components: { CTAButton },
    setup() {
      return { args }
    },
    template: '<div class="w-64"><CTAButton v-bind="args">Full Width</CTAButton></div>'
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { CTAButton },
    template: `
      <div class="flex flex-col space-y-4">
        <CTAButton variant="primary" size="md">Primary</CTAButton>
        <CTAButton variant="ghost" size="md">Ghost</CTAButton>
        <CTAButton variant="outline" size="md">Outline</CTAButton>
      </div>
    `
  })
}

export const AllSizes: Story = {
  render: () => ({
    components: { CTAButton },
    template: `
      <div class="flex items-center space-x-4">
        <CTAButton variant="primary" size="sm">Small</CTAButton>
        <CTAButton variant="primary" size="md">Medium</CTAButton>
        <CTAButton variant="primary" size="lg">Large</CTAButton>
      </div>
    `
  })
}
