import type { MenuProps } from 'antd'
import { IconDashboard, IconUser, ReactNode } from '@tabler/icons-react'
import { ROUTES } from './routes'

type AppMenuItem = Required<MenuProps>['items'][number] & {
  route?: string
}

const item = (
  route: string,
  label: string,
  icon?: ReactNode,
  children?: AppMenuItem[]
): AppMenuItem => ({
  key: route,
  label,
  icon,
  children
})

export const getAppMenus = (t: (key: string) => string): AppMenuItem[] => [
  item(ROUTES.APP.DASHBOARD, t('common:Dashboard'), <IconDashboard />),

  item('/user-management', t('common:UserManagement'), <IconUser />, [
    item(ROUTES.APP.USERLIST, t('common:UsersList')),
    item('/roles', t('common:Roles')),
    item('/permissions', t('common:Permissions'))
  ])
]
