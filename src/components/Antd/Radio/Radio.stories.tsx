import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col, Flex } from 'antd'
import type { RadioProps } from 'antd'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { Radio } from './Radio'
import { RadioGroup } from '../RadioGroup/RadioGroup'

const meta = {
  title: 'Antd/Radio',
  component: Radio,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
  args: {
    checked: false,
    disabled: false,
    children: 'Radio Label'
  }
} satisfies Meta<RadioProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>States</StorySubTitle>
          <Flex gap={16} wrap>
            <Radio>Default</Radio>
            <Radio checked>Checked</Radio>
            <Radio disabled>Disabled</Radio>
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Radio Group</StorySubTitle>
          <RadioGroup defaultValue="a">
            <Radio value="a">Option A</Radio>
            <Radio value="b">Option B</Radio>
            <Radio value="c">Option C</Radio>
          </RadioGroup>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Button Style</StorySubTitle>
          <RadioGroup defaultValue="a" optionType="button">
            <Radio.Button value="a">Left</Radio.Button>
            <Radio.Button value="b">Middle</Radio.Button>
            <Radio.Button value="c">Right</Radio.Button>
          </RadioGroup>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Vertical Group</StorySubTitle>
          <RadioGroup defaultValue="1">
            <Flex vertical gap={8}>
              <Radio value="1">Item 1</Radio>
              <Radio value="2">Item 2</Radio>
              <Radio value="3">Item 3</Radio>
            </Flex>
          </RadioGroup>
        </StorySection>
      </Col>
    </Row>
  )
}
