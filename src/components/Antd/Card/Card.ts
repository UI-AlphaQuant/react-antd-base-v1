import { Card as AntdCard } from 'antd'
import styled, { css } from 'styled-components'
import type { CardProps as AntdCardProps } from 'antd'

export type cardType = 'default' | 'form' | 'list' | 'kpi'

export interface CardProps extends AntdCardProps {
  cardType?: cardType
}

const cardStyles = {
  // ===== Default Card =====
  default: css`
    .ant-card-head {
      min-height: 30px;
      font-size: 12px;
      padding: 8px;
    }
    .ant-card-body {
      padding: 0;
    }
  `,

  // ===== Form Card =====
  form: css`
    .ant-card-head {
      min-height: 36px;
      font-size: 14px;
      padding: 12px;
    }
    .ant-card-body {
      padding: 12px;
    }
  `,

  // ===== List Card =====
  list: css`
    .ant-card-head {
      min-height: 40px;
      font-size: 16px;
      padding: 14px;
    }
    .ant-card-body {
      padding: 14px;
    }
  `,

  // ===== KPI Card =====
  kpi: css`
    .ant-card-head {
      min-height: 50px;
      font-size: 18px;
      padding: 16px;
    }
    .ant-card-body {
      padding: 16px;
    }
  `
}

export const Card = styled(AntdCard).withConfig({
  shouldForwardProp: (prop) => prop !== 'cardType'
})<CardProps>`
  ${({ cardType = 'default' }) => cardStyles[cardType]}
`
