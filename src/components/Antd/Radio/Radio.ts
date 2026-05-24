import { Radio as AntdRadio } from 'antd'
import styled from 'styled-components'

export const Radio = styled(AntdRadio)`
  color: inherit;

  // ===== Control =====
  .ant-radio {
    .ant-radio-inner {
      &:after {
      }
    }

    &.ant-radio-checked {
    }

    // ===== User Accessibility =====
    .ant-radio-input {
      &:focus-visible {
        & ~ span {
          outline: 2px solid;
        }
      }
    }
  }

  & > span:not(.ant-radio) {
  }

  // ===== Label =====
  .ant-radio-label {
  }

  // ===== Radio State =====
  &.ant-radio-wrapper-checked {
  }

  // ===== Disabled State =====
  &.ant-radio-wrapper-disabled {
  }
`
