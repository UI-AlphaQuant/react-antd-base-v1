import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col, Flex } from 'antd'
import type { ModalProps } from 'antd'
import { useState } from 'react'
import { Modal } from './Modal'
import { Button } from '../Button/Button'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { ConfirmModal } from '@/components/Modals'

const meta = {
  title: 'Antd/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    centered: { control: 'boolean' },
    maskClosable: { control: 'boolean' },
    destroyOnClose: { control: 'boolean' }
  },
  args: {
    centered: false,
    maskClosable: true,
    destroyOnClose: false
  }
} satisfies Meta<ModalProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>

        <Modal
          {...args}
          open={open}
          onCancel={() => setOpen(false)}
          onOk={() => setOpen(false)}
          title="Modal Title"
        >
          Modal content goes here.
        </Modal>
      </>
    )
  }
}

export const AllVersions: Story = {
  render: () => {
    const [open1, setOpen1] = useState(false)
    const [open3, setOpen3] = useState(false)

    // Confirm Modal
    const [openCM, setOpenCM] = useState(false)
    const handleCMOk = () => {
      setOpenCM(false)
    }
    const handleCMCancel = () => {
      setOpenCM(false)
    }

    return (
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <StorySection>
            <StorySubTitle>Default</StorySubTitle>
            <Flex gap={16}>
              <Button type="primary" onClick={() => setOpen1(true)}>
                Default Modal
              </Button>
              <Button onClick={() => setOpen3(true)}>
                Custom Modal Footer
              </Button>
            </Flex>

            <Modal
              open={open1}
              onCancel={() => setOpen1(false)}
              onOk={() => setOpen1(false)}
              title="Default Modal"
              centered
              closable={false}
            >
              Basic Modal
            </Modal>
            <Modal
              open={open3}
              onCancel={() => setOpen3(false)}
              centered
              footer={[
                <Button key="cancel" onClick={() => setOpen3(false)}>
                  Cancel
                </Button>,
                <Button key="submit" type="primary">
                  Save
                </Button>
              ]}
              title="Custom Footer Modal"
            >
              Custom footer buttons example.
            </Modal>
          </StorySection>
        </Col>

        <Col xs={24} md={12}>
          <StorySection>
            <StorySubTitle>Confirm Modal</StorySubTitle>
            <div>
              <Button onClick={() => setOpenCM(true)}>Confirm Delete</Button>
            </div>

            <ConfirmModal
              open={openCM}
              onOk={handleCMOk}
              onCancel={() => handleCMCancel()}
              title="Delete?"
              okText="Delete"
              cancelText="Cancel"
            >
              Are you sure you want to delete?
            </ConfirmModal>
          </StorySection>
        </Col>
      </Row>
    )
  }
}
