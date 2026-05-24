import { Form } from 'antd'
import styled from 'styled-components'

export const FormItem = styled(Form.Item)`
  &.ant-form-item {
    .ant-form-item-control-input {
    }

    &.ant-form-item-with-help {
      .ant-form-item-explain {
        font-size: small;
      }
    }
  }
`
