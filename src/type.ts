export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
  petsAllowed: boolean
}

// StudentItem type
export interface StudentItem {
  id: string
  name: string
  surname: string
  image: string
  advisorId: string
  courseId: [string]
}

export interface CommentItem {
  comment: string
}