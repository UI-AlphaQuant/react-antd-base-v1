import { Statistic as AntdStatistic } from 'antd'
import styled from 'styled-components'

export const Statistic = styled(AntdStatistic)`
  // Skeleton loading
  .ant-skeleton {
    padding-top: 8px;

    .ant-skeleton-title {
      margin: 0;
    }
  }
`
