import { Button, FloatingField, Form, Input } from '@/components'
import { AuthTitle } from '@/components/Layout/AuthLayout/AuthLayout.style'
import { ROUTES } from '@/constants'
import { Flex } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface ForgotPasswordFormValues {
  email: string
}

const ForgotPassword = () => {
  const { t } = useTranslation('auth')

  const onFinish = (values: unknown) => {
    console.log(values as ForgotPasswordFormValues)
  }

  return (
    <Flex gap={30} vertical align="center">
      <AuthTitle>{t('ForgotPassword')}</AuthTitle>

      <Form layout="vertical" onFinish={onFinish}>
        <FloatingField name="email" label={t('Email')}>
          <Input autoFocus />
        </FloatingField>

        <Button type="primary" htmlType="submit" block>
          {t('SendResetLink')}
        </Button>
      </Form>

      <Link to={ROUTES.AUTH.LOGIN}>{t('BackToLogin')}</Link>
    </Flex>
  )
}

export default ForgotPassword
