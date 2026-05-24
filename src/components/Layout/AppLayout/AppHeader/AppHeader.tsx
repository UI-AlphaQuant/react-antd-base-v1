import { Button } from '@/components/Antd'
import { AppHeaderWrap } from './AppHeader.style'
import { Flex } from 'antd'
import { LanguageSelector, ThemeToggle } from '@/components/Utilities'
import { IconMenu } from '@tabler/icons-react'

interface AppHeaderProps {
  onSidebarToggle: () => void
  logout?: () => void
}

export function AppHeader({ onSidebarToggle }: AppHeaderProps) {
  return (
    <AppHeaderWrap>
      <Button
        type="text"
        size="small"
        className="sider-toggle-btn"
        icon={<IconMenu />}
        onClick={onSidebarToggle}
      />

      <Flex align="center" gap={12}>
        <ThemeToggle />
        <LanguageSelector />
      </Flex>
    </AppHeaderWrap>
  )
}

export default AppHeader
