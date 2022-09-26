import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Machines from '@/components/Machines'
import Operators from '@/components/Operators'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/operators',
      name: 'Operators',
      component: Operators
    },
    {
      path: '/machines',
      name: 'Machines',
      component: Machines
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
