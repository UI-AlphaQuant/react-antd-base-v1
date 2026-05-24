/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
      '@components': path.resolve(dirname, './src/components'),
      '@pages': path.resolve(dirname, './src/pages'),
      '@routes': path.resolve(dirname, './src/routes'),
      '@store': path.resolve(dirname, './src/store'),
      '@constants': path.resolve(dirname, './src/constants'),
      '@utils': path.resolve(dirname, './src/utils'),
      '@theme': path.resolve(dirname, './src/theme'),
      '@i18n': path.resolve(dirname, './src/i18n'),
      '@test': path.resolve(dirname, './src/test'),
      '@config': path.resolve(dirname, './src/config')
    }
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook')
          })
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium'
              }
            ]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }
    ]
  }
})
