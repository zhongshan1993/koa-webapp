// 06 ended
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

// 路由配置
router.get('/', async (ctx, next) => {
  ctx.body = '路由'
}).get('/news', async ctx => {
  ctx.body = '新闻'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)