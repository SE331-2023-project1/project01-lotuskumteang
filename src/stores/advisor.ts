import type { Advisor } from '@/type'
import { defineStore } from 'pinia'

export const useAdvisorStore = defineStore('advisor', {
  state: () => ({
    advisors: [] as Advisor[]
  }),
  actions: {
    setAdvisor(advisor: Advisor[]) {
      this.advisors = advisor
    },
    addAdvisor(advisor: Advisor) {
      this.advisors.push(advisor)
    }
  },
  getters: {
    getAdvisorById: (state) => (id: string) => {
      return state.advisors.find((advisor) => advisor.id === id) || null;
    }
  }
})
