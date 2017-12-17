/* 上线环境和开发环境url区分 */

let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://127.0.0.1:3000'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://127.0.0.1:3000/online'
}

export default baseUrl
