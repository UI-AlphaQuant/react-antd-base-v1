import { FallbackLayout, H1, TextXL } from '@/components'
import {
  ErrorStackItem,
  ErrorStackList,
  ServerErrorBox
} from '../Fallback.style'
import { useTranslation } from 'react-i18next'

interface ServerErrorProps {
  error?: unknown
}

const ServerError = ({ error }: ServerErrorProps) => {
  const { t } = useTranslation('common')

  let message: string | undefined
  let stack: string | undefined

  if (error instanceof Error) {
    message = error.message
    stack = error.stack
  }

  return (
    <FallbackLayout>
      <ServerErrorBox>
        <H1 color="primary" weight={700}>
          {t('Error500Title')}
        </H1>

        <TextXL color="dark" weight={600}>
          {message || t('Error500Description')}
        </TextXL>

        {/* Show stack only in development */}
        {import.meta.env.DEV && stack && (
          <ErrorStackList>
            {stack.split('\n').map((line, index) => (
              <ErrorStackItem key={index}>{line}</ErrorStackItem>
            ))}
          </ErrorStackList>
        )}
      </ServerErrorBox>
    </FallbackLayout>
  )
}

export default ServerError
