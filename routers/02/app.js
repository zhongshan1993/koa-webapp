// koa路由传值
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

// 路由配置
router.get('/', async (ctx, next) => {
  ctx.body = '路由'
}).get('/news', async ctx => {
  ctx.body = '新闻'
}).get('/newscontent', async ctx => {
  // 获取路由参数
  // a=b {a: b}
  console.log(ctx.query)
  // a=b&c=d
  console.log(ctx.querystring)
  // 请求相关内容
  console.log(ctx.request)
  // 获取请求url
  console.log(ctx.url)
  ctx.body = '新闻详情'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)