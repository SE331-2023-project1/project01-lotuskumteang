import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import type { Advisor } from '@/type';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/SE331-2023-project1/project01-lotuskumteang',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  addAdvisor(advisor: Advisor): Promise<AxiosResponse<void>> {
    return apiClient.post<void>('/advisors', advisor);
  },
  updateAdvisor(id: string, newData: Partial<Advisor>): Promise<AxiosResponse<void>> {
    return apiClient.put<void>(`/advisors/${id}`, newData);
  },
  getAdvisors(perPage: number, page: number): Promise<AxiosResponse<Advisor[]>> {
    return apiClient.get<Advisor[]>('/advisors?_limit=' + perPage + '&_page=' + page)
  },
  getAdvisorById(id: number): Promise<AxiosResponse<Advisor>>{
    return apiClient.get<Advisor>('advisors/' + id.toString())
}
};