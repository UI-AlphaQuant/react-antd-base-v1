import { FallbackInner, FallbackWrapper } from './FallbackLayout.style'
import { RouteScrollHandler } from '@/components/Utilities'
import { ReactNode, useRef } from 'react'

interface FallbackLayoutProps {
  children: ReactNode
}

const FallbackLayout = ({ children }: FallbackLayoutProps) => {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <FallbackWrapper>
      <RouteScrollHandler targetRef={contentRef} />
      <FallbackInner ref={contentRef}>{children}</FallbackInner>
    </FallbackWrapper>
  )
}

export default FallbackLayout
