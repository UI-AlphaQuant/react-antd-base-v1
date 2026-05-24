import { H1 } from '@/components/Utilities'
import { media } from '@/theme/styles/breakpoints'
import { fixedWidth, flex } from '@/theme/styles/sharedStyles'
import { Layout } from 'antd'
import styled from 'styled-components'

const { Content } = Layout

export const AuthLayoutWrap = styled(Layout)`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  overflow: hidden;
  background-image: ${({ theme }) => theme.gradients.authBG};
`

export const AuthLayoutContent = styled(Content)`
  display: flex;
  width: 100%;
  padding: 4rem 24px;
  position: relative;
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
`

export const AuthLayoutContainer = styled.div`
  ${flex('column', '24px', 'center', 'center')};
  width: 100%;
`

export const AuthBox = styled.div`
  background: ${({ theme }) => theme.colors.white};
  ${fixedWidth('420px')}
  padding: 48px;
  border-radius: 22px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);

  // Mobile Version
  ${media.below('md')} {
    padding: 40px 24px;
  }

  .logo {
    display: block;
    height: 60px;
    margin-bottom: 36px;
  }
`

export const AuthTitle = styled(H1)`
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-300']};
  padding-bottom: 16px;
  width: 100%;

  &.ant-typography {
    text-align: center;
    font-weight: 700;
  }
`
