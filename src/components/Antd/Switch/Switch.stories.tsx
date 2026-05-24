import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col, Flex } from 'antd'
import type { SwitchProps } from 'antd'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { Switch } from './Switch'
import { IconMoon, IconSun } from '@tabler/icons-react'

const meta = {
  title: 'Antd/Switch',
  component: Switch,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['default', 'small']
    },
    loading: { control: 'boolean' },
    checkedChildren: { control: 'text' },
    unCheckedChildren: { control: 'text' }
  },
  args: {
    checked: false,
    disabled: false,
    size: 'default',
    loading: false,
    checkedChildren: '',
    unCheckedChildren: ''
  }
} satisfies Meta<SwitchProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Basic</StorySubTitle>
          <div>
            <Switch />
          </div>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>States</StorySubTitle>
          <Flex gap={16}>
            <Switch checked />
            <Switch disabled />
            <Switch checked disabled />
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>With Text</StorySubTitle>
          <div>
            <Switch checkedChildren="ON" unCheckedChildren="OFF" />
          </div>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Sizes</StorySubTitle>
          <Flex gap={16} align="center">
            <Switch size="default" />
            <Switch size="small" />
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Loading</StorySubTitle>
          <div>
            <Switch loading />
          </div>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>With Icons</StorySubTitle>
          <div>
            <Switch
              checkedChildren={<IconSun />}
              unCheckedChildren={<IconMoon />}
            />
          </div>
        </StorySection>
      </Col>
    </Row>
  )
}
