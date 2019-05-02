import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Social from './views/SocialMediaMarketing.vue'
import Video from './views/Video.vue'
import App from './views/App'
import Web from './views/Web'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/smm',
      name:'smm',
      component:Social
    },
    {
      path:'/video',
      name:'Video',
      component:Video
    },
    {
      path:'/app',
      name:'App',
      component:App
    },
    {
      path:'/web',
      name:'Web',
      component:Web
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
