import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Message {
  id: string
  text: string
  sender: 'user' | 'boniface'
  timestamp: Date
  status: 'sending' | 'delivered' | 'seen'
  avatar?: string
}

export interface ChatItem {
  id: string
  title: string
  preview: string
  timestamp: Date
  unread: number
  avatar: string
  lastMessage: Message
}

export const useChatStore = defineStore('chat', () => {
  // State
  const messages = ref<Message[]>([])
  const chatItems = ref<ChatItem[]>([])
  const isTyping = ref(false)
  const currentChatId = ref<string | null>(null)
  const isDarkMode = ref(true)
  const userPreferences = ref({
    soundEnabled: true,
    notificationsEnabled: true,
    reducedMotion: false
  })

  // Getters
  const currentMessages = computed(() => 
    messages.value // For now, show all messages
  )

  const unreadCount = computed(() => 
    chatItems.value.reduce((total, chat) => total + chat.unread, 0)
  )

  const currentChat = computed(() => 
    chatItems.value.find(chat => chat.id === currentChatId.value)
  )

  // Actions
  function addMessage(message: Omit<Message, 'id' | 'timestamp'>) {
    const newMessage: Message = {
      ...message,
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
    }
    
    messages.value.push(newMessage)
    
    // Update chat item preview
    const chatIndex = chatItems.value.findIndex(chat => chat.id === currentChatId.value)
    if (chatIndex !== -1) {
      chatItems.value[chatIndex].preview = message.text
      chatItems.value[chatIndex].lastMessage = newMessage
      chatItems.value[chatIndex].timestamp = new Date()
    }
    
    return newMessage
  }

  function setTyping(typing: boolean) {
    isTyping.value = typing
  }

  function setCurrentChat(chatId: string | null) {
    currentChatId.value = chatId
    
    // Mark messages as seen when opening chat
    if (chatId) {
      const chatIndex = chatItems.value.findIndex(chat => chat.id === chatId)
      if (chatIndex !== -1) {
        chatItems.value[chatIndex].unread = 0
      }
      
      // Mark messages as seen
      messages.value.forEach(msg => {
        if (msg.sender === 'boniface') {
          msg.status = 'seen'
        }
      })
    }
  }

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('darkMode', isDarkMode.value.toString())
  }

  function updateUserPreferences(preferences: Partial<typeof userPreferences.value>) {
    userPreferences.value = { ...userPreferences.value, ...preferences }
    localStorage.setItem('userPreferences', JSON.stringify(userPreferences.value))
  }

  function initializeChat() {
    // Initialize with sample data
    const sampleMessages: Message[] = [
      {
        id: 'msg_1',
        text: 'Welcome! I\'m Boniface Mwangi, and I believe in a better Kenya for all of us.',
        sender: 'boniface',
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
        status: 'seen',
        avatar: 'BM'
      },
      {
        id: 'msg_2',
        text: 'Every voice matters. Every action counts. Together, we can build the Kenya we deserve.',
        sender: 'boniface',
        timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
        status: 'seen',
        avatar: 'BM'
      },
      {
        id: 'msg_3',
        text: 'What issues matter most to you? Let\'s start the conversation.',
        sender: 'boniface',
        timestamp: new Date(Date.now() - 300000), // 5 minutes ago
        status: 'delivered',
        avatar: 'BM'
      }
    ]

    const sampleChatItems: ChatItem[] = [
      {
        id: 'chat_1',
        title: 'Boniface Mwangi',
        preview: 'What issues matter most to you? Let\'s start the conversation.',
        timestamp: new Date(Date.now() - 300000),
        unread: 0,
        avatar: 'BM',
        lastMessage: sampleMessages[sampleMessages.length - 1]
      }
    ]

    messages.value = sampleMessages
    chatItems.value = sampleChatItems
    currentChatId.value = 'chat_1'

    // Load preferences from localStorage
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode !== null) {
      isDarkMode.value = savedDarkMode === 'true'
    }

    const savedPreferences = localStorage.getItem('userPreferences')
    if (savedPreferences) {
      try {
        userPreferences.value = { ...userPreferences.value, ...JSON.parse(savedPreferences) }
      } catch (error) {
        console.warn('Failed to parse user preferences from localStorage:', error)
      }
    }
  }

  function simulateTyping() {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      // Add a response message
      addMessage({
        text: 'Thank you for your interest! Let\'s continue this conversation.',
        sender: 'boniface',
        status: 'delivered',
        avatar: 'BM'
      })
    }, 2000)
  }

  return {
    // State
    messages,
    chatItems,
    isTyping,
    currentChatId,
    isDarkMode,
    userPreferences,
    
    // Getters
    currentMessages,
    unreadCount,
    currentChat,
    
    // Actions
    addMessage,
    setTyping,
    setCurrentChat,
    toggleDarkMode,
    updateUserPreferences,
    initializeChat,
    simulateTyping
  }
})

