import { Button as AntdButton } from 'antd'
import styled from 'styled-components'

export const Button = styled(AntdButton)`
  &.ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;
    gap: 16px;

    // ===== Primary Button =====
    &.ant-btn-primary:not(.ant-btn-dangerous) {
      color: ${({ theme }) => theme.colors.white};
      border-color: ${({ theme }) => theme.colors['primary-500']};
      background: ${({ theme }) => theme.colors['primary-500']};

      &:disabled {
      }

      &:not(:disabled):not(.ant-btn-disabled):hover,
      &:not(:disabled):not(.ant-btn-disabled):active {
      }
    }

    // ===== Default Button (Secondary) =====
    &.ant-btn-default {
      color: ${({ theme }) => theme.colors.white};
      border-color: ${({ theme }) => theme.colors['secondary-500']};
      background: ${({ theme }) => theme.colors['secondary-500']};

      &:disabled {
      }

      &:not(:disabled):not(.ant-btn-disabled):hover,
      &:not(:disabled):not(.ant-btn-disabled):active {
      }
    }

    // ===== Text Button =====
    &.ant-btn-text {
    }

    // ===== Link Button =====
    &.ant-btn-link {
    }

    // ===== Icon inside Button =====
    & .ant-btn-icon {
      width: 24px;
      height: 24px;
      font-size: 24px;

      svg {
        margin: auto;
        display: block;
      }
    }

    // ===== User Accessibility =====
    &:focus-visible {
      outline: 2px solid;
    }
  }
`
