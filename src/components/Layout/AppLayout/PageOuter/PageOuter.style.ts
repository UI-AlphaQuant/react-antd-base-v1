import { H2 } from '@/components/Utilities'
import { flex } from '@/theme/styles/sharedStyles'
import styled from 'styled-components'

export const PageOuterWrap = styled.div`
  ${flex('column', '16px')};
  padding: 20px 16px;
  height: 100%;
`

export const PageInner = styled.div`
  ${flex('column', '0')};
  height: 100%;
  flex: 0 1 auto;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
`

export const PageHeadingWrap = styled(H2)``
