/*
 * @Author: lzy
 * @Date: 2020-07-01 17:14:33
 * @FilePath: \my-init-M\src\utils\utils.js
 */
// 设置文档标题
export const setDocumentTitle = title => {
  document.title = title
}
/**
 * 设置cookie
 * @param {*} key 名称
 * @param {*} val 值
 * @param {*} time 失效时间
 */
export const setCookie = (key, val, time) => {
  var date = new Date()
  var expiresDays = time
  // 将时间转换为cookie设置时间的格式
  date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000)
  document.cookie = key + '=' + val + ';expires=' + date.toDateString()
}
/**
 * 获取cookie
 * @param {*} key 名称
 */
export const getCookie = (key) => {
  var getCookie = document.cookie.replace(/[ ]/g, '')
  var arrCookie = getCookie.split(';')
  var tips
  for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split('=')
    if (key === arr[0]) {
      tips = arr[1]
      break
    }
  }
  return tips
}
// 删除cookle
export const delCookie = (key) => {
  setCookie(key, '', -1)
}
// 时间处理
export const isSingular = ops => {
  if (ops - 10 < 0) {
    return '0' + ops
  } else {
    return ops
  }
}
// 时间差
export const etTimeLeft = datetimeTo => {
  const time1 = new Date(datetimeTo).getTime()
  const time2 = new Date().getTime()
  const mss = time1 - time2
  if (mss <= 0) {
    return false
  }
  let days = parseInt(mss / (1000 * 60 * 60 * 24))
  const hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = parseInt((mss % (1000 * 60)) / 1000)
  if (days !== 0) {
    days = isSingular(days)
  }
  return {
    days,
    hours: isSingular(hours),
    minutes: isSingular(minutes),
    seconds: isSingular(seconds)
  }
}
// 名字加密
export const formatName = name => {
  let newStr
  if (name.length === 2) {
    newStr = name.substr(0, 1) + '*' // 通过substr截取字符串从第0位开始截取,截取1个
  } else if (name.length > 2) {
    // 当名字大于2位时
    let char = ''
    for (let i = 0, len = name.length - 2; i < len; i++) {
      // 循环遍历字符串
      char += '*'
    }
    newStr = name.substr(0, 1) + char + name.substr(-1, 1)
  } else {
    newStr = name
  }

  return newStr
}
// 名字加密2
export const formatName2 = name => {
  const reg1 = /^[\u2E80-\u9FFF]+$/ // Unicode编码中的汉字范围
  if (!(reg1.test(name))) {
    return false
  }
  const reg = /(?<=.)./g
  const result = name.replace(reg, '*')
  return result
}
// 手机加密
export const formatPhone = phone => {
  if (!(/^1[3456789]\d{9}$/.test(phone))) {
    return false
  }
  const resultPhone = phone.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2')
  return resultPhone // 137****4148
}
// 身份证加密
export const formatId = IDBCursor => {
  const reg1 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/ // 检查身份证
  if (!(reg1.test(IDBCursor)) || typeof IDBCursor !== 'string') {
    return false
  }
  const resultPhone = IDBCursor.replace(/^(\d{3})\d{11}(\d+)/, '$1****$2')
  return resultPhone // 137****4148
}
// 随机颜色
export const randomRgb = () => {
  const R = Math.floor(Math.random() * 255)
  const G = Math.floor(Math.random() * 255)
  const B = Math.floor(Math.random() * 255)
  return {
    background: 'rgb(' + R + ',' + G + ',' + B + ')'
  }
}
