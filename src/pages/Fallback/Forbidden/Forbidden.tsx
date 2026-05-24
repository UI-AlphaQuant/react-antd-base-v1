import { Button, FallbackLayout, H1, TextXL } from '@/components'
import { ErrorBox } from '../Fallback.style'
import { ROUTES } from '@/constants'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// User is logged in but does not have permission
const Forbidden = () => {
  const { t } = useTranslation('common')

  const navigate = useNavigate()

  return (
    <FallbackLayout>
      <ErrorBox>
        <H1 color="primary" weight={700}>
          {t('Error403Title')}
        </H1>
        <TextXL color="dark">{t('Error403Description')}</TextXL>
        <Button onClick={() => navigate(ROUTES.APP.DASHBOARD)}>
          {t('BackToHome')}
        </Button>
      </ErrorBox>
    </FallbackLayout>
  )
}

export default Forbidden
