import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComponentsView from '@/views/ComponentsView.vue'
import ProductVue from '@/components/Products/ProductVue.vue'
import ProductID from '@/components/Products/ProductID.vue'
import NotFoundVue from '@/components/NotFoundVue.vue'
import AdminView from '@/views/AdminView.vue'
import TestView from '@/views/TestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/products/:id',
      name: 'products',
      component: ProductID
    },
    {
      path: '/admin',
      name: 'admin',
      component: TestView,
      meta: { layout: 'admin' },
      children: [
        {
          path: 'inbox', component: TestView,
          meta: { layout: 'admin' }
        },
      ],
    },
    {
      path: '/components',
      name: 'components',
      component: ComponentsView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundVue
    }

  ],
})

export default router
