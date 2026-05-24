import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col } from 'antd'
import type { StatisticProps } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import Countdown from 'antd/es/statistic/Countdown'
import { Card } from '../Card/Card'
import { Statistic } from './Statistic'

const meta = {
  title: 'Antd/Statistic',
  component: Statistic,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    precision: { control: 'number' },
    prefix: { control: 'text' },
    suffix: { control: 'text' }
  },
  args: {
    value: 112893,
    precision: 0
  }
} satisfies Meta<StatisticProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Basic</StorySubTitle>
          <Statistic title="Active Users" value={112893} />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Prefix & Suffix</StorySubTitle>
          <Statistic
            title="Growth"
            value={11.28}
            precision={2}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Precision</StorySubTitle>
          <Statistic
            title="Revenue"
            value={12345.678}
            precision={2}
            prefix="₹"
          />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Countdown</StorySubTitle>
          <Countdown
            title="Launch In"
            value={Date.now() + 1000 * 60 * 60 * 24}
          />
        </StorySection>
      </Col>

      <Col xs={24}>
        <StorySection>
          <StorySubTitle>KPI Card</StorySubTitle>

          <Row gutter={[16, 16]}>
            <Col xs={12}>
              <Card cardType="kpi">
                <Statistic title="Monthly Revenue" value={125000} prefix="₹" />
              </Card>
            </Col>
            <Col xs={12}>
              <Card cardType="kpi">
                <Statistic
                  title="Monthly Revenue (Loading state)"
                  value={125000}
                  prefix="₹"
                  loading
                />
              </Card>
            </Col>
          </Row>
        </StorySection>
      </Col>
    </Row>
  )
}
