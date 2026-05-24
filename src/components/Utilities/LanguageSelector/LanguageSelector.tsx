import { Select } from '@/components/Antd'
import { APP_LANGUAGE } from '@/constants/storage'
import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation()

  const handleChange = (value: string) => {
    i18n.changeLanguage(value)
    localStorage.setItem(APP_LANGUAGE, value)
  }

  const languageLabels: Record<string, string> = {
    en: 'English',
    fr: 'Français'
  }

  const options = Object.entries(languageLabels).map(([value, label]) => ({
    value,
    label
  }))

  return (
    <Select
      size="small"
      value={i18n.language}
      onChange={handleChange}
      options={options}
    />
  )
}

export default LanguageSelector
