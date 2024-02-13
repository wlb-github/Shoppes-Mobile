import store from '@/store'
import axios from 'axios'
import { Toast } from 'vant'
const instance = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 开启loading，禁止背景点击
  Toast.loading({
    message: '加载中...',
    forbidClick: true, // 禁止背景点击
    loadingType: 'spinner', // 配置加载图标
    duration: 0 // 持续展示 toast
  })
  // 只要有token，就在请求时携带，便于请求需要授权的接口
  const token = store.getters.token
  if (token) {
    // 特殊字符的中括号语法
    config.headers['Access-Token'] = token
    // 后端规定的数值
    config.headers.platform = 'H5'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么

  const res = response.data
  if (res.status !== 200) {
    // 给出错误提示,   Toast单例模式，后面覆盖前面的
    // 同时只能存在一个Toast
    Toast(res.message)
    // 抛出错误的promise
    return Promise.reject(res.message)
  } else {
    // 正确逻辑，清除加载效果
    Toast.clear()
  }
  return res
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default instance
