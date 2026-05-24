import { Tabs as AntdTabs } from 'antd'
import styled from 'styled-components'

export const Tabs = styled(AntdTabs)`
  // ===== Tab Items =====
  .ant-tabs-nav {
    .ant-tabs-nav-wrap {
      .ant-tabs-tab {
        .ant-tabs-tab-btn {
          // ===== User Accessibility =====
          &:focus-visible {
            outline: 2px solid;
          }
        }

        // Active State
        &.ant-tabs-tab-active {
        }

        // Disabled State
        &.ant-tabs-tab-disabled {
        }
      }

      // Active tab Floating Bar
      .ant-tabs-ink-bar {
      }
    }
  }

  // ===== Tab Content =====
  .ant-tabs-content-holder {
    .ant-tabs-content {
      .ant-tabs-tabpane {
      }
    }
  }

  // ===== Tab Card =====
  &.ant-tabs-card {
  }

  // ===== Tab Left Panel =====
  &.ant-tabs-left {
  }
`
