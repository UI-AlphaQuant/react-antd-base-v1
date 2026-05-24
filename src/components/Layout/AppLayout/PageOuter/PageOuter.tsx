import { ReactNode } from 'react'
import { PageInner, PageOuterWrap } from './PageOuter.style'
import PageHeading from './PageHeading'

interface PageOuterProps {
  id?: string
  children: ReactNode
  heading?: ReactNode
}

const PageOuter = ({ id, children, heading }: PageOuterProps) => {
  return (
    <PageOuterWrap id={id}>
      {heading && <PageHeading heading={heading} />}

      <PageInner className="page-inner">{children}</PageInner>
    </PageOuterWrap>
  )
}

export default PageOuter
