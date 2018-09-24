/**
 * 错误处理中间件
 */
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = '路由'
}).get('/news', async ctx => {
  console.log('这是新闻2')
  ctx.body = '这是一个新闻'
}).get('/login', async ctx => {
  ctx.body = '新闻'
})

// 404 错误处理
app.use(async (ctx, next) => {
  console.log('这是中间件01')
  await next()

  if (ctx.status === 404) {
    ctx.status = 404
    ctx.body = '这是一个 404 页面'
  } else {
    console.log(ctx.url)
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)