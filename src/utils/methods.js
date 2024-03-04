import request from '@/utils/request'
export function get(url, params, hideLoading, headers) {
  return request.get(url, { params, hideLoading, headers })
}

export function post(url, params, hideLoading, headers) {
  return request.post(url, params, {
    headers,
    hideLoading
  })
}
