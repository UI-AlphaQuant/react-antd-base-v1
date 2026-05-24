import type { Meta, StoryObj } from '@storybook/react-vite'
import { Flex } from 'antd'
import type { FloatButtonProps } from 'antd'
import {
  PlusOutlined,
  CustomerServiceOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons'
import { FloatButton } from './FloatButton'

const meta = {
  title: 'Antd/FloatButton',
  component: FloatButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primary']
    },
    shape: {
      control: 'select',
      options: ['circle', 'square']
    },
    tooltip: { control: 'text' },
    description: { control: 'text' }
  },
  args: {
    type: 'default',
    shape: 'circle'
  }
} satisfies Meta<FloatButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div style={{ height: 200, position: 'relative' }}>
      <FloatButton {...args} icon={<PlusOutlined />} />
    </div>
  )
}

export const AllVersions: Story = {
  render: () => (
    <Flex vertical gap={40}>
      <FloatButton icon={<PlusOutlined />} />

      <FloatButton type="primary" icon={<CustomerServiceOutlined />} />

      <FloatButton
        icon={<QuestionCircleOutlined />}
        tooltip="Need Help?"
        style={{ right: 94 }}
      />

      <FloatButton.BackTop style={{ right: 24 }} />

      <FloatButton.Group
        trigger="click"
        icon={<PlusOutlined />}
        style={{ right: 164 }}
      >
        <FloatButton icon={<CustomerServiceOutlined />} />
        <FloatButton icon={<QuestionCircleOutlined />} />
      </FloatButton.Group>
    </Flex>
  )
}
