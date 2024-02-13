// 个人登录信息键名
const INFO_KEY = 'shopping_info'
// 搜索记录键名
const HISTORY_KEY = 'history_list'
// 获取个人信息
export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  const defaultObj = { token: '', userId: '' }
  return result ? JSON.parse(result) : defaultObj
}
// 设置个人信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
// 移除个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
// 获取搜索历史
export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}
// 设置个人历史
export const setHistoryList = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
