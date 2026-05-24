import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import storybook from 'eslint-plugin-storybook'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Shared language options
const baseLanguageOptions = {
  parser: tsParser,
  ecmaVersion: 'latest',
  sourceType: 'module'
}

// Shared plugins
const basePlugins = {
  '@typescript-eslint': tseslint,
  react,
  'react-hooks': reactHooks,
  prettier: prettierPlugin
}

// Shared rules
const baseRules = {
  ...tseslint.configs.recommended.rules,
  ...prettier.rules,
  '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  '@typescript-eslint/no-explicit-any': 'warn',
  'prettier/prettier': 'warn'
}

// Shared browser globals
const browserGlobals = {
  document: 'readonly',
  window: 'readonly',
  navigator: 'readonly',
  localStorage: 'readonly',
  console: 'readonly'
}

export default [
  js.configs.recommended,
  prettier,

  // Non-app files
  {
    files: ['.storybook/**/*.{ts,tsx}', 'vite.config.ts', 'vitest.shims.d.ts'],
    languageOptions: {
      ...baseLanguageOptions,
      parserOptions: { project: null },
      globals: {
        __dirname: 'readonly',
        process: 'readonly',
        module: 'readonly'
      }
    },
    rules: {
      'no-undef': 'off'
    }
  },

  // Jest and test files
  {
    files: ['**/*.{test,spec}.{ts,tsx}', 'src/setupTests.ts', '__mocks__/**/*'],
    languageOptions: {
      ...baseLanguageOptions,
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: null
      },
      globals: {
        // Jest
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        afterAll: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly',
        // Browser
        ...browserGlobals,
        // Extra DOM types
        IntersectionObserver: 'readonly',
        IntersectionObserverEntry: 'readonly',
        // Node
        module: 'readonly',
        global: 'readonly',
        process: 'readonly'
      }
    },
    plugins: basePlugins,
    rules: baseRules
  },

  // Main application files
  {
    files: ['**/*.{ts,tsx}', 'src/pages/**', 'src/components/**'],
    ignores: [
      '**/*.{test,spec}.{ts,tsx}',
      'src/setupTests.ts',
      '__mocks__/**/*'
    ],
    languageOptions: {
      ...baseLanguageOptions,
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: null
      },
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      ...basePlugins,
      storybook
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      ...baseRules,
      // App specific overrides
      'import/no-absolute-path': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/no-named-as-default': 'off',
      'no-param-reassign': 'off'
    }
  },
  {
    ignores: ['dist', 'node_modules', 'coverage']
  }
]
