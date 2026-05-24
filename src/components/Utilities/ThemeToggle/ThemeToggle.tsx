import { IconSun, IconMoon } from '@tabler/icons-react'
import { useTheme } from '@/theme'
import { Switch } from '@/components/Antd'

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme()

  return (
    <Switch
      checked={mode === 'dark'}
      onChange={toggleTheme}
      checkedChildren={<IconMoon size={16} />}
      unCheckedChildren={<IconSun size={16} />}
    />
  )
}

export default ThemeToggle
