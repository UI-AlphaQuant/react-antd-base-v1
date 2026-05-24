import { RefObject, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface RouteScrollHandlerProps<T extends HTMLElement> {
  targetRef: RefObject<T | null>
  smooth?: boolean
}

const RouteScrollHandler = <T extends HTMLElement>({
  targetRef,
  smooth = false
}: RouteScrollHandlerProps<T>) => {
  const { pathname } = useLocation()

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? 'smooth' : 'auto'
      })
    }
  }, [pathname, targetRef, smooth])

  return null
}

export default RouteScrollHandler
