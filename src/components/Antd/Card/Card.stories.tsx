import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col } from 'antd'
import { Card, type CardProps } from './Card'
import { H2 } from '@/components/Utilities'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { Button } from '../Button/Button'

const meta = {
  title: 'Antd/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    cardType: {
      control: 'select',
      options: ['default', 'form', 'list', 'kpi']
    },
    loading: { control: 'boolean' },
    bordered: { control: 'boolean' },
    title: { control: 'text' }
  },
  args: {
    cardType: 'default',
    title: 'Card Title',
    bordered: true,
    loading: false,
    children: 'This is card content.'
  }
} satisfies Meta<CardProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Default</StorySubTitle>
          <Card cardType="default">Compact content layout.</Card>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Form Card</StorySubTitle>
          <Card
            cardType="form"
            title="Form Card"
            extra={
              <Button type="primary" size="small">
                Save
              </Button>
            }
          >
            Form-related structured content.
          </Card>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>List Card</StorySubTitle>
          <Card cardType="list" title="List Card">
            List-style content presentation.
          </Card>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>KPI Card</StorySubTitle>
          <Card cardType="kpi" title="Revenue" extra="This Month">
            <H2>₹ 1,25,000</H2>
          </Card>
        </StorySection>
      </Col>
    </Row>
  )
}
