# React.FC wrapper (used when custom props or logic required)

## Component File

```tsx
import React from 'react'
import styled from 'styled-components'
import { Button as AntdButton } from 'antd'
import type { ButtonProps as AntdButtonProps } from 'antd'

type BtnType = 'primary' | 'secondary' | 'danger'

export interface ButtonProps extends AntdButtonProps {
  btnType?: BtnType
}

interface StyledButtonProps {
  btnType?: BtnType
}

const StyledButton = styled(AntdButton)<StyledButtonProps>`
  &.ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors['primary-500']};
  }
`

const Button: React.FC<ButtonProps> = ({ children, btnType, ...rest }) => {
  return (
    <StyledButton {...rest} btnType={btnType}>
      {children}
    </StyledButton>
  )
}

export default Button
```

## Index file for export

```tsx
export { default as Button } from './Button/Button'
```

## FloatingInput Component

```tsx
import { Form, type FormItemProps } from 'antd'
import { ReactElement } from 'react'
import { FloatingInputStyle } from './FloatingInput.style'

type NamePath = FormItemProps['name']

interface FloatingInputProps extends Omit<
  FormItemProps,
  'label' | 'required' | 'name'
> {
  name: NamePath
  children: ReactElement
  label: string
  required?: boolean
  mb?: number
  ghost?: boolean
}

export function FloatingInput({
  children,
  label,
  required = false,
  className,
  mb,
  ghost = false,
  name,
  ...formItemProps
}: FloatingInputProps) {
  const form = Form.useFormInstance()
  const value = Form.useWatch(name, form)

  const isFilled = (() => {
    if (value === undefined || value === null) return false
    if (Array.isArray(value)) return value.length > 0
    if (typeof value === 'object') {
      return Boolean((value as any).value)
    }
    return value !== ''
  })()

  return (
    <FloatingInputStyle
      {...formItemProps}
      name={name}
      required={required}
      $mb={mb}
      className={`float-input ${ghost ? 'ghost' : ''} ${
        className || ''
      } ${isFilled ? 'filled' : ''}`}
    >
      <div className="float-input-wrap">
        {children}

        <label className="float-input-label">
          {label}
          {required && <span className="float-input-required">*</span>}
        </label>
      </div>
    </FloatingInputStyle>
  )
}

export default FloatingInput
```
