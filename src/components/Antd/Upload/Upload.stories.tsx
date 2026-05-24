import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col } from 'antd'
import type { UploadProps, UploadFile } from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { useState } from 'react'
import { Upload } from './Upload'
import { Button } from '../Button/Button'
import { IconUpload } from '@tabler/icons-react'

const { Dragger } = Upload

const meta = {
  title: 'Antd/Upload',
  component: Upload,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  args: {
    multiple: false,
    disabled: false
  }
} satisfies Meta<UploadProps>

export default meta
type Story = StoryObj<typeof meta>

const dummyRequest: UploadProps['customRequest'] = ({ onSuccess }) => {
  setTimeout(() => {
    onSuccess?.('ok')
  }, 1000)
}

export const Playground: Story = {
  render: (args) => (
    <Upload {...args} customRequest={dummyRequest}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  )
}

export const AllVersions: Story = {
  render: () => {
    const [fileList, setFileList] = useState<UploadFile[]>([])

    return (
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <StorySection>
            <StorySubTitle>Basic Upload</StorySubTitle>
            <Upload customRequest={dummyRequest}>
              <Button icon={<IconUpload />}>Click to Upload</Button>
            </Upload>
          </StorySection>
        </Col>

        <Col xs={24} md={12}>
          <StorySection>
            <StorySubTitle>Multiple Files</StorySubTitle>
            <Upload multiple customRequest={dummyRequest}>
              <Button icon={<IconUpload />}>Upload Multiple</Button>
            </Upload>
          </StorySection>
        </Col>

        <Col xs={24}>
          <StorySection>
            <StorySubTitle>Drag & Drop</StorySubTitle>
            <Dragger customRequest={dummyRequest}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p>Click or drag file to this area to upload</p>
            </Dragger>
          </StorySection>
        </Col>

        <Col xs={24} md={12}>
          <StorySection>
            <StorySubTitle>Picture Upload</StorySubTitle>
            <Upload listType="picture" customRequest={dummyRequest}>
              <Button icon={<IconUpload />}>Upload Image</Button>
            </Upload>
          </StorySection>
        </Col>

        <Col xs={24} md={12}>
          <StorySection>
            <StorySubTitle>Controlled File List</StorySubTitle>
            <Upload
              fileList={fileList}
              onChange={({ fileList }) => setFileList(fileList)}
              customRequest={dummyRequest}
            >
              <Button icon={<IconUpload />}>Controlled Upload</Button>
            </Upload>
          </StorySection>
        </Col>
      </Row>
    )
  }
}
