/*
 * @Author: lzy
 * @Date: 2020-07-01 17:14:33
 * @FilePath: \my-init-M\src\api\index.js
 */
import request from '../utils/request'
// 获取活动信息
export function getActivityInformation (params) {
  return request({
    url: '/activity_api/api/v1/pick/get_info',
    method: 'POST',
    data: params,
    _showLoading: true // 是否显示loading
  })
}
