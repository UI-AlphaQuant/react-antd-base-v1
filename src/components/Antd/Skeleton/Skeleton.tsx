import { Skeleton as AntSkeleton, SkeletonProps } from 'antd'
import styled, { css } from 'styled-components'

export type SkeletonVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'small'

interface Props extends SkeletonProps {
  variant?: SkeletonVariant
  fullWidth?: boolean
}

const VariantStyles: Record<
  SkeletonVariant,
  { width: number | string; height: number }
> = {
  h1: { width: 250, height: 50 },
  h2: { width: 220, height: 40 },
  h3: { width: 200, height: 36 },
  h4: { width: 180, height: 30 },
  h5: { width: 160, height: 28 },
  p: { width: 350, height: 24 },
  small: { width: 150, height: 18 }
}

const BaseSkeleton = ({
  variant,
  fullWidth = false,
  title,
  paragraph,
  ...rest
}: Props) => {
  const style = variant ? VariantStyles[variant] : undefined

  return (
    <AntSkeleton
      active
      title={
        title !== undefined
          ? title
          : style
            ? { width: fullWidth ? '100%' : style.width }
            : undefined
      }
      paragraph={paragraph}
      {...rest}
    />
  )
}

const StyledSkeleton = styled(BaseSkeleton)<Props>`
  &.ant-skeleton {
    .ant-skeleton-section {
      ${({ variant }) =>
        variant &&
        css`
          .ant-skeleton-title {
            height: ${VariantStyles[variant].height}px;
            line-height: ${VariantStyles[variant].height}px;
          }
        `}

      width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
    }
  }
`

type SkeletonComponent = typeof StyledSkeleton & {
  Avatar: typeof AntSkeleton.Avatar
  Button: typeof AntSkeleton.Button
  Input: typeof AntSkeleton.Input
  Image: typeof AntSkeleton.Image
  Node: typeof AntSkeleton.Node
}

export const Skeleton = Object.assign(StyledSkeleton, {
  Avatar: AntSkeleton.Avatar,
  Button: AntSkeleton.Button,
  Input: AntSkeleton.Input,
  Image: AntSkeleton.Image,
  Node: AntSkeleton.Node
}) as SkeletonComponent
