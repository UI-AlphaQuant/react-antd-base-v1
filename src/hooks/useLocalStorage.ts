import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)

      if (!item) return initialValue

      return JSON.parse(item)
    } catch {
      return initialValue
    }
  })

  const setStoredValue = (val: T) => {
    setValue(val)

    try {
      localStorage.setItem(key, JSON.stringify(val))
    } catch {
      console.error('Failed to save to localStorage')
    }
  }

  return [value, setStoredValue] as const
}
