import type { StudentItem } from '@/type'
import { defineStore } from 'pinia'

export const useStudentStore = defineStore('Student', {
  state: () => ({
    Student: null as StudentItem | null
  }),
  actions: {
    setStudent(Student: StudentItem) {
      this.Student = Student
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
