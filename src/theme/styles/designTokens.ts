// Shared theme common values
export const designTokens = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '40px',
    xxxl: '48px'
  },

  borderRadius: {
    none: '0px',
    round: '50%',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px'
  },

  shadows: {
    none: 'none',
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)', // Small UI elements
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)', // Buttons, Small cards
    md: '0 4px 6px rgba(0, 0, 0, 0.1)', // Cards
    lg: '0 10px 15px rgba(0, 0, 0, 0.15)' // Modals
  },

  transitions: {
    fast: 'all 0.2s ease-in-out',
    normal: 'all 0.3s ease-in-out',
    slow: 'all 0.5s ease-in-out'
  },

  gradients: {
    authBG: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }
}
