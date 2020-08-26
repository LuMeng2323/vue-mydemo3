import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Welcome from '@/components/Welcome'
import Users from '@/components/user/Users'

// 这里是左侧菜单栏角色管理组件页面
import Home from '@/views/Home'
import Role from '@/views/Role'


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect:'/Welcome',
      children:[
        {
          path:'/Welcome',
          component:Welcome
        },
        {
          path:'/Users',
          component:Users
        },
        {
          path:'/home',
          component:Home
        },{
          path:'/role',
          component:Role
        }
      ]
      // path:'/',
      // redirect:'/login'
    },{
      path:'/login',
      component:Login
    }
  ]
})
