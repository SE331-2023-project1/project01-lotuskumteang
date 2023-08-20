import { defineStore } from 'pinia'
export const useCommentStore = defineStore('comment', {
  state: () => ({
    studentId: [0] as number[],
    comment: [''] as string[]
  }),
  actions: {
    getIndex(studentId: number) {
      const index = this.studentId.indexOf(studentId)
      if (index == -1) {
        this.studentId.push(studentId)
        this.comment.push('')
        return this.studentId.length-1
      }
      return index
    },
    setComment(studentId: number, comment: string) {
      const index = this.studentId.indexOf(studentId)
      if (index == -1) {
        this.studentId.push(studentId)
        this.comment.push(comment)
      } else {
        this.comment[index] = comment
      }
    }
  }
})
