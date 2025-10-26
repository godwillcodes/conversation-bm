<template>
  <div class="min-h-screen bg-dark-base">
    <!-- Header -->
    <header class="glass-card-lg mx-4 mt-4 mb-6">
      <div class="container-center py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <Avatar
              :initials="'BM'"
              :size="'lg'"
              :color="'red'"
              aria-label="Boniface Mwangi avatar"
            />
            <div>
              <h1 class="text-xl font-bold text-white">Boniface Mwangi</h1>
              <p class="text-sm text-gray-300">Building a better Kenya together</p>
            </div>
          </div>
          <CTAButton
            variant="primary"
            size="md"
            aria-label="Get convinced about the campaign"
          >
            CONVINCED?
          </CTAButton>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container-center">
      <div class="glass-card-lg p-6">
        <!-- Chat List -->
        <div class="space-y-2 mb-6">
          <h2 class="text-lg font-semibold text-white mb-4">Conversations</h2>
          <ChatItem
            v-for="chat in chatStore.chatItems"
            :key="chat.id"
            :chat-item="chat"
            :is-selected="chatStore.currentChatId === chat.id"
            @select="chatStore.setCurrentChat"
          />
        </div>

        <!-- Messages -->
        <div class="space-y-4 min-h-[400px]">
          <div
            v-for="message in chatStore.currentMessages"
            :key="message.id"
            class="flex"
            :class="message.sender === 'user' ? 'justify-end' : 'justify-start'"
          >
            <MessageBubble
              :message="message"
              :show-avatar="message.sender === 'boniface'"
            />
          </div>

          <!-- Typing Indicator -->
          <div
            v-if="chatStore.isTyping"
            class="flex justify-start"
          >
            <div class="message-bubble-left flex items-center space-x-2">
              <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="mt-6 flex space-x-4">
          <input
            v-model="newMessage"
            type="text"
            placeholder="Type your message..."
            class="flex-1 px-4 py-3 bg-dark-surface border border-glass-border rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
            @keydown.enter="sendMessage"
          />
          <CTAButton
            variant="primary"
            size="md"
            :disabled="!newMessage.trim()"
            @click="sendMessage"
          >
            Send
          </CTAButton>
        </div>
      </div>
    </main>

    <!-- Floating CTA -->
    <div class="fixed bottom-6 right-6">
      <CTAButton
        variant="ghost"
        size="lg"
        class="animate-pulse-glow"
        aria-label="Share this campaign"
      >
        Share
      </CTAButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const chatStore = useChatStore()
const newMessage = ref('')

const sendMessage = () => {
  if (!newMessage.value.trim()) return

  chatStore.addMessage({
    text: newMessage.value,
    sender: 'user',
    status: 'sending'
  })

  newMessage.value = ''

  // Simulate response after a delay
  setTimeout(() => {
    chatStore.simulateTyping()
  }, 1000)
}

// SEO Head
useHead({
  title: 'Boniface Mwangi Campaign - Building a Better Kenya',
  meta: [
    {
      name: 'description',
      content: 'Join Boniface Mwangi in building a better Kenya. Every voice matters, every action counts. Start the conversation today.'
    },
    {
      property: 'og:title',
      content: 'Boniface Mwangi Campaign - Building a Better Kenya'
    },
    {
      property: 'og:description',
      content: 'Join Boniface Mwangi in building a better Kenya. Every voice matters, every action counts.'
    },
    {
      property: 'og:image',
      content: '/og-image.jpg'
    }
  ]
})
</script>
