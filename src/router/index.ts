import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '../views/StudentListView.vue'
import StudentLayoutView from '../views/details/StudentLayoutView.vue'
import StudentDetailView from '../views/details/StudentDetailView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NProgress from 'nprogress'
import StudentService from '@/services/StudentService'
import { useStudentStore } from '@/stores/student'
import AdvisorListView from '../views/AdvisorListView.vue'
import AdvisorLayoutView from '../views/details/AdvisorLayoutView.vue'
import { useAdvisorStore } from '@/stores/advisor'
import AdvisorService from '@/services/AdvisorService'
import AdvisorDetailView from '@/views/details/AdvisorDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'student-list',
      component: StudentListView,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || '1')
      })
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/student/:id',
      name: 'student-layout',
      component: StudentLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const studentStore = useStudentStore()
        const advisorStore = useAdvisorStore()
        StudentService.getStudentById(id)
          .then((response) => {
            studentStore.setStudent(response.data)
            AdvisorService.getAdvisorById(Number(response.data.advisorId))
              .then((response) => {
                advisorStore.setAdvisor(response.data)
              })
              .catch((error) => {
                console.log(error)
                if (error.response && error.response.status === 404) {
                  return { name: '404-resource', params: { resource: 'id' } }
                }
              })
          })
          .catch((error) => {
            console.log(error)
            if (error.response && error.response.status === 404) {
              return { name: '404-resource', params: { resource: 'id' } }
            }
          })
      },
      children: [
        {
          path: '',
          name: 'student-detail',
          component: StudentDetailView,
          props: true
        },
        {
          path: 'advisor',
          name: 'advisor-detail-student',
          component: AdvisorDetailView,
          props: true
        },
      ]
    },
    //advisor
    {
      path: '/advisor',
      name: 'advisor-list',
      component: AdvisorListView,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || '1')
      })
    },
    {
      path: '/advisor/:id',
      name: 'advisor-layout',
      component: AdvisorLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const advisorStore = useAdvisorStore()
        return AdvisorService.getAdvisorById(id)
          .then((response) => {
            advisorStore.setAdvisor(response.data)
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              return {
                name: '404-resource',
                params: { resource: 'advisor' }
              }
            } else {
              return { name: 'network-error' }
            }
          })
      },
      children: [
        {
          path: 'advisor-detail',
          name: 'advisor-detail',
          component: AdvisorDetailView,
          props: true
        },
      ]
    },

    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
