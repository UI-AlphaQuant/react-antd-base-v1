import {
  InputStyle,
  InputStyleDisabled,
  InputStyleError,
  InputStyleFocused,
  InputStyleHover,
  SingleLineInput
} from '@/theme/styles/sharedStyles'
import { DatePicker as AntDatePicker } from 'antd'
import type { DatePickerProps } from 'antd'
import type { Dayjs } from 'dayjs'
import styled, { css } from 'styled-components'

const { RangePicker: AntRangePicker } = AntDatePicker

const baseStyle = css`
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

export const DatePicker = styled(AntDatePicker)<DatePickerProps<Dayjs>>`
  ${baseStyle};
`

export const RangePicker = styled(AntRangePicker)<DatePickerProps<Dayjs>>`
  ${baseStyle};
`
