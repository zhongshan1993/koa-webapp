const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

// 匹配路由之前打印日期，如果不写next，不会继续向下匹配
app.use(async (ctx, next) => {
  console.log(new Date())
  await next()
})

router.get('/', async (ctx, next) => {
  ctx.body = '路由'
}).get('/news', async ctx => {
  ctx.body = '新闻'
}).get('/login', async ctx => {
  ctx.body = '新闻'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)