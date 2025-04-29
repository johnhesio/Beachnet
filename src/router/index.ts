import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Sobre from '../views/Home/sobre_nos/sobre_nos.vue'
import Planos from '../views/Home/planos_fibra/planos_fibra.vue'
import Contatos from '../views/Home/atendimento/atendimento.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/planos',
    name: 'Planos',
    component: Planos
  },
  {
    path: '/contatos',
    name: 'Contatos',
    component: Contatos
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
