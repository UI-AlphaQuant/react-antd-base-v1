import type { Meta, StoryObj } from '@storybook/react-vite'
import { Col, Row } from 'antd'
import type { CollapseProps } from 'antd'
import { Collapse } from './Collapse'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const meta = {
  title: 'Antd/Collapse',
  component: Collapse,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    accordion: { control: 'boolean' },
    bordered: { control: 'boolean' },
    ghost: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small']
    },
    collapsible: {
      control: 'select',
      options: ['header', 'icon', 'disabled']
    },
    expandIconPlacement: {
      control: 'select',
      options: ['start', 'end']
    },
    destroyOnHidden: { control: 'boolean' }
  },
  args: {
    accordion: false,
    bordered: true,
    ghost: false,
    size: 'middle',
    collapsible: 'header',
    expandIconPlacement: 'start',
    destroyOnHidden: false
  }
} satisfies Meta<CollapseProps>

export default meta
type Story = StoryObj<typeof meta>

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Panel 1',
    children: 'Content of Panel 1'
  },
  {
    key: '2',
    label: 'Panel 2',
    children: 'Content of Panel 2'
  },
  {
    key: '3',
    label: 'Disabled Panel',
    children: 'Cannot expand this',
    collapsible: 'disabled'
  }
]

export const Playground: Story = {
  render: (args) => (
    <Collapse {...args} items={items} defaultActiveKey={['1']} />
  )
}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Default</StorySubTitle>
          <Collapse defaultActiveKey={['1']} items={items} />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Accordion</StorySubTitle>
          <Collapse accordion items={items} />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Ghost (Small)</StorySubTitle>
          <Collapse ghost size="small" items={items} />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Icon Placement End</StorySubTitle>
          <Collapse expandIconPlacement="end" items={items} />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Icon Trigger Only</StorySubTitle>
          <Collapse collapsible="icon" items={items} />
        </StorySection>
      </Col>
    </Row>
  )
}
