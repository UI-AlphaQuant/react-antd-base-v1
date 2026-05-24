import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox, Col, Flex, Row } from 'antd'
import type { CheckboxProps } from 'antd'

const meta = {
  title: 'Antd/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    children: { control: 'text' }
  },
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
    children: 'Checkbox'
  }
} satisfies Meta<CheckboxProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>States</StorySubTitle>
          <Flex gap={16} wrap>
            <Checkbox>Default</Checkbox>
            <Checkbox checked>Checked</Checkbox>
            <Checkbox disabled>Disabled</Checkbox>
            <Checkbox indeterminate>Indeterminate</Checkbox>
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Checkbox Group</StorySubTitle>
          <Checkbox.Group
            options={[
              { label: 'Option A', value: 'A' },
              { label: 'Option B', value: 'B' },
              { label: 'Option C', value: 'C' }
            ]}
            defaultValue={['A']}
          />
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Vertical Group</StorySubTitle>
          <Checkbox.Group defaultValue={['1']}>
            <Flex vertical gap={8}>
              <Checkbox value="1">Item 1</Checkbox>
              <Checkbox value="2">Item 2</Checkbox>
              <Checkbox value="3">Item 3</Checkbox>
            </Flex>
          </Checkbox.Group>
        </StorySection>
      </Col>
    </Row>
  )
}
