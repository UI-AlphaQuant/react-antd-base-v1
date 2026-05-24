import { designTokens } from './styles/designTokens'
import { mainDarkColors, mainLightColors } from './styles/colors'
import { AppTheme, ThemeMode } from './types'

export const lightTheme: AppTheme = {
  mode: 'light',
  colors: mainLightColors,
  ...designTokens
}

export const darkTheme: AppTheme = {
  mode: 'dark',
  colors: mainDarkColors,
  ...designTokens
}

export const getTheme = (mode: ThemeMode): AppTheme =>
  mode === 'light' ? lightTheme : darkTheme

export type { AppTheme, ThemeMode }
