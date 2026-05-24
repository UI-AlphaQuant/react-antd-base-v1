import styled, { css, keyframes } from 'styled-components'

// ===== Flex Helper =====
export const flex = (
  direction?: string,
  gap?: string,
  align?: string,
  justify?: string,
  wrap?: string
) => css`
  display: flex;
  ${direction ? `flex-direction: ${direction};` : ''}
  ${gap ? `gap: ${gap};` : ''}
  ${align ? `align-items: ${align};` : ''}
  ${justify ? `justify-content: ${justify};` : ''}
  ${wrap ? `flex-wrap: ${wrap};` : ''}
`

// ===== Fixed Width (Responsive) =====
export const fixedWidth = (width?: number | string) => css`
  ${width ? `width: ${typeof width === 'number' ? `${width}px` : width};` : ''}
  max-width: 100%;
`

// ===== Ellipsis =====
export const ellipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

// ===== Loader & Spin Animation =====
export const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

// ===== Form Elements =====
export const InputStyle = css`
  font-size: 14px;
  background: ${({ theme }) => theme.colors['gray-50']};
  border-color: ${({ theme }) => theme.colors['gray-300']};
  color: ${({ theme }) => theme.colors['gray-600']};
`

export const SingleLineInput = css`
  height: 50px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 8px;
  box-shadow: none;
`

export const InputStyleHover = css`
  border-color: ${({ theme }) => theme.colors['gray-600']};
  background-color: ${({ theme }) => theme.colors.white};
`

export const InputStyleFocused = css`
  border-color: ${({ theme }) => theme.colors['primary-500']};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: none;
`

export const InputStyleError = css`
  border-color: ${({ theme }) => theme.colors['error-dark']};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: none;
`

export const InputStyleDisabled = css`
  border-color: ${({ theme }) => theme.colors['gray-300']};
  background-color: ${({ theme }) => theme.colors['gray-100']};
  color: ${({ theme }) => theme.colors['gray-400']};
`

// ===== Div Button =====
export const DivButton = styled.button`
  width: 100%;
  display: block;
  box-shadow: none;
  cursor: pointer;

  // User Accessibility
  &:focus-visible {
    outline: 2px solid;
  }
`
