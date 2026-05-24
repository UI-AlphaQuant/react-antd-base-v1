import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col, Flex } from 'antd'
import { Skeleton, type SkeletonVariant } from './Skeleton'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const variants: SkeletonVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'small']

const meta = {
  title: 'Antd/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants
    },
    fullWidth: { control: 'boolean' },
    active: { control: 'boolean' }
  },
  args: {
    variant: 'h3',
    fullWidth: false,
    active: true
  }
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Variants</StorySubTitle>
          <Flex vertical gap={16}>
            {variants.map((variant) => (
              <Flex key={variant} vertical gap={6}>
                <small>{variant.toUpperCase()}</small>
                <Skeleton variant={variant} paragraph={false} />
              </Flex>
            ))}
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Full Width</StorySubTitle>
          <Flex vertical gap={16}>
            <Flex vertical gap={6}>
              <small>H1 - Full Width</small>
              <Skeleton variant="h1" paragraph={false} fullWidth />
            </Flex>

            <Flex vertical gap={6}>
              <small>H2 - Full Width</small>
              <Skeleton variant="h2" paragraph={false} fullWidth />
            </Flex>

            <Flex vertical gap={6}>
              <small>P - Full Width</small>
              <Skeleton variant="p" paragraph={false} fullWidth />
            </Flex>
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24}>
        <StorySection>
          <StorySubTitle>With Paragraph</StorySubTitle>
          <Flex vertical gap={16}>
            <Flex vertical gap={6}>
              <small>H3 + 2 Rows</small>
              <Skeleton variant="h3" paragraph={{ rows: 2 }} />
            </Flex>

            <Flex vertical gap={6}>
              <small>P + 3 Rows (Full Width)</small>
              <Skeleton variant="p" paragraph={{ rows: 3 }} fullWidth />
            </Flex>
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24}>
        <StorySection>
          <StorySubTitle>Preset Elements</StorySubTitle>

          <Flex gap={32} wrap align="center">
            <Flex vertical gap={6} align="center">
              <small>Avatar</small>
              <Skeleton.Avatar active />
            </Flex>

            <Flex vertical gap={6} align="center">
              <small>Button</small>
              <Skeleton.Button active />
            </Flex>

            <Flex vertical gap={6} align="center">
              <small>Input</small>
              <Skeleton.Input active />
            </Flex>

            <Flex vertical gap={6} align="center">
              <small>Image</small>
              <Skeleton.Image />
            </Flex>

            <Flex vertical gap={6} align="center">
              <small>Custom Node</small>
              <Skeleton.Node active>
                <div style={{ width: 80, height: 32 }} />
              </Skeleton.Node>
            </Flex>
          </Flex>
        </StorySection>
      </Col>
    </Row>
  )
}
