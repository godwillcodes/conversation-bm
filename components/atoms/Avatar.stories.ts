import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from './Avatar.vue'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable avatar component with support for images, initials, and different sizes and colors.'
      }
    }
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL'
    },
    alt: {
      control: 'text',
      description: 'Alt text for the image'
    },
    initials: {
      control: 'text',
      description: 'Initials to display when no image is provided'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the avatar'
    },
    color: {
      control: 'select',
      options: ['red', 'green', 'black', 'white'],
      description: 'Background color theme'
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

export const Default: Story = {
  args: {
    initials: 'BM',
    size: 'md',
    color: 'red'
  }
}

export const Small: Story = {
  args: {
    initials: 'BM',
    size: 'sm',
    color: 'red'
  }
}

export const Large: Story = {
  args: {
    initials: 'BM',
    size: 'lg',
    color: 'red'
  }
}

export const ExtraLarge: Story = {
  args: {
    initials: 'BM',
    size: 'xl',
    color: 'red'
  }
}

export const Green: Story = {
  args: {
    initials: 'BM',
    size: 'md',
    color: 'green'
  }
}

export const WithImage: Story = {
  args: {
    src: 'https://via.placeholder.com/100x100/BE1622/FFFFFF?text=BM',
    alt: 'Boniface Mwangi',
    initials: 'BM',
    size: 'md',
    color: 'red'
  }
}

export const AllSizes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center space-x-4">
        <Avatar initials="BM" size="sm" color="red" />
        <Avatar initials="BM" size="md" color="red" />
        <Avatar initials="BM" size="lg" color="red" />
        <Avatar initials="BM" size="xl" color="red" />
      </div>
    `
  })
}

export const AllColors: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center space-x-4">
        <Avatar initials="BM" size="md" color="red" />
        <Avatar initials="BM" size="md" color="green" />
        <Avatar initials="BM" size="md" color="black" />
        <Avatar initials="BM" size="md" color="white" />
      </div>
    `
  })
}
