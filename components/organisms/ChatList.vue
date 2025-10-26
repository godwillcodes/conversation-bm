<template>
  <div class="space-y-2">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold text-white">Conversations</h2>
      <button
        class="text-sm text-accent-green hover:text-accent-green/80 transition-colors"
        @click="refreshChats"
        aria-label="Refresh conversations"
      >
        Refresh
      </button>
    </div>
    
    <div class="space-y-2 max-h-96 overflow-y-auto">
      <ChatItem
        v-for="chat in chatItems"
        :key="chat.id"
        :chat-item="chat"
        :is-selected="currentChatId === chat.id"
        @select="handleChatSelect"
      />
    </div>
    
    <!-- Empty State -->
    <div
      v-if="chatItems.length === 0"
      class="text-center py-8"
    >
      <div class="text-gray-400 mb-2">
        <svg class="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
      <p class="text-gray-400 text-sm">No conversations yet</p>
      <p class="text-gray-500 text-xs mt-1">Start a conversation to get involved</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatItem } from '~/stores/chat'

interface Props {
  chatItems: ChatItem[]
  currentChatId?: string | null
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  currentChatId: null,
  loading: false
})

const emit = defineEmits<{
  select: [chatId: string]
  refresh: []
}>()

const handleChatSelect = (chatId: string) => {
  emit('select', chatId)
}

const refreshChats = () => {
  emit('refresh')
}
</script>
