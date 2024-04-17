import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import CategoryView from '@/views/CategoryView.vue'
import NewsView from '@/views/NewsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import DetailCategoryView from '@/views/DetailCategoryView.vue'
import HomeView from '@/views/HomeView.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'

// News
import CreateNews from '@/views/news/CreateNews.vue'
import DetailNewsView from '@/views/news/DetailNewsView.vue'
import UpdateNewsView from '@/views/news/UpdateNewsView.vue'
import CategoryId from '../views/public/category/CategoryByIdView.vue'

// Public
import PublicLayout from '@/layout/PublicLayout.vue'
import PublicCategoryView from '@/views/public/PublicCategoryView.vue'
import LoginView from '@/views/public/LoginView.vue'
import RegisterView from '@/views/public/RegisterView.vue'
import NotFoundView from '@/views/error/NotFoundView.vue'
import DetailNewsPublic from '@/views/public/DetailNewsPublic.vue'

// Guard
import { auth } from '../config/firebase'

const requiredAuth = (to, from, next) => {
  const userAuth = auth.currentUser
  if (!userAuth) {
    alert('Login/Register terlebih dahulu')
    next({
      name: 'Login'
    })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Dashboard
    {
      path: '/dashboard',
      component: DashboardLayout,
      beforeEnter: requiredAuth,
      children: [
        {
          path: '',
          redirect: { name: 'Dashboard' }
        },
        {
          path: './',
          name: 'Dashboard',
          component: DashboardView
        },
        {
          path: 'news',
          name: 'News',
          component: NewsView
        },
        {
          path: 'news/create',
          name: 'CreateNews',
          component: CreateNews
        },
        {
          path: 'news/:id',
          name: 'DetailNews',
          component: DetailNewsView
        },
        {
          path: 'news/:id/edit',
          name: 'UpdateNews',
          component: UpdateNewsView
        },
        {
          path: 'profile',
          name: 'Profile',
          component: ProfileView
        },
        {
          path: 'category',
          name: 'Category',
          component: CategoryView
        },
        {
          path: 'category/:name',
          name: 'Category-name',
          component: DetailCategoryView
        }
      ]
    },

    // public
    {
      path: '/',
      component: PublicLayout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: HomeView
        },
        {
          path: '/news/:id',
          name: 'DetailPublic',
          component: DetailNewsPublic
        },
        {
          path: '/category',
          name: 'CategoryPublic',
          component: PublicCategoryView
        },
        {
          path: '/category/:id',
          name: 'CategoryById',
          component: CategoryId
        },
        {
          path: '/login',
          name: 'Login',
          component: LoginView
        },
        {
          path: '/register',
          name: 'Register',
          component: RegisterView
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: NotFoundView
        }
      ]
    }
  ]
})

export default router
