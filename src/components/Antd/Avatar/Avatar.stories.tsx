import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, Col, Flex, Row } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const meta = {
  title: 'Antd/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'default', 'small']
    },
    shape: {
      control: 'select',
      options: ['circle', 'square']
    },
    children: { control: 'text' }
  },
  args: {
    size: 'default',
    shape: 'circle',
    children: 'U'
  }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Types</StorySubTitle>
          <Flex gap={16} align="center" wrap>
            <Avatar src="https://i.pravatar.cc/300" />
            <Avatar icon={<UserOutlined />} />
            <Avatar>NA</Avatar>
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Sizes</StorySubTitle>
          <Flex gap={16} align="center" wrap>
            <Avatar size="large" icon={<UserOutlined />} />
            <Avatar size="default" icon={<UserOutlined />} />
            <Avatar size="small" icon={<UserOutlined />} />
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Shapes</StorySubTitle>
          <Flex gap={16} align="center">
            <Avatar shape="circle" icon={<UserOutlined />} />
            <Avatar shape="square" icon={<UserOutlined />} />
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Avatar Group</StorySubTitle>
          <Avatar.Group>
            <Avatar src="https://i.pravatar.cc/300" />
            <Avatar src="https://i.pravatar.cc/300" />
            <Avatar icon={<UserOutlined />} />
            <Avatar>+2</Avatar>
          </Avatar.Group>
        </StorySection>
      </Col>
    </Row>
  )
}
