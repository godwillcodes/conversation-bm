<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    :aria-label="ariaLabel"
    :aria-describedby="ariaDescribedby"
    @click="handleClick"
  >
    <span v-if="loading" class="loading-spinner" aria-hidden="true">
      <svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </span>
    
    <span v-else class="button-content">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  className?: string
  ariaLabel?: string
  ariaDescribedby?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
  className: '',
  ariaLabel: '',
  ariaDescribedby: ''
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}

const variantClasses = {
  primary: 'cta-button-primary',
  ghost: 'cta-button-ghost',
  outline: 'cta-button-outline'
}

const buttonClasses = computed(() => [
  'cta-button',
  'relative',
  'inline-flex',
  'items-center',
  'justify-center',
  'font-medium',
  'rounded-full',
  'transition-all',
  'duration-300',
  'ease-in-out',
  'focus-ring',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'disabled:transform-none',
  'active:scale-95',
  'hover:scale-105',
  sizeClasses[props.size],
  variantClasses[props.variant],
  props.fullWidth ? 'w-full' : '',
  props.className
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.cta-button-outline {
  @apply border-2 border-accent-green text-accent-green bg-transparent hover:bg-accent-green hover:text-accent-white;
}

.loading-spinner {
  @apply flex items-center justify-center;
}

.button-content {
  @apply flex items-center justify-center space-x-2;
}
</style>
