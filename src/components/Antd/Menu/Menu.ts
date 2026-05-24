import { media } from '@/theme/styles/breakpoints'
import { flex } from '@/theme/styles/sharedStyles'
import { Menu as AntdMenu } from 'antd'
import styled from 'styled-components'

export const Menu = styled(AntdMenu)`
  // ===== Sidebar Menu =====
  &.sider-menu {
    &.ant-menu-inline {
      border: none;
    }

    // Items & Sub Items
    .ant-menu-item,
    .ant-menu-submenu .ant-menu-submenu-title {
      ${flex(undefined, undefined, 'center')};
      margin: 0;
      width: 100%;
      border-radius: 0;
      height: 40px;
      font-size: 14px;

      &:hover {
        background-color: ${({ theme }) => theme.colors['gray-100']};
      }

      &.ant-menu-item-selected {
        background-color: ${({ theme }) => theme.colors['primary-500']};
        color: ${({ theme }) => theme.colors.white};
      }

      .ant-menu-title-content {
        height: 100%;
        transition: none;
        line-height: 40px;
      }

      // Mobile Version
      ${media.below('lg')} {
        padding-inline: 20px;
        .ant-menu-title-content {
          opacity: 1;
        }
      }
    }

    // Desktop Collapse Version
    ${media.above('lg')} {
      &.ant-menu-inline-collapsed {
        .ant-menu-item,
        .ant-menu-submenu .ant-menu-submenu-title {
          .ant-menu-title-content {
            opacity: 0;
            width: 0;
            margin: 0;
          }
        }
      }
    }
  }
`
