import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slice'

export const store = configureStore({
  reducer: {
    app: appReducer
  }
})

// Types for usage in components
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
