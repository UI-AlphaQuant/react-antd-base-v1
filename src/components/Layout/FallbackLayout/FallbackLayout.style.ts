import { flex } from '@/theme/styles/sharedStyles'
import { Layout } from 'antd'
import styled from 'styled-components'

export const FallbackWrapper = styled(Layout)`
  ${flex('column', undefined, 'center', 'center')};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  background-color: ${({ theme }) => theme.colors['gray-100']};
`

export const FallbackInner = styled.div`
  ${flex('column', '20px', 'center', 'center')};
  width: 100%;
  padding: 2rem 24px;
  max-width: 1366px;
`
