import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import type { Advisor } from '@/type';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3004',
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
  updateAdvisor(advisorId: string, newData: Partial<Advisor>): Promise<AxiosResponse<void>> {
    return apiClient.put<void>(`/advisors/${advisorId}`, newData);
  },
  getAdvisors(perPage: number, page: number): Promise<AxiosResponse<Advisor[]>> {
    return apiClient.get<Advisor[]>('/advisors?_limit=' + perPage + '&_page=' + page)
  },
  getAdvisorById(advisorId: number): Promise<AxiosResponse<Advisor>>{
    return apiClient.get<Advisor>('advisors/' + advisorId.toString())
}
};