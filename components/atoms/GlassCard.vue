<template>
  <div
    :class="cardClasses"
    :style="cardStyles"
    role="region"
    :aria-label="ariaLabel"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'elevated' | 'subtle'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'default',
  padding: 'md',
  className: '',
  ariaLabel: 'Glass card'
})

const sizeClasses = {
  sm: 'rounded-glass',
  md: 'rounded-glass',
  lg: 'rounded-glass-lg',
  xl: 'rounded-glass-lg'
}

const variantClasses = {
  default: 'glass-card',
  elevated: 'glass-card-lg',
  subtle: 'glass-card bg-opacity-50'
}

const paddingClasses = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8'
}

const cardClasses = computed(() => [
  'transition-all',
  'duration-300',
  'ease-in-out',
  sizeClasses[props.size],
  variantClasses[props.variant],
  paddingClasses[props.padding],
  props.className
])

const cardStyles = computed(() => ({
  backdropFilter: 'blur(14px)',
  WebkitBackdropFilter: 'blur(14px)'
}))
</script>
