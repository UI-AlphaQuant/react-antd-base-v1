import { Checkbox as AntdCheckbox } from 'antd'
import styled from 'styled-components'

export const Checkbox = styled(AntdCheckbox)`
  color: inherit;

  // ===== Control =====
  .ant-checkbox {
    .ant-checkbox-inner {
      &:after {
      }
    }

    &.ant-checkbox-checked {
    }

    // ===== User Accessibility =====
    .ant-checkbox-input {
      &:focus-visible {
        & ~ span {
          outline: 2px solid;
        }
      }
    }
  }

  & > span:not(.ant-checkbox) {
  }

  // ===== Label =====
  .ant-checkbox-label {
  }

  // ===== Checked State =====
  &.ant-checkbox-wrapper-checked {
  }

  // ===== Disabled State =====
  &.ant-checkbox-wrapper-disabled {
  }
`
