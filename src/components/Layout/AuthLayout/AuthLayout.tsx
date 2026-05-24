import { LogoMain } from '@/assets/svgs'
import { RouteScrollHandler } from '@/components/Utilities'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import {
  AuthBox,
  AuthLayoutContainer,
  AuthLayoutContent,
  AuthLayoutWrap
} from './AuthLayout.style'

const AuthLayout = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <AuthLayoutWrap>
      <AuthLayoutContent>
        <AuthLayoutContainer>
          <AuthBox>
            <LogoMain />
            <RouteScrollHandler targetRef={contentRef} />
            <div ref={contentRef}>
              <Outlet />
            </div>
          </AuthBox>
        </AuthLayoutContainer>
      </AuthLayoutContent>
    </AuthLayoutWrap>
  )
}

export default AuthLayout
