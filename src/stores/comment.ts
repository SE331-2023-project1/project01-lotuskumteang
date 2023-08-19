import { defineStore } from 'pinia'
export const useCommentStore = defineStore('comment', {
  state: () => ({
    comment: '' as string
  }),
  actions: {
    setComment(comment: string) {
      this.comment = comment
    },
    resetComment() {
      this.comment = ''
    }
  }
})
