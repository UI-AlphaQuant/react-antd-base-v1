import { flex } from '@/theme/styles/sharedStyles'
import { Switch as AntdSwitch } from 'antd'
import styled from 'styled-components'

export const Switch = styled(AntdSwitch)`
  .ant-switch-handle {
    &:before {
    }
  }

  .ant-switch-inner {
    .ant-switch-inner-checked {
      ${flex('row', '16px', 'center')};
    }
    .ant-switch-inner-unchecked {
      ${flex('row', '16px', 'center')};
    }
  }

  // ===== Checked State =====
  &.ant-switch-checked {
  }

  // ===== Disabled State =====
  &.ant-switch-disabled {
  }

  // ===== Small Size =====
  &.ant-switch-small {
  }

  // ===== User Accessibility =====
  &:focus-visible {
    outline: 2px solid;
  }
`
