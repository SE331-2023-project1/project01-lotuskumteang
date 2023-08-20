import type { StudentItem } from '@/type'
import { defineStore } from 'pinia'

export const useStudentStore = defineStore('Student', {
  state: () => ({
    students: [] as StudentItem[]
  }),
  actions: {
    setStudent(student: StudentItem[]) {
      this.students = student
    },
    addStudent(student: StudentItem) {
      this.students.push(student)
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
