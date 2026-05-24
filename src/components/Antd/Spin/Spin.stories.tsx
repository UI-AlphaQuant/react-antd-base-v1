import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col, Flex } from 'antd'
import type { SpinProps } from 'antd'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { Spin } from './Spin'
import { useState } from 'react'
import { Button } from '../Button/Button'

const meta = {
  title: 'Antd/Spin',
  component: Spin,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large']
    },
    spinning: { control: 'boolean' },
    tip: { control: 'text' }
  },
  args: {
    size: 'default',
    spinning: true
  }
} satisfies Meta<SpinProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Spin {...args} />
}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Basic</StorySubTitle>
          <Spin />
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Sizes</StorySubTitle>
          <Flex gap={16} align="center">
            <Spin size="small" />
            <Spin size="default" />
            <Spin size="large" />
          </Flex>
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>With Tip</StorySubTitle>
          <Spin tip="Loading..." />
        </StorySection>
      </Col>

      <Col xs={24} md={24}>
        <StorySection>
          <StorySubTitle>Inside Container</StorySubTitle>
          <Spin spinning>
            <div style={{ height: 180 }} />
          </Spin>
        </StorySection>
      </Col>

      <Col xs={24}>
        <StorySection>
          <StorySubTitle>Fullscreen</StorySubTitle>
          {(() => {
            const FullscreenDemo = () => {
              const [loading, setLoading] = useState(false)
              const handleClick = () => {
                setLoading(true)
                setTimeout(() => {
                  setLoading(false)
                }, 10000)
              }
              return (
                <>
                  <Button type="primary" onClick={handleClick}>
                    Show Fullscreen Loader
                  </Button>

                  <Spin
                    spinning={loading}
                    fullscreen
                    tip="Loading... (Hide in 10s)"
                  />
                </>
              )
            }
            return <FullscreenDemo />
          })()}
        </StorySection>
      </Col>
    </Row>
  )
}
