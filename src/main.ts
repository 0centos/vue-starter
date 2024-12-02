import { createApp } from 'vue'
import { createPinia } from 'pinia'
import useReset from './plugins/pinia/SetupReset'
import App from './App.vue'
import { router } from './router'
import 'virtual:uno.css' // unocss

const app = createApp(App)

app.use(createPinia().use(useReset))
app.use(router)

app.mount('#app')
