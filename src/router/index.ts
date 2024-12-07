import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import NProgress from '@/utils/nprogress'

export const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts([
    ...routes,
  ]),
})

// 路由守卫
router.beforeEach((_to, _from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

// 需手动处理热更新
if (import.meta.hot) {
  handleHotUpdate(router)
}
