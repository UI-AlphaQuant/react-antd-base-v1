import { spinAnimation } from '@/theme/styles/sharedStyles'
import { Spin as AntdSpin } from 'antd'
import styled from 'styled-components'

export const Spin = styled(AntdSpin)`
  &.ant-spin {
    // ===== Custom Indicator SVG =====
    .loader-svg {
      width: 56px;
      height: 56px;
      animation: ${spinAnimation} 0.3s linear infinite;
      background: white;
      border-radius: 50%;
    }
  }
`
