import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComponentsView from '@/views/ComponentsView.vue'
import ProductID from '@/components/Products/ProductID.vue'
import NotFoundVue from '@/components/NotFoundVue.vue'
import PendingProducts from '@/components/Admin/PendingProducts.vue'
import ApprovedProducts from '@/components/Admin/ApprovedProducts.vue'

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
      component: PendingProducts,
      meta: { layout: 'admin' },
      children: [
        {
          path: 'pending', component: PendingProducts,
          meta: { layout: 'admin' }
        },
        {
          path: 'approved', component: ApprovedProducts,
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
