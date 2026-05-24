import { flex } from '@/theme/styles/sharedStyles'
import { Card, Layout } from 'antd'
import styled from 'styled-components'

export const CenteredLayout = styled(Layout)`
  ${flex('row', '16px', 'center', 'center')};
  padding: 20px;
  min-height: 100vh;
  overflow: auto;
`

export const BoundryCard = styled(Card)`
  max-width: 600px;
  width: 100%;

  .ant-card-body {
    padding: 40px 24px;
  }

  h2.ant-typography {
    text-align: center;
    font-weight: 700;
    margin-bottom: 13px;
  }
`

export const ErrorMessage = styled.pre`
  max-height: 300px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  text-align: center;
`
