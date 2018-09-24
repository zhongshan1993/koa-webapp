const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()



router.get('/', async (ctx, next) => {
  ctx.body = '路由'
})
// 匹配到news路由以后，继续向下匹配
.get('/news', async (ctx, next) => {
  console.log('这是一个新闻')
  await next()
}).get('/news', async ctx => {
  ctx.body = '这是一个新闻'
}).get('/login', async ctx => {
  ctx.body = '新闻'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)