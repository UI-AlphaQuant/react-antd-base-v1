import {
  InputStyle,
  InputStyleDisabled,
  InputStyleError,
  InputStyleFocused,
  InputStyleHover,
  SingleLineInput
} from '@/theme/styles/sharedStyles'
import { TimePicker as AntdTimePicker } from 'antd'
import styled from 'styled-components'

export const TimePicker = styled(AntdTimePicker)`
  &.ant-picker-outlined {
    width: 100%;
    ${InputStyle};
    ${SingleLineInput};

    &:hover {
      ${InputStyleHover};
    }

    &.ant-picker-focused {
      ${InputStyleFocused};
    }

    // Disabled State
    &.ant-picker-disabled {
      ${InputStyleDisabled};
      &:hover {
        ${InputStyleDisabled};
      }
    }

    // Error State
    &.ant-picker-status-error:not(.ant-picker-disabled) {
      ${InputStyleError};
    }
  }
`
