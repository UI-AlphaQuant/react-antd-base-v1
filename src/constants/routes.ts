export const ROUTES = {
  AUTH: {
    LOGIN: '/login',
    FORGOT_PASSWORD: '/forgot-password'
  },

  APP: {
    DASHBOARD: '/',
    USERLIST: '/users'
  },

  COMMON: {
    NOT_FOUND: '/404'
  }
} as const

export type AppRoute =
  (typeof ROUTES)[keyof typeof ROUTES][keyof (typeof ROUTES)[keyof typeof ROUTES]]

// Usage: <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
