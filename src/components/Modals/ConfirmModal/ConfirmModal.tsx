import { ModalProps } from 'antd'
import { Button, ConfirmModalWrap, Paragraph } from '../../Antd'
import { ReactNode } from 'react'

interface ConfirmModalProps extends Omit<ModalProps, 'footer'> {
  content?: ReactNode
  okText?: string
  cancelText?: string
  loading?: boolean
}

export function ConfirmModal({
  width = 360,
  title = 'Are you sure?',
  content,
  okText = 'OK',
  cancelText = 'Cancel',
  maskClosable = false,
  loading = false,
  children,
  ...rest
}: ConfirmModalProps) {
  return (
    <ConfirmModalWrap
      width={width}
      title={title}
      centered
      maskClosable={maskClosable}
      footer={
        <div className="modal-footer">
          <Button type="default" onClick={rest.onCancel}>
            {cancelText}
          </Button>

          <Button type="primary" onClick={rest.onOk} loading={loading}>
            {okText}
          </Button>
        </div>
      }
      {...rest}
    >
      {children ?? <Paragraph>{content}</Paragraph>}
    </ConfirmModalWrap>
  )
}

export default ConfirmModal
