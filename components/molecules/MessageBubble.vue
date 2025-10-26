<template>
  <div
    :class="bubbleContainerClasses"
    :aria-label="ariaLabel"
  >
    <div
      :class="bubbleClasses"
      :style="bubbleStyles"
      role="article"
    >
      <div class="message-content">
        <p class="text-sm leading-relaxed whitespace-pre-wrap">
          {{ message.text }}
        </p>
      </div>
      
      <div :class="timestampClasses">
        <time :datetime="message.timestamp.toISOString()">
          {{ formattedTime }}
        </time>
        
        <div v-if="message.sender === 'user'" class="status-indicators">
          <span
            v-if="message.status === 'sending'"
            class="status-icon"
            aria-label="Sending"
          >
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
            </svg>
          </span>
          
          <span
            v-else-if="message.status === 'delivered'"
            class="status-icon"
            aria-label="Delivered"
          >
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </span>
          
          <span
            v-else-if="message.status === 'seen'"
            class="status-icon text-accent-green"
            aria-label="Seen"
          >
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Message } from '~/stores/chat'

interface Props {
  message: Message
  showAvatar?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  showAvatar: false,
  className: ''
})

const isUserMessage = computed(() => props.message.sender === 'user')

const bubbleContainerClasses = computed(() => [
  'flex',
  'mb-4',
  'animate-fade-in',
  isUserMessage.value ? 'justify-end' : 'justify-start',
  props.className
])

const bubbleClasses = computed(() => [
  'message-bubble',
  'relative',
  'group',
  isUserMessage.value ? 'message-bubble-right' : 'message-bubble-left',
  'hover:shadow-bubble-lg',
  'transition-all',
  'duration-200'
])

const bubbleStyles = computed(() => ({
  maxWidth: '70%'
}))

const timestampClasses = computed(() => [
  'flex',
  'items-center',
  'justify-between',
  'mt-1',
  'text-xs',
  'opacity-70',
  'group-hover:opacity-100',
  'transition-opacity',
  'duration-200'
])

const formattedTime = computed(() => {
  const now = new Date()
  const messageTime = props.message.timestamp
  const diffInMinutes = Math.floor((now.getTime() - messageTime.getTime()) / (1000 * 60))
  
  if (diffInMinutes < 1) {
    return 'now'
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}m`
  } else if (diffInMinutes < 1440) {
    const hours = Math.floor(diffInMinutes / 60)
    return `${hours}h`
  } else {
    return messageTime.toLocaleDateString('en-KE', {
      month: 'short',
      day: 'numeric'
    })
  }
})

const ariaLabel = computed(() => 
  `Message from ${props.message.sender} at ${formattedTime.value}`
)
</script>

<style scoped>
.status-icon {
  @apply flex items-center justify-center;
}

.message-content {
  @apply break-words;
}
</style>
