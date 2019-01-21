import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NewAccount from '@/components/NewAccount'
import AccountDetails from '@/components/AccountDetails'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/account/*',
      name: 'Account details',
      component: AccountDetails
    }, {
      path: '/newaccount',
      name: 'New Account',
      component: NewAccount
    }, {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
