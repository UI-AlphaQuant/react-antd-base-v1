import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col, Flex } from 'antd'
import styled from 'styled-components'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { Divider } from '@/components/Antd'

const meta = {
  title: 'Design System/Grid',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta
type Story = StoryObj

const Box = styled.div`
  background: ${({ theme }) => theme.colors['gray-200']};
  color: ${({ theme }) => theme.colors.black};
  padding: 12px 8px;
  text-align: center;
  border-radius: 6px;
`

export const AllVersions: Story = {
  render: () => {
    const formData = { userId: true }

    return (
      <Flex vertical gap={16}>
        <StorySection>
          <StorySubTitle>Row & Columns</StorySubTitle>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12} lg={8}>
              <Box>Item</Box>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <Box>Item</Box>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <Box>Item</Box>
            </Col>
          </Row>

          <Divider size="small" />

          <Row gutter={[16, 16]}>
            <Col xs={24} lg={{ flex: 'none' }}>
              <Box>F-None in LG</Box>
            </Col>
            <Col xs={24} md={24} lg={{ flex: 1 }}>
              <Box>Flex 1</Box>
            </Col>
          </Row>

          <Divider size="small" />

          <Row gutter={[16, 16]}>
            <Col xs={24} lg={formData.userId ? 8 : 12}>
              <Box>Conditional Span</Box>
            </Col>

            <Col xs={24} lg={{ flex: 1 }}>
              <Box>Flex Span</Box>
            </Col>
          </Row>

          <Divider size="small" />

          <Row gutter={[16, 16]}>
            <Col
              xs={{ span: 24, order: 2 }}
              sm={{ span: 12, order: 1 }}
              md={12}
            >
              <Box>Item 1 (Order 2 → 1)</Box>
            </Col>
            <Col
              xs={{ span: 24, order: 1 }}
              sm={{ span: 12, order: 2 }}
              md={12}
            >
              <Box>Item 2 (Order 1 → 2)</Box>
            </Col>
          </Row>
        </StorySection>
      </Flex>
    )
  }
}
