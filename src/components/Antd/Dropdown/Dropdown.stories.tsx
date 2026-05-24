import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, Col, Row } from 'antd'
import type { DropdownProps } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown } from './Dropdown'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const items: DropdownProps['menu'] = {
  items: [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
    { key: '3', label: 'Action 3' }
  ]
}

const meta = {
  title: 'Antd/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'contextMenu']
    },
    placement: {
      control: 'select',
      options: [
        'bottomLeft',
        'bottom',
        'bottomRight',
        'topLeft',
        'top',
        'topRight'
      ]
    },
    disabled: { control: 'boolean' }
  },
  args: {
    trigger: ['click'],
    placement: 'bottomLeft',
    disabled: false
  }
} satisfies Meta<DropdownProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Dropdown {...args} menu={items}>
      <Button>
        Open Menu <DownOutlined />
      </Button>
    </Dropdown>
  )
}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Basic</StorySubTitle>
          <Dropdown menu={items}>
            <Button>
              Click Me <DownOutlined />
            </Button>
          </Dropdown>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Hover Trigger</StorySubTitle>
          <Dropdown trigger={['hover']} menu={items}>
            <Button>
              Hover Me <DownOutlined />
            </Button>
          </Dropdown>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Placement</StorySubTitle>
          <Dropdown placement="topRight" menu={items}>
            <Button>
              Top Right <DownOutlined />
            </Button>
          </Dropdown>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Disabled</StorySubTitle>
          <Dropdown disabled menu={items}>
            <Button>
              Disabled <DownOutlined />
            </Button>
          </Dropdown>
        </StorySection>
      </Col>
    </Row>
  )
}
