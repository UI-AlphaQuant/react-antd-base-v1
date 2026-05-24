import { Alert as AntdAlert } from 'antd'
import styled from 'styled-components'

export const Alert = styled(AntdAlert)`
  font-size: 14px;
  line-height: 20px;
  border-radius: 6px;
  padding: 8px 12px;
  color: inherit;

  // ===== Content =====
  & .ant-alert-section {
    .ant-alert-title {
      font-size: inherit;
    }
  }

  & .ant-alert-actions {
  }

  // ===== Success =====
  &.ant-alert-success {
    background-color: ${({ theme }) => theme.colors['success-light']};
    border-color: ${({ theme }) => theme.colors['success-medium']};
  }

  // ===== Error =====
  &.ant-alert-error {
    background-color: ${({ theme }) => theme.colors['error-light']};
    border-color: ${({ theme }) => theme.colors['error-medium']};
  }

  // ===== Warning =====
  &.ant-alert-warning {
    background-color: ${({ theme }) => theme.colors['warning-light']};
    border-color: ${({ theme }) => theme.colors['warning-medium']};
  }

  // ===== Info =====
  &.ant-alert-info {
    background-color: ${({ theme }) => theme.colors['info-light']};
    border-color: ${({ theme }) => theme.colors['info-medium']};
  }

  // ===== With Description =====
  &.ant-alert-with-description {
    padding: 18px;
  }

  // ===== Without Icon =====
  &:not(.ant-alert-no-icon) {
  }

  // ===== With Icon =====
  & .ant-alert-icon {
    .anticon {
    }
  }
`
