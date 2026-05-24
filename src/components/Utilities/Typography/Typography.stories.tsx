import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col, Flex } from 'antd'
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  TextXL,
  TextL,
  TextM,
  TextS,
  TextXS
} from './Typography'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta
type Story = StoryObj

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Headings</StorySubTitle>
          <Flex vertical gap={8}>
            <H1>H1 - Heading 1</H1>
            <H2>H2 - Heading 2</H2>
            <H3>H3 - Heading 3</H3>
            <H4>H4 - Heading 4</H4>
            <H5>H5 - Heading 5</H5>
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Text Sizes</StorySubTitle>
          <Flex vertical gap={6}>
            <TextXL>TextXL - Extra Large Text</TextXL>
            <TextL>TextL - Large Text</TextL>
            <TextM>TextM - Medium Text</TextM>
            <TextS>TextS - Small Text</TextS>
            <TextXS>TextXS - Extra Small Text</TextXS>
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Colors</StorySubTitle>
          <Flex vertical gap={6}>
            <TextM color="primary">color="primary" - Primary Color</TextM>
            <TextM color="dark">color="dark" - Dark Color</TextM>
            <TextM color="muted">color="muted" - Muted Color</TextM>
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Font Weights</StorySubTitle>
          <Flex vertical gap={6}>
            <TextM weight={300}>weight={300} - Light</TextM>
            <TextM weight={400}>weight={400} - Regular</TextM>
            <TextM weight={500}>weight={500} - Medium</TextM>
            <TextM weight={600}>weight={600} - Semi Bold</TextM>
            <TextM weight={700}>weight={700} - Bold</TextM>
            <TextM weight={800}>weight={800} - Extra Bold</TextM>
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Inline Display</StorySubTitle>
          <Flex gap={8} wrap>
            <TextM display="inline-block" color="primary">
              display="inline-block"
            </TextM>
            <TextM color="muted">default display="block"</TextM>
          </Flex>
        </StorySection>
      </Col>
    </Row>
  )
}
