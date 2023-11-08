/**
 * 接口域名的管理
 */
let baseUrl = {
	/** 基础域名 */
	base: ''
}
// switch (process.env.ENV_TYPE) {
//     case 'development':
//         baseUrl.base = "https://youtu.95504.net/"  //开发环境url
//         break
//     case 'test':
//         baseUrl.base = "https://youtu.95504.net/"   //测试环境url
//         break
//     case 'production':
//         baseUrl.base = "https://sichuan.95504.net/"   //生产环境url
//         break
// }
baseUrl.base = process.env.UNI_APP_URL
export default baseUrl;
