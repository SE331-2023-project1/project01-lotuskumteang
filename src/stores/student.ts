import type { StudentItem } from '@/type'
import { defineStore } from 'pinia'

export const useStudentStore = defineStore('Student', {
  state: () => ({
    student: null as StudentItem | null,
    newStudents: [] as StudentItem[]
  }),
  actions: {
    setStudent(student: StudentItem) {
      this.student = student
    },
    addStudent(student: StudentItem) {
      this.newStudents.push(student)
    }
  }
})