import { FloatButton } from '@/components/Antd'
import { IconCaretUpFilled } from '@tabler/icons-react'
import { RefObject, useEffect, useState } from 'react'

interface ScrollTopButtonProps<T extends HTMLElement> {
  targetRef: RefObject<T | null>
  showAfter?: number
}

const ScrollTopButton = <T extends HTMLElement>({
  targetRef,
  showAfter = 50
}: ScrollTopButtonProps<T>) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const container = targetRef.current
    if (!container) return
    const handleScroll = () => {
      setVisible(container.scrollTop > showAfter)
    }
    container.addEventListener('scroll', handleScroll)
    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [targetRef, showAfter])

  const handleClick = () => {
    targetRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!visible) return null

  return (
    <FloatButton
      type="primary"
      icon={<IconCaretUpFilled />}
      onClick={handleClick}
    />
  )
}

export default ScrollTopButton
