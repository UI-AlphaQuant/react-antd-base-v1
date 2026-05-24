import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col, Flex } from 'antd'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { Button } from '@/components/Antd'
import { AppNotification } from '@/components/Utilities'

const meta = {
  title: 'Antd/Notification',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta
type Story = StoryObj

const NotificationDemo = () => {
  return (
    <Flex gap={12} wrap>
      <Button
        onClick={() =>
          AppNotification.info({
            message: 'Info',
            description: 'This is an informational notification.'
          })
        }
      >
        Info
      </Button>

      <Button
        onClick={() =>
          AppNotification.success({
            message: 'Success',
            description: 'Operation completed successfully.'
          })
        }
      >
        Success
      </Button>

      <Button
        onClick={() =>
          AppNotification.error({
            message: 'Error',
            description: 'Something went wrong.'
          })
        }
      >
        Error
      </Button>

      <Button
        onClick={() =>
          AppNotification.warning({
            message: 'Warning',
            description: 'Please check your input.'
          })
        }
      >
        Warning
      </Button>
    </Flex>
  )
}

const CustomIconDemo = () => {
  const open = () => {
    AppNotification.success({
      message: 'Custom Icon',
      description: 'Notification with custom icon.'
    })
  }

  return <Button onClick={open}>Open Notification</Button>
}

const PlacementDemo = () => {
  return (
    <Flex gap={12} wrap>
      <Button
        onClick={() =>
          AppNotification.info({
            message: 'Top Right',
            description: 'Default placement.'
          })
        }
      >
        Top Right
      </Button>

      <Button
        onClick={() =>
          AppNotification.success({
            message: 'Another Notification',
            description: 'Multiple notifications example.'
          })
        }
      >
        Another
      </Button>
    </Flex>
  )
}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={16}>
        <StorySection>
          <StorySubTitle>Basic Types</StorySubTitle>
          <NotificationDemo />
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Custom Icon</StorySubTitle>
          <CustomIconDemo />
        </StorySection>
      </Col>

      <Col xs={24} md={16}>
        <StorySection>
          <StorySubTitle>Placement</StorySubTitle>
          <PlacementDemo />
        </StorySection>
      </Col>
    </Row>
  )
}
