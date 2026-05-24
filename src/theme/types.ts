// Central TypeScript definitions for theming

export type ThemeMode = 'light' | 'dark'

export interface AppTheme {
  mode: ThemeMode

  colors: {
    white: string
    black: string

    'primary-500': string
    'primary-700': string
    'secondary-500': string
    'secondary-700': string

    'gray-50': string
    'gray-100': string
    'gray-200': string
    'gray-300': string
    'gray-400': string
    'gray-500': string
    'gray-600': string

    'border-default': string
    'placeholder-color': string

    'success-dark': string
    'success-medium': string
    'success-light': string

    'error-dark': string
    'error-medium': string
    'error-light': string

    'warning-dark': string
    'warning-medium': string
    'warning-light': string

    'info-dark': string
    'info-medium': string
    'info-light': string
  }

  spacing: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl', string>
  borderRadius: Record<
    'none' | 'round' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    string
  >
  shadows: Record<'none' | 'xs' | 'sm' | 'md' | 'lg', string>
  transitions: Record<'fast' | 'normal' | 'slow', string>
  gradients: Record<'authBG', string>
}
