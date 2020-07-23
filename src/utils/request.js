/*
 * @Descripttion:
 * @version:
 * @Author: Lzy
 * @Date: 2020-06-18 13:57:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-21 17:48:59
 */
import Axios from 'axios'
import { Toast } from 'vant'
import config from '../config/index'
import md5 from 'js-md5'

const { baseServerUrl } = config

Axios.defaults.withCredentials = true // 让ajax携带cookie

const request = Axios.create({
  timeout: 10000
})

let toast = null
// 显示loading
function showLoading (show) {
  if (show) {
    toast = Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true,
      message: '加载中...'
    })
  }
}
// 关闭loading
function closeLoading (toast) {
  if (toast) {
    toast.clear()
  }
}
// 请求参数添加公参
function setData (param) {
  const sign = md5('param=' + JSON.stringify(param) + ';809e967a13197018cab84959bd189a67')
  const data = {
    param,
    sign
  }
  return data
}
// 设置baseURL
function setBaseUrl (url) {
  const baseUrl = (url.startsWith('http://') || url.startsWith('https://')) ? '' : baseServerUrl
  return baseUrl
}

//  请求拦截器
request.interceptors.request.use(function (config) {
  const { url, _showLoading = false, data } = config
  showLoading(_showLoading)
  config.data = setData(data)
  // 根据url前缀设置对应的baseURL
  config.baseURL = setBaseUrl(url)
  return config
}, function (error) {
  closeLoading(toast)
  Toast({
    type: 'fail',
    message: '网络不佳，请稍后重试',
    duration: 3000
  })
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  closeLoading(toast)
  return response
}, function (error) {
  closeLoading(toast)

  Toast({
    type: 'fail',
    message: '网络不佳，请稍后重试',
    duration: 3000
  })
  return Promise.reject(error)
})

export default request
