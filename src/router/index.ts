import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

export const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts([
    ...routes,
  ]),
})

// 需手动处理热更新
if (import.meta.hot) {
  handleHotUpdate(router)
}
