import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/layout/Layout'),
      children: [
        {
          path: '/',
          name: 'Index',
          component: () => import('@/layout/Index')
        },
        {
          path: 'widget',
          name: 'Widget',
          component: () => import('@/layout/Widget')
        }
      ]
    }
  ]
})
