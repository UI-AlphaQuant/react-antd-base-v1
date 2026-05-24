import { REGEX, VALIDATION_LIMITS } from '@/constants/validation'

export const isEmailValid = (email: string) => REGEX.EMAIL.test(email)

export const isPhoneValid = (phone: string) => REGEX.PHONE.test(phone)

export const isPasswordValid = (password: string) =>
  REGEX.PASSWORD.test(password)

export const isWithinMaxLength = (value: string, max: number) =>
  value.length <= max

export const isWithinMinLength = (value: string, min: number) =>
  value.length >= min

export const isFileSizeValid = (sizeInMB: number) =>
  sizeInMB <= VALIDATION_LIMITS.MAX_FILE_SIZE_MB

// Usage: showMessage('error', VALIDATION_MESSAGES.INVALID_EMAIL);
