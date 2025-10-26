import type { Meta, StoryObj } from '@storybook/vue3'
import MessageBubble from './MessageBubble.vue'
import type { Message } from '~/stores/chat'

const meta: Meta<typeof MessageBubble> = {
  title: 'Molecules/MessageBubble',
  component: MessageBubble,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A message bubble component for displaying chat messages with different states and styling.'
      }
    }
  },
  argTypes: {
    message: {
      control: 'object',
      description: 'Message object containing text, sender, timestamp, and status'
    },
    showAvatar: {
      control: 'boolean',
      description: 'Whether to show the avatar'
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

const createMessage = (text: string, sender: 'user' | 'boniface', status: 'sending' | 'delivered' | 'seen' = 'delivered'): Message => ({
  id: `msg_${Date.now()}`,
  text,
  sender,
  timestamp: new Date(),
  status,
  avatar: sender === 'boniface' ? 'BM' : undefined
})

export const UserMessage: Story = {
  args: {
    message: createMessage('Hello! How can I get involved?', 'user', 'delivered'),
    showAvatar: false
  }
}

export const BonifaceMessage: Story = {
  args: {
    message: createMessage('Welcome! I\'m Boniface Mwangi, and I believe in a better Kenya for all of us.', 'boniface', 'seen'),
    showAvatar: true
  }
}

export const SendingMessage: Story = {
  args: {
    message: createMessage('This message is being sent...', 'user', 'sending'),
    showAvatar: false
  }
}

export const DeliveredMessage: Story = {
  args: {
    message: createMessage('This message has been delivered', 'user', 'delivered'),
    showAvatar: false
  }
}

export const SeenMessage: Story = {
  args: {
    message: createMessage('This message has been seen', 'user', 'seen'),
    showAvatar: false
  }
}

export const LongMessage: Story = {
  args: {
    message: createMessage(
      'This is a longer message that demonstrates how the message bubble handles text wrapping and longer content. It should wrap nicely within the bubble and maintain good readability.',
      'boniface',
      'seen'
    ),
    showAvatar: true
  }
}

export const Conversation: Story = {
  render: () => ({
    components: { MessageBubble },
    setup() {
      const messages = [
        createMessage('Welcome! I\'m Boniface Mwangi, and I believe in a better Kenya for all of us.', 'boniface', 'seen'),
        createMessage('Hello! How can I get involved?', 'user', 'delivered'),
        createMessage('Every voice matters. Every action counts. Together, we can build the Kenya we deserve.', 'boniface', 'seen'),
        createMessage('What issues matter most to you? Let\'s start the conversation.', 'boniface', 'delivered')
      ]
      
      return { messages }
    },
    template: `
      <div class="space-y-4 w-96">
        <div
          v-for="message in messages"
          :key="message.id"
          class="flex"
          :class="message.sender === 'user' ? 'justify-end' : 'justify-start'"
        >
          <MessageBubble
            :message="message"
            :show-avatar="message.sender === 'boniface'"
          />
        </div>
      </div>
    `
  })
}

export const MessageStates: Story = {
  render: () => ({
    components: { MessageBubble },
    setup() {
      const messages = [
        createMessage('Sending...', 'user', 'sending'),
        createMessage('Delivered', 'user', 'delivered'),
        createMessage('Seen', 'user', 'seen')
      ]
      
      return { messages }
    },
    template: `
      <div class="space-y-4 w-96">
        <div
          v-for="message in messages"
          :key="message.id"
          class="flex justify-end"
        >
          <MessageBubble
            :message="message"
            :show-avatar="false"
          />
        </div>
      </div>
    `
  })
}
