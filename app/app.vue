<template>
  <div class="min-h-screen bg-dark-base">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Initialize the chat store when the app starts
const chatStore = useChatStore()

onMounted(() => {
  chatStore.initializeChat()
})
</script>
