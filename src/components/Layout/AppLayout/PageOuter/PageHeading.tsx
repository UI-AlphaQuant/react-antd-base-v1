import { ReactNode } from 'react'
import { PageHeadingWrap } from './PageOuter.style'

interface PageHeadingProps {
  heading: ReactNode
}

export function PageHeading({ heading }: PageHeadingProps) {
  return (
    <PageHeadingWrap weight={700} color="dark">
      {heading}
    </PageHeadingWrap>
  )
}

export default PageHeading
