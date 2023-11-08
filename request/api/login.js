import https from '@/request/request.js'
import baseUrl from '@/request/baseUrl.js'

const API_URL = {
	/** 登录接口 */
	LOGIN: `${baseUrl.base}index.php?s=api/passport/loginMpWxMobileNew`,
}
export const login = (params) => {
	return https.post(API_URL.LOGIN, params)
}