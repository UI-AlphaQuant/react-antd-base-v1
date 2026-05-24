import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col } from 'antd'
import type { MenuProps } from 'antd'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Menu } from './Menu'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'Navigation One'
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: 'Navigation Two'
  },
  {
    key: 'sub1',
    icon: <SettingOutlined />,
    label: 'Sub Menu',
    children: [
      { key: '3', label: 'Option 1' },
      { key: '4', label: 'Option 2' },
      { key: '5', label: 'Disabled Option', disabled: true }
    ]
  }
]

const meta = {
  title: 'Antd/Menu',
  component: Menu,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['horizontal', 'vertical', 'inline']
    },
    theme: {
      control: 'select',
      options: ['light', 'dark']
    }
  },
  args: {
    mode: 'horizontal',
    theme: 'light'
  }
} satisfies Meta<MenuProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Menu {...args} defaultSelectedKeys={['1']} items={items} />
}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={6}>
        <StorySection>
          <StorySubTitle>Inline (Sidebar)</StorySubTitle>
          <Menu
            className="sider-menu"
            mode="inline"
            defaultOpenKeys={['sub1']}
            defaultSelectedKeys={['3']}
            items={items}
          />
        </StorySection>
      </Col>

      <Col xs={24} md={6}>
        <StorySection>
          <StorySubTitle>Vertical</StorySubTitle>
          <Menu mode="vertical" defaultSelectedKeys={['2']} items={items} />
        </StorySection>
      </Col>

      <Col span={12}>
        <StorySection>
          <StorySubTitle>Horizontal</StorySubTitle>
          <Menu mode="horizontal" defaultSelectedKeys={['1']} items={items} />
        </StorySection>
      </Col>
    </Row>
  )
}
