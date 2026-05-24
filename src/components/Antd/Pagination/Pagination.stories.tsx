import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col } from 'antd'
import type { PaginationProps } from 'antd'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { Pagination } from './Pagination'

const meta = {
  title: 'Antd/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', undefined]
    },
    disabled: { control: 'boolean' },
    simple: { control: 'boolean' },
    showSizeChanger: { control: 'boolean' },
    showQuickJumper: { control: 'boolean' }
  },
  args: {
    current: 1,
    total: 100,
    pageSize: 10,
    disabled: false,
    simple: false,
    showSizeChanger: false,
    showQuickJumper: false
  }
} satisfies Meta<PaginationProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={24}>
        <StorySection>
          <StorySubTitle>Default</StorySubTitle>
          <Pagination defaultCurrent={1} total={100} />
        </StorySection>
      </Col>

      <Col xs={24} md={24}>
        <StorySection>
          <StorySubTitle>Small Size</StorySubTitle>
          <Pagination size="small" defaultCurrent={1} total={100} />
        </StorySection>
      </Col>

      <Col xs={24} md={24}>
        <StorySection>
          <StorySubTitle>Simple Mode</StorySubTitle>
          <Pagination simple defaultCurrent={1} total={50} />
        </StorySection>
      </Col>

      <Col xs={24} md={24}>
        <StorySection>
          <StorySubTitle>Disabled</StorySubTitle>
          <Pagination disabled defaultCurrent={1} total={100} />
        </StorySection>
      </Col>

      <Col xs={24} md={24}>
        <StorySection>
          <StorySubTitle>Show Size Changer</StorySubTitle>
          <Pagination defaultCurrent={1} total={200} showSizeChanger />
        </StorySection>
      </Col>

      <Col xs={24} md={24}>
        <StorySection>
          <StorySubTitle>Quick Jumper</StorySubTitle>
          <Pagination defaultCurrent={1} total={200} showQuickJumper />
        </StorySection>
      </Col>
    </Row>
  )
}
