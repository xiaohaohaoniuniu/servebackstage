import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/Admin'
import Header from '@/components/Header'
import Login from '@/components/Login'
import Register from '@/components/Register'
import List from '@/components/List'
import StateChange from "@/components/StateChange"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/stateChange',
      name: 'StateChange',
      component: StateChange
    }
  ],
  mode:'history'
})
