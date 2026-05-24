import { ArwDown } from '@/assets/svgs'
import {
  InputStyle,
  InputStyleDisabled,
  InputStyleError,
  InputStyleFocused,
  InputStyleHover,
  SingleLineInput
} from '@/theme/styles/sharedStyles'
import { Select as AntdSelect, SelectProps } from 'antd'

import styled from 'styled-components'

const SelectStyled = styled(AntdSelect)`
  width: 100%;

  // ===== Base Select =====
  &.ant-select {
    // ===== Outlined Variant =====
    &.ant-select-outlined {
      ${InputStyle};
      ${SingleLineInput};
      padding: 0 14px;

      .ant-select-content {
        .ant-select-input {
        }

        .ant-select-placeholder {
        }

        &.ant-select-content-has-value {
        }
      }

      .ant-select-suffix {
        .anticon {
          pointer-events: none;
        }
      }

      // Hover state
      &:not(.ant-select-disabled):hover {
        ${InputStyleHover};
      }

      // Focused / Open State
      &&.ant-select-focused:not(.ant-select-status-error),
      &&.ant-select-open:not(.ant-select-status-error) {
        ${InputStyleFocused};
      }

      // Disabled State
      &.ant-select-disabled {
        ${InputStyleDisabled};
      }

      // Error State
      &.ant-select-status-error:not(.ant-select-disabled) {
        ${InputStyleError};

        &.ant-select-focused,
        &.ant-select-open {
          ${InputStyleError};
        }
      }
    }

    // ===== Sizes =====
    &.ant-select-md {
    }

    &.ant-select-sm {
      height: 36px;
    }

    &.ant-select-lg {
      height: 60px;
    }
  }

  // ===== Multiple Select =====
  &.ant-select-multiple {
    min-height: 50px;
    height: auto;
    padding-top: 5px;
    padding-bottom: 5px;

    .ant-select-content {
      .ant-select-content-item {
        .ant-select-placeholder {
          line-height: 38px;
        }

        & .ant-select-selection-item {
          margin-block-start: 2px;
          margin-block-end: 2px;
          margin-inline-end: 4px;
          height: 34px;
          line-height: 32px;

          &-content {
            margin-inline-end: 6px;
          }

          &-remove {
          }
        }
      }
    }
  }
`

export function Select({ suffixIcon = <ArwDown />, ...props }: SelectProps) {
  return <SelectStyled {...props} suffixIcon={suffixIcon} />
}

export default Select
