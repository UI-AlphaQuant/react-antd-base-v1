export const MESSAGE_TYPE = {
  ERROR: 'error',
  SUCCESS: 'success',
  WARNING: 'warning',
  INFO: 'info'
} as const

export type MessageType = (typeof MESSAGE_TYPE)[keyof typeof MESSAGE_TYPE]

export const ERROR_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  NETWORK_ERROR: 'Network error. Please try again',
  SOMETHING_WENT_WRONG: 'Something went wrong'
} as const

export const SUCCESS_MESSAGES = {
  SAVED: 'Saved successfully',
  UPDATED: 'Updated successfully',
  DELETED: 'Deleted successfully'
} as const

export const WARNING_MESSAGES = {
  UNSAVED_CHANGES: 'You have unsaved changes'
} as const

export const INFO_MESSAGES = {
  NO_DATA: 'No data available'
} as const
