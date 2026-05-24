import { Collapse as AntdCollapse } from 'antd'
import styled from 'styled-components'

export const Collapse = styled(AntdCollapse)`
  // ===== Default Collapse Item =====
  .ant-collapse-item {
    // Header
    .ant-collapse-header {
      .ant-collapse-title {
        order: 1;
      }

      .ant-collapse-expand-icon {
        order: 2;
      }

      // ===== User Accessibility =====
      &:focus-visible {
        outline: 2px solid;
      }
    }

    // Body
    .ant-collapse-panel {
      .ant-collapse-body {
      }
    }

    // Active State
    &.ant-collapse-item-active {
    }
  }

  // ===== Collapse Ghost State =====
  &.ant-collapse-ghost {
  }

  // ===== Collapse Borderless =====
  &.ant-collapse-borderless {
  }
`
