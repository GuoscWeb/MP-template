import https from '@/request/request.js'
import baseUrl from '@/request/baseUrl.js'

const API_URL = {
  /** 获取平台数据 */
  GET_PLATFORM_DATA: `${baseUrl.base}fuel_support/wxoa/Plant/index`,
}
export const getData = (params) => {
  return https.post(API_URL.GET_PLATFORM_DATA, params)
}

