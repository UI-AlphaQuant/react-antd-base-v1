export const VALIDATION_LIMITS = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 20,
  MAX_NAME_LENGTH: 50,
  MAX_EMAIL_LENGTH: 100,
  MAX_FILE_SIZE_MB: 5
} as const

export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[0-9]{10}$/,
  ONLY_NUMBERS: /^[0-9]+$/,
  ONLY_ALPHABETS: /^[A-Za-z ]+$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/
} as const

export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid 10 digit phone number',
  ONLY_NUMBERS: 'Only numbers are allowed',
  ONLY_ALPHABETS: 'Only alphabets are allowed',
  PASSWORD_WEAK: 'Password must contain letters and numbers',
  FILE_TOO_LARGE: `File size should not exceed ${VALIDATION_LIMITS.MAX_FILE_SIZE_MB}MB`
} as const
