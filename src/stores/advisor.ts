import type { Advisor } from '@/type'
import { defineStore } from 'pinia'

export const useAdvisorStore = defineStore('advisor', {
  state: () => ({
    advisor: null as Advisor | null,
    newAdvisors: [] as Advisor[]
  }),
  actions: {
    setAdvisor(advisor: Advisor) {
      this.advisor = advisor
    },
    addAdvisor(advisor: Advisor) {
      this.newAdvisors.push(advisor)
    }
  },
})
