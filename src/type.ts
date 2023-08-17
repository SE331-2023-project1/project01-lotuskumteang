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
  studentId: string
  name: string
  surname: string
  image: string
  courseId: [string]
}