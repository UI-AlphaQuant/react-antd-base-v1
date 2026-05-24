import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col, Flex } from 'antd'
import type { TagProps } from 'antd'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined
} from '@ant-design/icons'
import { IconBrandTwitter } from '@tabler/icons-react'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { useState } from 'react'
import { Tag } from './Tag'

const meta = {
  title: 'Antd/Tag',
  component: Tag,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'text' },
    closable: { control: 'boolean' },
    children: { control: 'text' }
  },
  args: {
    children: 'Tag',
    closable: false
  }
} satisfies Meta<TagProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVersions: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)

    return (
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <StorySection>
            <StorySubTitle>Status Colors</StorySubTitle>
            <Flex gap={12} wrap>
              <Tag color="default">Default</Tag>
              <Tag color="success">Success</Tag>
              <Tag color="error">Error</Tag>
              <Tag color="warning">Warning</Tag>
              <Tag color="processing">Processing</Tag>
            </Flex>
          </StorySection>
        </Col>

        <Col xs={24} md={12}>
          <StorySection>
            <StorySubTitle>With Icon</StorySubTitle>
            <Flex gap={12}>
              <Tag icon={<IconBrandTwitter size={14} />} color="default">
                Twitter
              </Tag>

              <Tag icon={<CheckCircleOutlined />} color="success">
                Active
              </Tag>

              <Tag icon={<CloseCircleOutlined />} color="error">
                Failed
              </Tag>

              <Tag icon={<SyncOutlined spin />} color="processing">
                Syncing
              </Tag>
            </Flex>
          </StorySection>
        </Col>

        <Col xs={24} md={12}>
          <StorySection>
            <StorySubTitle>Closable</StorySubTitle>
            <Flex>
              <Tag color="default" closable closeIcon={<CloseCircleOutlined />}>
                Closable Tag
              </Tag>
            </Flex>
          </StorySection>
        </Col>

        <Col xs={24} md={12}>
          <StorySection>
            <StorySubTitle>Checkable</StorySubTitle>
            <div>
              <Tag.CheckableTag checked={checked} onChange={setChecked}>
                Toggle Me
              </Tag.CheckableTag>
            </div>
          </StorySection>
        </Col>
      </Row>
    )
  }
}
