import { createI18n } from 'vue-i18n'
import ENMessages from '@/locales/en.json'
import ZHMessages from '@/locales/zh.json'

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: ENMessages,
    zh: ZHMessages,
  },
  legacy: false,
  globalInjection: true,
})
