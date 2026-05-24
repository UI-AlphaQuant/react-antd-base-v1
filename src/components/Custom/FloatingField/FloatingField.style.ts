import { FormItem } from '@/components/Antd'
import { ellipsis } from '@/theme/styles/sharedStyles'
import styled, { css } from 'styled-components'

interface FloatingFieldStyleProps {
  mb?: number
}

const floatLabelActive = css`
  left: 14px;
  top: -8px;
  line-height: 18px;
  font-size: 14px;
  padding: 0 4px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.white};
`

export const FloatingFieldStyle = styled(FormItem)<FloatingFieldStyleProps>`
  position: relative;
  margin-bottom: ${({ mb = 30 }) => `${mb}px`};

  .ant-form-item-label {
    ${ellipsis}
    position: absolute;
    display: block;
    left: 14px;
    top: 0;
    z-index: 2;
    pointer-events: none;
    transition: all 0.1s cubic-bezier(0.65, 0.05, 0.36, 1);
    max-width: 90%;
    font-size: 14px;
    line-height: 50px;
    color: ${({ theme }) => theme.colors['gray-500']};
  }

  .ant-form-item-control {
    position: relative;
    z-index: 1;
  }

  // ===== Filled State =====
  &.is-filled,
  &:has(.ant-picker-focused) {
    .ant-form-item-label {
      ${floatLabelActive};
    }
  }

  // ===== Input Style Reset =====
  .ant-picker-input {
    input::placeholder {
      opacity: 0;
    }
  }

  &:has(textarea) {
    .ant-form-item-label {
      line-height: 36px;
    }
  }
`
