import type { Meta, StoryObj } from '@storybook/react-vite'
import { Col, Flex, Row } from 'antd'
import type { DatePickerProps } from 'antd'
import { DatePicker, RangePicker } from './DatePicker'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const meta = {
  title: 'Antd/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    allowClear: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small']
    },
    picker: {
      control: 'select',
      options: ['date', 'week', 'month', 'quarter', 'year']
    },
    showTime: { control: 'boolean' }
  },
  args: {
    disabled: false,
    allowClear: true,
    size: 'middle',
    picker: 'date',
    showTime: false
  }
} satisfies Meta<DatePickerProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Default</StorySubTitle>

          <DatePicker placeholder="Select date" />
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>States</StorySubTitle>
          <Flex gap={8} wrap>
            <DatePicker disabled placeholder="Disabled picker" />
            <DatePicker allowClear placeholder="Allow clear" />
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>With Time</StorySubTitle>

          <DatePicker showTime placeholder="Select date & time" />
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Picker Types</StorySubTitle>

          <Flex gap={8} wrap>
            <DatePicker picker="month" placeholder="Select month" />
            <DatePicker picker="year" placeholder="Select year" />
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Sizes</StorySubTitle>

          <Flex gap={8} wrap>
            <DatePicker size="large" placeholder="Large" />
            <DatePicker size="middle" placeholder="Middle" />
            <DatePicker size="small" placeholder="Small" />
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Range Picker</StorySubTitle>

          <RangePicker />
        </StorySection>
      </Col>
    </Row>
  )
}
