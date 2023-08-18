export interface EventItem {
  studentId: number,
    name: string,
    surname: string,
    image: string,
    courseId: string[]
}

// StudentItem type
export interface StudentItem {
  id: string
  name: string
  surname: string
  image: string
  id: string
  courseId: [string]
}

export interface CommentItem {
  comment: string
}

export interface Advisor {
  id: string;
  name: string;
  surname: string;
  image: string;
}
