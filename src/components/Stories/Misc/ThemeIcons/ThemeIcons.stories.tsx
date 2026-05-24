import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import * as Icons from '@/assets/svgs'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { flex } from '@/theme/styles/sharedStyles'
import Paragraph from 'antd/es/typography/Paragraph'

const meta = {
  title: 'Design System/Icons',
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta

export default meta
type Story = StoryObj

const IconCard = styled.div`
  ${flex('column', '12px', 'center', 'space-between')};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  svg {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: auto;
  }
`

const SIconWrapper = styled.div`
  ${flex('row', '8px', 'center', 'center')};
  height: 40px;
  width: 100%;
`

const Name = styled(Paragraph)`
  &.ant-typography {
    margin: 0;
    font-weight: 500;
  }
`

export const AllIcons: Story = {
  render: () => {
    const entries = Object.entries(Icons)

    return (
      <StorySection>
        <StorySubTitle>Custom Icon Library</StorySubTitle>

        <Row gutter={[16, 16]}>
          {entries.map(([name, IconComponent]) => (
            <Col xs={12} sm={8} md={6} lg={4} key={name}>
              <IconCard>
                <SIconWrapper>
                  <IconComponent />
                </SIconWrapper>
                <Name copyable>{name}</Name>
              </IconCard>
            </Col>
          ))}
        </Row>
      </StorySection>
    )
  }
}
