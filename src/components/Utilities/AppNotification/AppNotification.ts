import { notification } from 'antd'
import type { NotificationPlacement } from 'antd/es/notification/interface'

// Control global values
const DEFAULT_PLACEMENT: NotificationPlacement = 'topRight'
const DEFAULT_DURATION = 4

interface Options {
  message: string
  description?: string
  placement?: NotificationPlacement
  duration?: number
}

const show = (
  type: 'success' | 'error' | 'info' | 'warning',
  {
    placement = DEFAULT_PLACEMENT,
    duration = DEFAULT_DURATION,
    ...options
  }: Options
) =>
  notification[type]({
    ...options,
    placement,
    duration
  })

export const AppNotification = {
  success: (options: Options) => show('success', options),
  error: (options: Options) => show('error', options),
  info: (options: Options) => show('info', options),
  warning: (options: Options) => show('warning', options)
}
