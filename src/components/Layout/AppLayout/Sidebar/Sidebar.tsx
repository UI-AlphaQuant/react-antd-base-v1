import { Menu } from '@/components/Antd'
import { SiderContent, SiderHeader, SiderWrap } from './Sidebar.style'
import { LogoMain } from '@/assets/svgs'
import { getAppMenus } from '@/constants'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'

interface SidebarProps {
  collapsed: boolean
}

export function Sidebar({ collapsed = false }: SidebarProps) {
  const { t } = useTranslation()

  const navigate = useNavigate()
  const location = useLocation()

  const menus = useMemo(() => getAppMenus(t), [t])

  return (
    <SiderWrap collapsed={collapsed} width={220}>
      <SiderHeader>
        <LogoMain />
      </SiderHeader>
      <SiderContent>
        <Menu
          className="sider-menu"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          selectedKeys={[location.pathname]}
          onClick={(e) => navigate(e.key)}
          items={menus}
        />
      </SiderContent>
    </SiderWrap>
  )
}

export default Sidebar
