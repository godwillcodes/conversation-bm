<template>
  <div
    :class="avatarClasses"
    :style="avatarStyles"
    role="img"
    :aria-label="ariaLabel"
  >
    <img
      v-if="src && !imageError"
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover rounded-full"
      @error="handleImageError"
    />
    <span v-else class="font-semibold text-sm">
      {{ initials }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src?: string
  alt?: string
  initials?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'red' | 'green' | 'black' | 'white'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  alt: 'Avatar',
  initials: 'BM',
  size: 'md',
  color: 'red',
  className: ''
})

const imageError = ref(false)

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-lg'
}

const colorClasses = {
  red: 'bg-accent-red text-accent-white',
  green: 'bg-accent-green text-accent-white',
  black: 'bg-accent-black text-accent-white',
  white: 'bg-accent-white text-accent-black'
}

const avatarClasses = computed(() => [
  'avatar',
  'rounded-full',
  'flex',
  'items-center',
  'justify-center',
  'font-semibold',
  'select-none',
  sizeClasses[props.size],
  colorClasses[props.color],
  props.className
])

const avatarStyles = computed(() => ({
  minWidth: sizeClasses[props.size].split(' ')[0],
  minHeight: sizeClasses[props.size].split(' ')[1]
}))

const ariaLabel = computed(() => 
  props.alt || `Avatar for ${props.initials}`
)

const handleImageError = () => {
  imageError.value = true
}
</script>

