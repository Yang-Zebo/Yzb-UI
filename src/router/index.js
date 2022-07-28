import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    name: 'ShowComponent',
    path: '/',
    redirect: '/ShowForm',
    component: () => import('@/views/Layout'),
    meta: { title: '组件首页', icon: 'el-icon-location'},
    children: [
      {
        name: 'ShowForm',
        path: 'ShowForm',
        component: () => import('@/views/ShowComponent/ShowForm'),
        meta: { title: '表单页面', icon: 'el-icon-location'}
      },
      {
        name: 'ShowTable',
        path: 'ShowTable',
        component: () => import('@/views/ShowComponent/ShowTable'),
        meta: { title: '表格页面', icon: 'el-icon-location'}
      }
    ]
  },
  {
    name: 'TestComponents',
    path: '/TestComponents',
    component: () => import('@/views/Layout'),
    meta: { title: '测试页面', icon: 'el-icon-location'},
    children: [
      {
        name: 'TestComponents1',
        path: 'TestComponents11',
        component: () => import('@/views/TestComponents'),
        meta: { title: '测试页面1', icon: 'el-icon-location'}
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
