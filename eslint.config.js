import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    ignores: ['.nuxt/**', 'dist/**', 'node_modules/**', '*.min.js']
  },
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
        defineNuxtConfig: 'readonly',
        definePageMeta: 'readonly',
        defineLayoutMeta: 'readonly',
        useHead: 'readonly',
        useSeoMeta: 'readonly',
        useSchemaOrg: 'readonly',
        useRoute: 'readonly',
        useRouter: 'readonly',
        navigateTo: 'readonly',
        useLazyFetch: 'readonly',
        useFetch: 'readonly',
        $fetch: 'readonly',
        useCookie: 'readonly',
        useRuntimeConfig: 'readonly',
        useAppConfig: 'readonly',
        useState: 'readonly',
        useAsyncData: 'readonly',
        useLazyAsyncData: 'readonly',
        refreshCookie: 'readonly',
        clearNuxtData: 'readonly',
        useNuxtData: 'readonly',
        preloadRouteComponents: 'readonly',
        prefetchComponents: 'readonly',
        preloadComponents: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
        onBeforeMount: 'readonly',
        onBeforeUnmount: 'readonly',
        onUpdated: 'readonly',
        onBeforeUpdate: 'readonly',
        onActivated: 'readonly',
        onDeactivated: 'readonly',
        onErrorCaptured: 'readonly',
        onRenderTracked: 'readonly',
        onRenderTriggered: 'readonly',
        onServerPrefetch: 'readonly',
        ref: 'readonly',
        computed: 'readonly',
        reactive: 'readonly',
        readonly: 'readonly',
        watchEffect: 'readonly',
        watch: 'readonly',
        watchPostEffect: 'readonly',
        watchSyncEffect: 'readonly',
        isRef: 'readonly',
        unref: 'readonly',
        toRef: 'readonly',
        toRefs: 'readonly',
        isProxy: 'readonly',
        isReactive: 'readonly',
        isReadonly: 'readonly',
        shallowRef: 'readonly',
        triggerRef: 'readonly',
        customRef: 'readonly',
        shallowReactive: 'readonly',
        shallowReadonly: 'readonly',
        toRaw: 'readonly',
        markRaw: 'readonly',
        effectScope: 'readonly',
        getCurrentScope: 'readonly',
        onScopeDispose: 'readonly',
        nextTick: 'readonly',
        defineComponent: 'readonly',
        defineAsyncComponent: 'readonly',
        defineCustomElement: 'readonly',
        getCurrentInstance: 'readonly',
        h: 'readonly',
        inject: 'readonly',
        hasInjectionContext: 'readonly',
        provide: 'readonly',
        useAttrs: 'readonly',
        useSlots: 'readonly',
        useCssModule: 'readonly',
        useCssVars: 'readonly',
        onBeforeRouteLeave: 'readonly',
        onBeforeRouteUpdate: 'readonly',
        onError: 'readonly',
        onUnhandledRejection: 'readonly',
        onHydrationError: 'readonly',
        onPageTransition: 'readonly'
      },
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      vue
    },
    rules: {
      // Vue specific rules
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'warn',
      'vue/require-default-prop': 'error',
      'vue/require-prop-types': 'error',
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      
      // General rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error'
    }
  },
  {
    files: ['**/*.test.{js,ts}', '**/*.spec.{js,ts}', '**/*.stories.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
]