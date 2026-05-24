import { media } from '@/theme/styles/breakpoints'
import { flex } from '@/theme/styles/sharedStyles'
import { Layout } from 'antd'
import styled from 'styled-components'

const { Sider } = Layout

export const SiderWrap = styled(Sider)`
  border-right: 1px solid ${({ theme }) => theme.colors['gray-200']};

  .ant-layout-sider-children {
    ${flex('column')};
  }

  // Mobile Version
  ${media.below('lg')} {
    position: fixed;
    z-index: 99;
    height: 100%;
    left: -320px;

    &.ant-layout-sider-collapsed {
      width: 220px !important;
      flex: 0 0 220px !important;
      max-width: 220px !important;
      min-width: 220px !important;
    }
  }
`

export const SiderHeader = styled.div`
  ${flex('column', '0', 'center', 'center')};
  padding: 0 12px;
  height: 50px;
  flex: 0 0 50px;

  svg {
    display: block;
    height: 36px;
  }
`

export const SiderContent = styled.div`
  position: relative;
  flex: 1 1 auto;
  overflow: auto;
`

export const SiderBackdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  z-index: 9;
`
