import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col } from 'antd'
import type { EmptyProps } from 'antd'
import { Empty } from './Empty'
import { Button } from '../Button/Button'
import { Card } from '../Card/Card'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const meta = {
  title: 'Antd/Empty',
  component: Empty,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    description: { control: 'text' },
    image: { control: false }
  },
  args: {
    description: 'No Data'
  }
} satisfies Meta<EmptyProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Default</StorySubTitle>
          <Empty />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Simple</StorySubTitle>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Custom Description</StorySubTitle>
          <Empty description="No users found">
            <Button type="primary">Create Now</Button>
          </Empty>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Inside Container</StorySubTitle>
          <Card>
            <Empty description="No records available" />
          </Card>
        </StorySection>
      </Col>
    </Row>
  )
}
