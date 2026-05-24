import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col, Flex, message } from 'antd'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { Button } from '@/components/Antd'

const meta = {
  title: 'Antd/Message',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta
type Story = StoryObj

const BasicDemo = () => {
  const [api, contextHolder] = message.useMessage()

  return (
    <>
      {contextHolder}
      <Flex gap={12} wrap>
        <Button onClick={() => api.info('Info message')}>Info</Button>
        <Button onClick={() => api.success('Success message')}>Success</Button>
        <Button onClick={() => api.error('Error message')}>Error</Button>
        <Button onClick={() => api.warning('Warning message')}>Warning</Button>
      </Flex>
    </>
  )
}

const LoadingDemo = () => {
  const [api, contextHolder] = message.useMessage()

  const showLoading = async () => {
    await api.loading('Loading...', 2)
    api.success('Finished!', 2)
  }

  return (
    <>
      {contextHolder}
      <Button onClick={showLoading}>Show Loading</Button>
    </>
  )
}

const DurationDemo = () => {
  const [api, contextHolder] = message.useMessage()

  return (
    <>
      {contextHolder}
      <Button
        onClick={() =>
          api.open({
            type: 'info',
            content: 'Custom duration message',
            duration: 5
          })
        }
      >
        5s Duration
      </Button>
    </>
  )
}

const SequentialDemo = () => {
  const [api, contextHolder] = message.useMessage()

  const showSequence = async () => {
    await api.loading('Step 1...', 1)
    await api.success('Step 2...', 1)
    await api.info('Step 3...', 1)
  }

  return (
    <>
      {contextHolder}
      <Button onClick={showSequence}>Sequential Messages</Button>
    </>
  )
}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24}>
        <StorySection>
          <StorySubTitle>Basic Types</StorySubTitle>
          <BasicDemo />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Loading</StorySubTitle>
          <LoadingDemo />
        </StorySection>
      </Col>

      <Col xs={24} md={12}>
        <StorySection>
          <StorySubTitle>Custom Duration</StorySubTitle>
          <DurationDemo />
        </StorySection>
      </Col>

      <Col xs={24}>
        <StorySection>
          <StorySubTitle>Sequential</StorySubTitle>
          <SequentialDemo />
        </StorySection>
      </Col>
    </Row>
  )
}
