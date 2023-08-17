import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { StudentItem} from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/SE331-2023-project1/project01-lotuskumteang',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getStudentItems(perPage: number, page: number): Promise<AxiosResponse<StudentItem[]>> {
    return apiClient.get<StudentItem[]>('/students?_page=' + page + '&_limit=' + perPage)
  },
  getStudentItemById(id: number): Promise<AxiosResponse<StudentItem>> {
    return apiClient.get<StudentItem>('/students/' + id.toString())
  },
  // getAirlineById(id: number): Promise<AxiosResponse<StudentItem>> {
  //   return apiClient.get<StudentItem>('airline/' + id.toString())
  // }
}
