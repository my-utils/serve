const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()

console.log('APP_NAME :>> ', process.env.APP_NAME)
console.log('APP_PORT :>> ', process.env.APP_PORT)
console.log('APP_DIR :>> ', process.env.APP_DIR)

const port = process.env.APP_PORT || '8080'
const dir = process.env.APP_DIR || './dist'

app.use('/', history(), express.static(dir))

app.listen(port, () => {
  console.log('http://127.0.0.1:' + port)
  console.log('服务启动成功 :>> ')
})
