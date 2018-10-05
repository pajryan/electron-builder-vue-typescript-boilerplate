import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/appUpdate',
      name: 'application update',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ApplicationUpdate.vue'),
    },
    {
      path: '/stateManagement',
      name: 'state management',
      component: () => import(/* webpackChunkName: "about" */ './views/StateManagement.vue'),
    },
    {
      path: '/sampleChart',
      name: 'sample chart',
      component: () => import(/* webpackChunkName: "about" */ './views/Chart.vue'),
    },
    {
      path: '/bootstrap',
      name: 'bootstrap',
      component: () => import(/* webpackChunkName: "about" */ './views/Bootstrap.vue'),
    }
  ]
})
