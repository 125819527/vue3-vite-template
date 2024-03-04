import { get, post } from '@/utils/methods'

export const loginApi = (params) => {
  return post('/auth/pwdLogin', params)
}
