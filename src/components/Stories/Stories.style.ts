import { flex } from '@/theme/styles/sharedStyles'
import { Flex } from 'antd'
import styled from 'styled-components'
import { H4 } from '../Utilities'

export const StorySection = styled(Flex)`
  ${flex('column', '24px', undefined, 'space-between')};
`

export const StorySubTitle = styled(H4).attrs({
  weight: 600
})`
  &.ant-typography {
    width: 100%;
    text-align: center;
    padding: 8px;
    margin: 0;
    border-radius: 4px;
    background: rgb(35, 20, 0);
    color: #ffd6a0;
    border: 1px solid #745731;
    box-shadow: 0 2px 16px rgba(255, 255, 255, 0.16);
  }
`
