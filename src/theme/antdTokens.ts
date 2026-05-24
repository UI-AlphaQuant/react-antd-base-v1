import { ThemeConfig } from 'antd'
import { ThemeMode } from './types'

export const getAntdTheme = (mode: ThemeMode): ThemeConfig => {
  const isLight = mode === 'light'

  return {
    token: {
      // Colors
      colorPrimary: isLight ? '#0d6efd' : '#3b82f6',
      colorSuccess: isLight ? '#10b981' : '#34d399',
      colorWarning: isLight ? '#f59e0b' : '#fbbf24',
      colorError: isLight ? '#ef4444' : '#f87171',
      colorInfo: isLight ? '#0ea5e9' : '#38bdf8',

      // Background & Borders
      colorBgBase: isLight ? '#ffffff' : '#141414',
      colorBgContainer: isLight ? '#ffffff' : '#1f1f1f',
      colorBorder: isLight ? '#d9d9d9' : '#434343',

      // Text colors
      colorTextBase: isLight ? '#000000d9' : '#ffffffd9',
      colorText: isLight ? '#000000d9' : '#ffffffd9',
      colorTextSecondary: isLight ? '#00000073' : '#ffffff73',

      // Links
      colorLink: isLight ? '#0C78FF' : '#3b82f6',
      colorLinkHover: isLight ? '#096dd9' : '#2563eb',
      colorLinkActive: isLight ? '#0050b3' : '#1d4ed8',

      // Typography
      fontFamily: "'Inter', sans-serif",
      lineHeight: 1.5,
      fontSize: 14,
      fontWeightStrong: 600,
      fontSizeHeading1: 24,
      fontSizeHeading2: 20,
      fontSizeHeading3: 18,
      fontSizeHeading4: 16,
      fontSizeHeading5: 14,

      // Border & Radius
      borderRadius: 6,
      borderRadiusSM: 4,
      borderRadiusLG: 8,

      // Spacing
      controlHeight: 38,
      controlHeightLG: 46,
      controlHeightSM: 30,
      paddingSM: 8,
      padding: 12,
      paddingLG: 16,

      // Shadows
      boxShadow: isLight
        ? '0 2px 8px rgba(0,0,0,0.15)'
        : '0 2px 8px rgba(0,0,0,0.6)',
      boxShadowSecondary: isLight
        ? '0 1px 4px rgba(0,0,0,0.12)'
        : '0 1px 4px rgba(0,0,0,0.5)',

      // Form Items
      colorTextPlaceholder: isLight ? '#8c8c8c' : '#bfbfbf',
      colorTextDisabled: isLight ? '#8c8c8c' : '#bfbfbf'
    },

    components: {
      Typography: {
        titleMarginBottom: 0,
        titleMarginTop: 0,
        marginLG: 0,
        marginSM: 0
      },
      Button: {
        borderRadius: 6,
        controlHeight: 36,
        paddingInline: 16
      },
      Input: {
        controlHeight: 36,
        borderRadius: 6
      },
      Card: {
        borderRadius: 6,
        padding: 16
      },
      Select: {
        optionHeight: 26,
        optionLineHeight: '26px',
        optionSelectedBg: isLight ? '#fbfbfb' : '#262626'
      },
      Radio: { dotSize: 8 },
      Modal: {
        borderRadius: 6
      },
      Layout: {
        siderBg: isLight ? '#ffffff' : '#141414',
        headerBg: isLight ? '#ffffff' : '#141414',
        bodyBg: isLight ? '#ffffff' : '#141414'
      },
      Table: {
        headerBg: isLight ? '#fbfbfb' : '#1f1f1f',
        borderColor: isLight ? '#cccccc' : '#434343',
        headerColor: isLight ? '#666666' : '#bbbbbb',
        colorText: isLight ? '#777777' : '#dddddd',
        rowHoverBg: isLight ? '#fbfbfb' : '#262626',
        cellFontSize: 14,
        borderRadius: 0,
        headerBorderRadius: 0,
        cellPaddingBlock: 12,
        cellPaddingInline: 24
      },
      Tooltip: {
        controlHeight: 32
      }
    }
  }
}
