import { createApp } from 'vue'
import { createPinia } from 'pinia'
import useReset from './plugins/pinia/SetupReset'
import App from './App.vue'
import { router } from './router'
import { i18n } from '@/utils/i18n' // 国际化
import 'virtual:uno.css' // unocss

const app = createApp(App)

app.use(createPinia().use(useReset))
app.use(router)
app.use(i18n)

app.mount('#app')
