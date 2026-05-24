import { Card } from '@/components'
import { fixedWidth, flex } from '@/theme/styles/sharedStyles'
import styled from 'styled-components'

export const ErrorBox = styled(Card)`
  ${fixedWidth('400px')}
  padding: 30px;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  .ant-card-body {
    ${flex('column', '24px', 'center', 'center')};
    text-align: center;
  }

  h1 {
    font-size: 50px;
  }
`

export const ServerErrorBox = styled(Card)`
  ${fixedWidth('1300px')}
  padding: 30px;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  .ant-card-body {
    ${flex('column', '24px', 'center', 'center')};
    text-align: center;
  }

  h1 {
    font-size: 50px;
  }
`

export const ErrorStackList = styled.ul`
  width: 100%;
  max-height: 400px;
  overflow: auto;
  padding: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Fira Code', monospace;
  list-style: none;
  font-size: 14px;
`

export const ErrorStackItem = styled.li`
  white-space: pre-wrap;
  word-break: break-word;
  text-align: left;
  margin-bottom: 3px;
`
