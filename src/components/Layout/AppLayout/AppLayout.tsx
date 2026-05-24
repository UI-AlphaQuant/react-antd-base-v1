import { SIDEBAR_STATE } from '@/constants/storage'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import {
  AppContainer,
  AppContent,
  AppContentWrap,
  AppLayoutWrap
} from './AppLayout.style'
import { SiderBackdrop } from '@/components/Layout/AppLayout/Sidebar/Sidebar.style'
import Sidebar from './Sidebar/Sidebar'
import AppHeader from './AppHeader/AppHeader'
import { RouteScrollHandler, ScrollTopButton } from '@/components/Utilities'
import { useLocalStorage } from '@/hooks'

const AppLayout = () => {
  const [collapsed, setCollapsed] = useLocalStorage<boolean>(
    SIDEBAR_STATE,
    false
  )

  const contentRef = useRef<HTMLDivElement>(null)

  const handleSidebarToggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <AppLayoutWrap className={collapsed ? 'sider-collapsed' : ''}>
      <Sidebar collapsed={collapsed} />
      <SiderBackdrop className="sider-backdrop" onClick={handleSidebarToggle} />
      <AppContentWrap>
        <AppHeader onSidebarToggle={handleSidebarToggle} />
        <AppContainer>
          <RouteScrollHandler targetRef={contentRef} />
          <AppContent ref={contentRef} className="app-content">
            <Outlet />
          </AppContent>
        </AppContainer>
      </AppContentWrap>
      <ScrollTopButton targetRef={contentRef} />
    </AppLayoutWrap>
  )
}

export default AppLayout
