import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Movify.vue'
import MovieInsertion from './NewMovie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/NewMovie',
    name: 'MovieInsertion',
    component: MovieInsertion
  }
]

const router = new VueRouter({
  routes
})

export default router
