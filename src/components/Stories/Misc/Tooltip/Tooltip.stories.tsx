import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip, Row, Col, Flex } from 'antd'
import type { TooltipProps } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { Button, Divider } from '@/components/Antd'

const meta = {
  title: 'Antd/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    placement: {
      control: 'select',
      options: [
        'top',
        'left',
        'right',
        'bottom',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight'
      ]
    },
    color: { control: 'text' }
  },
  args: {
    title: 'Tooltip content',
    placement: 'top'
  }
} satisfies Meta<TooltipProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  )
}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={4}>
        <StorySection>
          <StorySubTitle>Basic</StorySubTitle>
          <Divider />
          <Tooltip title="Basic tooltip" fresh defaultOpen>
            <Button>Hover</Button>
          </Tooltip>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Placements</StorySubTitle>
          <Divider />
          <Flex gap={12} wrap>
            <Tooltip title="Top" placement="top">
              <Button>Top</Button>
            </Tooltip>
            <Tooltip title="Left" placement="left">
              <Button>Left</Button>
            </Tooltip>
            <Tooltip title="Right" placement="right">
              <Button>Right</Button>
            </Tooltip>
            <Tooltip title="Bottom" placement="bottom">
              <Button>Bottom</Button>
            </Tooltip>
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Custom Content</StorySubTitle>
          <Divider />
          <Tooltip
            title={
              <span>
                <InfoCircleOutlined /> Detailed information
              </span>
            }
          >
            <Button>Hover for Info</Button>
          </Tooltip>
        </StorySection>
      </Col>
    </Row>
  )
}
