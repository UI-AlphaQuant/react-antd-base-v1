import type { Meta, StoryObj } from '@storybook/react-vite'
import { Col, Flex, Row } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Button } from './Button'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const meta = {
  title: 'Antd/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'text', 'link']
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small']
    },
    danger: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    children: { control: 'text' }
  },
  args: {
    type: 'primary',
    size: 'middle',
    danger: false,
    disabled: false,
    loading: false,
    children: 'Button'
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={14}>
        <StorySection>
          <StorySubTitle>Types</StorySubTitle>
          <Flex gap={12} wrap>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="link">Link</Button>
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={10}>
        <StorySection>
          <StorySubTitle>States</StorySubTitle>
          <Flex gap={12} wrap>
            <Button type="primary" danger>
              Danger
            </Button>
            <Button type="primary" loading>
              Loading
            </Button>
            <Button type="primary" disabled>
              Disabled
            </Button>
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={14}>
        <StorySection>
          <StorySubTitle>Sizes</StorySubTitle>
          <Flex gap={12} wrap align="center">
            <Button type="primary" size="large">
              Large
            </Button>
            <Button type="primary" size="middle">
              Middle
            </Button>
            <Button type="primary" size="small">
              Small
            </Button>
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={10}>
        <StorySection>
          <StorySubTitle>Icon & Block</StorySubTitle>
          <Flex gap={12} wrap>
            <Button type="primary" icon={<SearchOutlined />}>
              With Icon
            </Button>
            <Button icon={<SearchOutlined />} />
            <Button type="primary" block>
              Full Width
            </Button>
          </Flex>
        </StorySection>
      </Col>
    </Row>
  )
}
