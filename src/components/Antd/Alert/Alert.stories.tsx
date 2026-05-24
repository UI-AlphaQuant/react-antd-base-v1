import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'
import { Flex } from 'antd'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const meta = {
  title: 'Antd/Alert',
  component: Alert,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error']
    },
    showIcon: {
      control: 'boolean'
    },
    closable: {
      control: 'boolean'
    },
    message: {
      control: 'text'
    },
    description: {
      control: 'text'
    }
  },
  args: {
    type: 'success',
    title: 'Alert message',
    description: 'Optional description text.',
    showIcon: true,
    closable: false
  }
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

const alertTypes: Array<'success' | 'info' | 'warning' | 'error'> = [
  'success',
  'info',
  'warning',
  'error'
]

export const AllTypes: Story = {
  render: (args) => (
    <StorySection>
      <StorySubTitle>Alert Types</StorySubTitle>
      <Flex vertical gap={20}>
        {alertTypes.map((type) => (
          <Alert key={type} {...args} type={type} title={`${type} alert`} />
        ))}
      </Flex>
    </StorySection>
  )
}
