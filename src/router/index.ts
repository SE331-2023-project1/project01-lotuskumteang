import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '../views/StudentListView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NProgress from 'nprogress'
import StudentService from '@/services/StudentService'
import { useStudentStore } from '@/stores/student'

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
    // {
    //   path: '/passenger/:id',
    //   name: 'passenger-layout',
    //   component: StudentLayoutView,
    //   props: true,
    //   beforeEnter: (to) => {
    //     const id: number = parseInt(to.params.id as string)
    //     const studentStore = useStudentStore()
    //     StudentService.getStudentById(id)
    //       .then((response) => {
    //         studentStore.setStudent(response.data)
    //         // PassengerService.getAirlineById(Number(response.data.airlineId))
    //         //   .then((response) => {
    //         //     airlineStore.setAirline(response.data)
    //         //   })
    //         //   .catch((error) => {
    //         //     console.log(error)
    //         //     if (error.response && error.response.status === 404) {
    //         //       return { name: '404-resource', params: { resource: 'AirlineId' } }
    //         //     }
    //         //   })
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //         if (error.response && error.response.status === 404) {
    //           return { name: '404-resource', params: { resource: 'PassengerId' } }
    //         }
    //       })
    //   },
    //   children: [
    //     {
    //       path: '',
    //       name: 'passenger-detail',
    //       component: PassengerDetailView,
    //       props: true
    //     },
    //     {
    //       path: 'airline',
    //       name: 'passenger-airline',
    //       component: PassengerAirlineView,
    //       props: true
    //     },
    //     {
    //       path: 'edit',
    //       name: 'passenger-edit',
    //       component: PassengerEditView,
    //       props: true
    //     }
    //   ]
    // },
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
