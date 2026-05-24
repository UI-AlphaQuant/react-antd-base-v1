import { flex } from '@/theme/styles/sharedStyles'
import { Modal as AntdModal } from 'antd'
import styled from 'styled-components'

export const Modal = styled(AntdModal)`
  margin: 30px auto;
  padding: 0;

  .ant-modal-container {
    // ===== Modal Header =====
    .ant-modal-header {
      .ant-modal-title {
        font-size: 24px;
      }
    }

    // ===== Modal Close Button =====
    .ant-modal-close {
      height: 24px;
      width: 24px;
      right: 6px;
      top: 6px;
    }

    // ===== Modal Content =====
    .ant-modal-content {
      padding: 16px 16px;
      border-radius: 6px;
      overflow: hidden;
    }

    // ===== Modal Footer =====
    .ant-modal-footer {
      ${flex('row', '16px', 'center', 'end')};
      margin-top: 24px;

      .ant-btn {
        & + .ant-btn {
        }
      }
    }
  }
`

// Confirmation Common Modal
export const ConfirmModalWrap = styled(Modal)`
  // ===== Modal Footer =====
  .modal-footer {
    ${flex('row', '16px', 'center', 'end')};
    width: 100%;
  }
`
