/* 上线环境和开发环境url区分 */

let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://call.anavss.com'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = ''
}

export default baseUrl
