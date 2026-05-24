import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col, Flex } from 'antd'
import type { SelectProps } from 'antd'
import Select from './Select'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const options = Array.from({ length: 10 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: `option${i + 1}`
}))

const meta = {
  title: 'Antd/Select',
  component: Select,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['multiple', 'tags']
    },
    disabled: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small']
    },
    allowClear: { control: 'boolean' },
    showSearch: { control: 'boolean' }
  },
  args: {
    disabled: false,
    size: 'middle',
    allowClear: true,
    showSearch: false
  }
} satisfies Meta<SelectProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Select
      {...args}
      options={options}
      style={{ width: 200 }}
      placeholder="Select option"
    />
  )
}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Default</StorySubTitle>
          <Select options={options} placeholder="Select role" />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Disabled</StorySubTitle>
          <Select options={options} disabled placeholder="Disabled" />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Multiple</StorySubTitle>
          <Select
            mode="multiple"
            options={options}
            placeholder="Select multiple"
          />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>With Search</StorySubTitle>
          <Select showSearch options={options} placeholder="Search role" />
        </StorySection>
      </Col>

      <Col xs={24}>
        <StorySection>
          <StorySubTitle>Sizes</StorySubTitle>
          <Flex gap={16} wrap>
            <Select size="large" options={options} placeholder="Large" />
            <Select size="middle" options={options} placeholder="Middle" />
            <Select size="small" options={options} placeholder="Small" />
          </Flex>
        </StorySection>
      </Col>
    </Row>
  )
}
