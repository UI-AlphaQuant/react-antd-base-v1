import React, { createContext, ReactNode } from 'react'
import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'styled-components'
import { getAntdTheme } from './antdTokens'
import { ThemeMode, AppTheme } from './types'
import { DEFAULT_THEME, THEME_STORAGE_KEY } from '@/constants/storage'
import { getTheme } from './appTheme'
import { LoaderSVG } from '@/assets/svgs'
import { useLocalStorage } from '@/hooks'

interface ThemeContextProps {
  mode: ThemeMode
  toggleTheme: () => void
  setTheme: (mode: ThemeMode) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: DEFAULT_THEME,
  toggleTheme: () => {},
  setTheme: () => {}
})

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children
}) => {
  const [mode, setMode] = useLocalStorage<ThemeMode>(
    THEME_STORAGE_KEY,
    DEFAULT_THEME
  )

  const toggleTheme = () => setMode(mode === 'light' ? 'dark' : 'light')

  const theme: AppTheme = getTheme(mode)

  const spinIndicator = <LoaderSVG />

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setTheme: setMode }}>
      <ThemeProvider theme={theme}>
        <ConfigProvider
          theme={getAntdTheme(mode)}
          spin={{ indicator: spinIndicator }}
        >
          {children}
        </ConfigProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
