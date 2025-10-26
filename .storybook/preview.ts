import type { Preview } from '@storybook/vue3'
import '../assets/css/main.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0B0B0D'
        },
        {
          name: 'light',
          value: '#ffffff'
        }
      ]
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true
          }
        ]
      }
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="min-h-screen bg-dark-base p-4"><story /></div>'
    })
  ]
}

export default preview
