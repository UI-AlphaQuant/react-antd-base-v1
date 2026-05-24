import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs, Row, Col } from 'antd'
import type { TabsProps } from 'antd'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab 1'
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab 2'
  },
  {
    key: '3',
    label: 'Disabled Tab',
    children: 'Content of Tab 3',
    disabled: true
  }
]

const meta = {
  title: 'Antd/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    tabPosition: {
      control: 'select',
      options: ['top', 'left', 'right', 'bottom']
    },
    type: {
      control: 'select',
      options: ['line', 'card', 'editable-card']
    },
    centered: { control: 'boolean' }
  },
  args: {
    tabPosition: 'top',
    type: 'line',
    centered: false
  }
} satisfies Meta<TabsProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Tabs {...args} items={items} />
}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Basic</StorySubTitle>
          <Tabs items={items} />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Left Position</StorySubTitle>
          <Tabs tabPosition="left" items={items} />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Card Type</StorySubTitle>
          <Tabs type="card" items={items} />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>With Icons</StorySubTitle>
          <Tabs
            items={[
              {
                key: '1',
                label: (
                  <>
                    <AppleOutlined /> Apple
                  </>
                ),
                children: 'Apple Content'
              },
              {
                key: '2',
                label: (
                  <>
                    <AndroidOutlined /> Android
                  </>
                ),
                children: 'Android Content'
              }
            ]}
          />
        </StorySection>
      </Col>

      <Col xs={24}>
        <StorySection>
          <StorySubTitle>Editable Card</StorySubTitle>
          <Tabs
            type="editable-card"
            items={[
              { key: '1', label: 'Tab 1', children: 'Content 1' },
              { key: '2', label: 'Tab 2', children: 'Content 2' }
            ]}
          />
        </StorySection>
      </Col>
    </Row>
  )
}
