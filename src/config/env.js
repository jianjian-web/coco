/* 上线环境和开发环境url区分 */

let baseUrl = ''
let ws = ''
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://call.anavss.com'
  ws = 'ws://127.0.0.1:8181'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://call.anavss.com'
  ws = 'ws://192.168.0.8:3000'
}

export {
  baseUrl as default,
  ws as wsUrl
}
