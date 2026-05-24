import { Typography as AntTypography } from 'antd'
import styled, { css } from 'styled-components'

// ====== Types ======
export type TextColor = 'muted' | 'dark' | 'primary'
export type FontWeight = 300 | 400 | 500 | 600 | 700 | 800

interface TypographyProps {
  color?: TextColor
  weight?: FontWeight
  mb?: number
  display?: 'block' | 'inline-block'
}

// ====== Color & Weight Maps ======
const WeightMap: Record<FontWeight, number> = {
  300: 300,
  400: 400,
  500: 500,
  600: 600,
  700: 700,
  800: 800
}

// ====== Base Typography CSS ======
const TypographyBase = css<TypographyProps>`
  &.ant-typography {
    color: ${({ color, theme }) =>
      color === 'primary'
        ? theme.colors['primary-500']
        : color === 'dark'
          ? theme.colors['gray-600']
          : color === 'muted'
            ? theme.colors['gray-400']
            : 'inherit'};
    font-weight: ${({ weight }) => (weight ? WeightMap[weight] : 400)};
    margin-bottom: ${({ mb }) => (mb !== undefined ? `${mb}px` : '0')};
    display: ${({ display }) => display || 'block'};
    margin-top: 0;
  }
`

// ====== Headings using Ant Typography.Title ======
export const H1 = styled(AntTypography.Title).attrs({
  level: 1
})<TypographyProps>`
  ${TypographyBase}
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
`

export const H2 = styled(AntTypography.Title).attrs({
  level: 2
})<TypographyProps>`
  ${TypographyBase}
  font-size: 28px;
  line-height: 36px;
  font-weight: 600;
`

export const H3 = styled(AntTypography.Title).attrs({
  level: 3
})<TypographyProps>`
  ${TypographyBase}
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
`

export const H4 = styled(AntTypography.Title).attrs({
  level: 4
})<TypographyProps>`
  ${TypographyBase}
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
`

export const H5 = styled(AntTypography.Title).attrs({
  level: 5
})<TypographyProps>`
  ${TypographyBase}
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`

// ====== Text Components using Ant Typography.Text ======
export const TextXL = styled(AntTypography.Text)<TypographyProps>`
  ${TypographyBase}
  font-size: 18px;
  line-height: 26px;
`

export const TextL = styled(AntTypography.Text)<TypographyProps>`
  ${TypographyBase}
  font-size: 16px;
  line-height: 24px;
`

export const TextM = styled(AntTypography.Text)<TypographyProps>`
  ${TypographyBase}
  font-size: 14px;
  line-height: 20px;
`

export const TextS = styled(AntTypography.Text)<TypographyProps>`
  ${TypographyBase}
  font-size: 12px;
  line-height: 18px;
`

export const TextXS = styled(AntTypography.Text)<TypographyProps>`
  ${TypographyBase}
  font-size: 10px;
  line-height: 16px;
`
