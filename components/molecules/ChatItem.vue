<template>
  <div
    :class="itemClasses"
    :aria-label="ariaLabel"
    :aria-selected="isSelected"
    role="button"
    tabindex="0"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space="handleClick"
  >
    <div class="flex items-center space-x-3">
      <!-- Avatar -->
      <div class="flex-shrink-0">
        <Avatar
          :initials="chatItem.avatar"
          :size="avatarSize"
          :aria-label="`${chatItem.title} avatar`"
        />
      </div>
      
      <!-- Content -->
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-semibold text-white truncate">
            {{ chatItem.title }}
          </h3>
          <time
            :datetime="chatItem.timestamp.toISOString()"
            class="text-xs text-gray-400 flex-shrink-0 ml-2"
          >
            {{ formattedTime }}
          </time>
        </div>
        
        <div class="flex items-center justify-between mt-1">
          <p class="text-sm text-gray-300 truncate">
            {{ chatItem.preview }}
          </p>
          
          <div v-if="chatItem.unread > 0" class="flex-shrink-0 ml-2">
            <span
              class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-accent-red rounded-full min-w-[20px] h-5"
              :aria-label="`${chatItem.unread} unread messages`"
            >
              {{ chatItem.unread > 99 ? '99+' : chatItem.unread }}
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Selection indicator -->
    <div
      v-if="isSelected"
      class="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-accent-green rounded-l-full"
      aria-hidden="true"
    />
  </div>
</template>

<script setup lang="ts">
import type { ChatItem } from '~/stores/chat'

interface Props {
  chatItem: ChatItem
  isSelected?: boolean
  avatarSize?: 'sm' | 'md' | 'lg'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  isSelected: false,
  avatarSize: 'md',
  className: ''
})

const emit = defineEmits<{
  select: [chatId: string]
}>()

const itemClasses = computed(() => [
  'relative',
  'p-4',
  'cursor-pointer',
  'transition-all',
  'duration-200',
  'ease-in-out',
  'hover:bg-dark-elevated',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-accent-green',
  'focus:ring-inset',
  'rounded-lg',
  'group',
  props.isSelected ? 'bg-dark-elevated' : '',
  props.className
])

const formattedTime = computed(() => {
  const now = new Date()
  const messageTime = props.chatItem.timestamp
  const diffInMinutes = Math.floor((now.getTime() - messageTime.getTime()) / (1000 * 60))
  
  if (diffInMinutes < 1) {
    return 'now'
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}m`
  } else if (diffInMinutes < 1440) {
    const hours = Math.floor(diffInMinutes / 60)
    return `${hours}h`
  } else if (diffInMinutes < 10080) {
    const days = Math.floor(diffInMinutes / 1440)
    return `${days}d`
  } else {
    return messageTime.toLocaleDateString('en-KE', {
      month: 'short',
      day: 'numeric'
    })
  }
})

const ariaLabel = computed(() => 
  `${props.chatItem.title}, ${props.chatItem.preview}, ${formattedTime.value}${props.chatItem.unread > 0 ? `, ${props.chatItem.unread} unread messages` : ''}`
)

const handleClick = () => {
  emit('select', props.chatItem.id)
}
</script>
