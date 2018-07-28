import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Home from '@/components/home'
import Login from '@/components/login'
import Register from '@/components/register'

import Product from '@/components/product'
import Mine from '@/components/mine'
import Neirong from '@/components/neirong'
import Shezhi from '@/components/shezhi'
import Detail from '@/components/detail'
import Addmoney from '@/components/addmoney'
import Jianmoney from '@/components/jianmoney'
import Outmoney from '@/components/outmoney'
import Outtake from '@/components/outtake'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/main",component:Main,
    children:[{
      path: '/home',
      component: Home
    },
    {
      path: '/product',
      component: Product
    },
    {
      path: '/mine',
      component: Mine
    }]
    },
     {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
    path:'/neirong',
    component: Neirong
  },
  {
  path:'/shezhi',
  component: Shezhi
},
{
  path:'/detail',
  component: Detail
},
{
  path:'/addmoney',
  component: Addmoney
},
{
  path:'/jianmoney',
  component: Jianmoney
},
{
  path:'/outmoney',
  component: Outmoney
},
{
  path:'/outtake',
  component: Outtake
}
  ]
})
