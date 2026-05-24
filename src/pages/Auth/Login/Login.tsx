import {
  Button,
  Checkbox,
  FloatingField,
  Form,
  Input,
  Password
} from '@/components'
import { AuthTitle } from '@/components/Layout/AuthLayout/AuthLayout.style'
import { ROUTES } from '@/constants'
import { Col, Flex, Row } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface LoginFormValues {
  email: string
  password: string
  remember?: boolean
}

const Login = () => {
  const { t } = useTranslation('auth')

  const onFinish = (values: unknown) => {
    console.log(values as LoginFormValues)
  }

  return (
    <Flex gap={30} vertical align="center">
      <AuthTitle>{t('Login')}</AuthTitle>

      <Form layout="vertical" onFinish={onFinish}>
        <FloatingField name="email" label={t('Email')}>
          <Input autoFocus />
        </FloatingField>

        <FloatingField name="password" label={t('Password')}>
          <Password autoComplete="off" />
        </FloatingField>

        <Row gutter={16} align="middle">
          <Col xs={14}>
            <FloatingField name="remember" valuePropName="checked" mb={0}>
              <Checkbox>{t('RememberMe')}</Checkbox>
            </FloatingField>
          </Col>
          <Col xs={10}>
            <Button type="primary" htmlType="submit" block>
              {t('Login')}
            </Button>
          </Col>
        </Row>
      </Form>

      <Link to={ROUTES.AUTH.FORGOT_PASSWORD}>{t('ForgotPassword')}</Link>
    </Flex>
  )
}

export default Login
