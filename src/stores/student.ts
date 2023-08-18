import type { StudentItem } from '@/type'
import { defineStore } from 'pinia'

export const useStudentStore = defineStore('Student', {
  state: () => ({
    student: null as StudentItem | null
  }),
  actions: {
    setStudent(student: StudentItem) {
      this.student = student
    }
  }
})

// export const useAirlineStore = defineStore('airline', {
//   state: () => ({
//     airline: null as Student | null
//   }),
//   actions: {
//     setAirline(airline: Student) {
//       this.airline = airline
//     }
//   }
// })
