import React, { ReactNode } from 'react'
import { Form } from 'antd'
import type { FormItemProps } from 'antd'
import type { NamePath } from 'antd/es/form/interface'
import { FloatingFieldStyle } from './FloatingField.style'

type FloatingFieldProps = FormItemProps & {
  name: NamePath
  children: ReactNode
  className?: string
  mb?: number
}

const isValueFilled = (value: unknown): boolean => {
  if (Array.isArray(value)) return value.length > 0
  if (value === 0) return true
  if (typeof value === 'object' && value !== null) return true
  return Boolean(value)
}

const FloatingField: React.FC<FloatingFieldProps> = ({
  name,
  children,
  className = '',
  mb,
  ...rest
}) => {
  const value = Form.useWatch(name)
  const filled = isValueFilled(value)

  return (
    <FloatingFieldStyle
      name={name}
      className={`${className} ${filled ? 'is-filled' : ''}`}
      mb={mb}
      {...rest}
    >
      {children}
    </FloatingFieldStyle>
  )
}

export default FloatingField
