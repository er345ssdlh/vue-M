/*
 * @Author: lzy
 * @Date: 2020-07-23 14:33:37
 * @FilePath: \my-init-M\src\utils\localStorage.js
 */
// 获取
export const getlocal = (userkey) => {
  return JSON.parse(window.localStorage.getItem(userkey))
}
// 设置
export const setlocal = (userkey, data) => {
  window.localStorage.setItem(userkey, JSON.stringify(data))
}
// 删除
export const removelocal = (userkey) => {
  window.localStorage.removeItem(userkey)
}
