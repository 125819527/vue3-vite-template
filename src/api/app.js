import { get, post } from '@/utils/methods'

// 账号密码登陆
export const loginApi = (params) => {
  return post('/auth/pwdLogin', params)
}

//注册
export const registerApi = (params) => {
  return post('/auth/register', params)
}
//退出
export const logoutApi = (params) => {
  return post('/auth/logout', params)
}

//用户
// 获取用户列表
export const getUserListApi = (params) => {
  return get('/user/getList', params)
}

export const delUserApi = (params) => {
  return post('/user/delete', params)
}

export const updateUserApi = (params) => {
  return post('/user/updateUser', params)
}

// 更新用户角色
export const updateUserRoleApi = (params) => {
  return post('/user/updateUserRole', params)
}

//角色
export const addRoleApi = (params) => {
  return post('/role/add', params)
}

export const delRoleApi = (params) => {
  return post('/role/deleteById', params)
}
export const getRoleListApi = (params) => {
  return get('/role/getList', params)
}
export const updateRoleApi = (params) => {
  return post('/role/update', params)
}

//地点

export const getAreaListApi = (params) => {
  return get('/area/getList', params)
}

//景点
export const getScenicListApi = (params) => {
  return get('/travel/getList', params)
}

export const getScenicDetailApi = (params) => {
  return get('/travel/getTravelDetail', params)
}

export const searchSceniclApi = (params) => {
  return get('/travel/search', params)
}

// 评论
export const getScenicCommentApi = (params) => {
  return get('/comment/getList', params)
}

export const addScenicCommentApi = (params) => {
  return post('/comment/save', params)
}

// 订单
export const delOrderApi = (params) => {
  return post('/order/deleteById', params)
}

export const getOrderListApi = (params) => {
  return get('/order/getList', params)
}
export const addOrderApi = (params) => {
  return post('/order/save', params)
}
export const updateOrderApi = (params) => {
  return post('/order/update', params)
}

// 酒店
export const getHotelApi = (params) => {
  return post('/hotel/getListByArea', params)
}

// 活动
export const getImgApi = (params) => {
  return get('/img/getList', params)
}
