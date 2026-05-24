import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// English translations
import authEn from './locales/en/auth.json'
import accountEn from './locales/en/account.json'
import commonEn from './locales/en/common.json'

// French translations
import authFr from './locales/fr/auth.json'
import accountFr from './locales/fr/account.json'
import commonFr from './locales/fr/common.json'
import { APP_LANGUAGE } from '@/constants/storage'

const savedLanguage = localStorage.getItem(APP_LANGUAGE) || 'en'

i18n.use(initReactI18next).init(
  {
    resources: {
      en: {
        auth: authEn,
        account: accountEn,
        common: commonEn
      },
      fr: {
        auth: authFr,
        account: accountFr,
        common: commonFr
      }
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    ns: ['auth', 'account', 'common'], // namespaces
    defaultNS: 'common',
    interpolation: {
      escapeValue: false // React already does escaping
    },
    debug: false // set false in production
  },
  (error) => {
    if (error) {
      console.error('i18n initialization error:', error)
    } else {
      console.log('i18n initialized successfully')
    }
  }
)

export default i18n

// USAGE EXAMPLES:
// const { t } = useTranslation();
// <h1>{t('Welcome')}</h1>
// <h1>{t('auth:Login')}</h1>
