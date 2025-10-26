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
              <h1 class="text-xl font-bold text-white">{{ siteTitle }}</h1>
              <p class="text-sm text-gray-300">{{ tagline }}</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button
              class="text-gray-400 hover:text-white transition-colors"
              @click="toggleDarkMode"
              :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              <svg v-if="isDarkMode" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <CTAButton
              variant="primary"
              size="md"
              aria-label="Get convinced about the campaign"
            >
              CONVINCED?
            </CTAButton>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container-center">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="mt-12 py-8 border-t border-glass-border">
      <div class="container-center">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-center md:text-left">
            <p class="text-sm text-gray-400">
              © {{ currentYear }} Boniface Mwangi Campaign. All rights reserved.
            </p>
            <p class="text-xs text-gray-500 mt-1">
              Built with ❤️ for a better Kenya
            </p>
          </div>
          <div class="flex space-x-6">
            <a
              v-for="link in footerLinks"
              :key="link.name"
              :href="link.url"
              class="text-sm text-gray-400 hover:text-white transition-colors"
              :aria-label="link.name"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
interface FooterLink {
  name: string
  url: string
}

const props = withDefaults(defineProps<{
  siteTitle?: string
  tagline?: string
}>(), {
  siteTitle: 'Boniface Mwangi',
  tagline: 'Building a better Kenya together'
})

const chatStore = useChatStore()
const { isDarkMode } = storeToRefs(chatStore)

const currentYear = new Date().getFullYear()

const footerLinks: FooterLink[] = [
  { name: 'Privacy Policy', url: '/privacy' },
  { name: 'Terms of Service', url: '/terms' },
  { name: 'Contact', url: '/contact' },
  { name: 'Volunteer', url: '/volunteer' }
]

const toggleDarkMode = () => {
  chatStore.toggleDarkMode()
}
</script>
