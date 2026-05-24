import { Button, FallbackLayout, H1, TextXL } from '@/components'
import { ErrorBox } from '../Fallback.style'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants'
import { useTranslation } from 'react-i18next'

// Usage: Route does not exist | Wrong URL
const PageNotFound = () => {
  const { t } = useTranslation('common')

  const navigate = useNavigate()

  return (
    <FallbackLayout>
      <ErrorBox>
        <H1 color="primary" weight={700}>
          {t('Error404Title')}
        </H1>
        <TextXL color="dark">{t('Error404Description')}</TextXL>
        <Button onClick={() => navigate(ROUTES.APP.DASHBOARD)}>
          {t('BackToHome')}
        </Button>
      </ErrorBox>
    </FallbackLayout>
  )
}

export default PageNotFound
