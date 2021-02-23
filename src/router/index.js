import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import HelloWorld from '@/components/HelloWorld';
import Test from '@/components/Test';
import Home from '@/page/Home';
import Explorer from '@/page/Explorer';
import Cart from '@/page/Cart'
import Me from '@/page/Me';



export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/home',
      name:'Home',
      component: Home
    },
    {
      path: '/explorer',
      name:'Categories',
      component: Explorer
    },
    {
      path: '/cart',
      name:'ShoppingCart',
      component: Cart
    },
    {
      path: '/me',
      name:'Me',
      component: Me
    }
  ]
})
