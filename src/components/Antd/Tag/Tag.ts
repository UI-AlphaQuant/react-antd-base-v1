import { Tag as AntdTag } from 'antd'
import styled from 'styled-components'

export const Tag = styled(AntdTag)`
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 3px;
  padding: 4px 12px;
  height: 30px;

  // ===== Tag Icons =====
  .tabler-icon {
    height: 14px;
    width: 14px;
  }

  .anticon-close {
    font-size: 14px;
  }

  // ===== Tag Filled =====
  &.ant-tag-filled {
    &.ant-tag-default {
      color: ${({ theme }) => theme.colors['gray-600']};
      background: ${({ theme }) => theme.colors['gray-100']};
      border-color: ${({ theme }) => theme.colors['gray-300']};
    }

    &.ant-tag-success {
      color: ${({ theme }) => theme.colors['success-dark']};
      background: ${({ theme }) => theme.colors['success-light']};
      border-color: ${({ theme }) => theme.colors['success-medium']};
    }

    &.ant-tag-error {
      color: ${({ theme }) => theme.colors['error-dark']};
      background: ${({ theme }) => theme.colors['error-light']};
      border-color: ${({ theme }) => theme.colors['error-medium']};
    }

    &.ant-tag-warning {
      color: ${({ theme }) => theme.colors['warning-dark']};
      background: ${({ theme }) => theme.colors['warning-light']};
      border-color: ${({ theme }) => theme.colors['warning-medium']};
    }

    &.ant-tag-processing {
      color: ${({ theme }) => theme.colors['info-dark']};
      background: ${({ theme }) => theme.colors['info-light']};
      border-color: ${({ theme }) => theme.colors['info-medium']};
    }
  }

  // ===== Tag Outlined =====
  &.ant-tag-outlined {
  }

  // ===== Tag Solid =====
  &.ant-tag-solid {
  }
`
