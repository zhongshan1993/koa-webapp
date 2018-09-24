/**
 * ejs模板引擎的使用
 * 1, npm i koa-views --save
 * 2, npm i ejs --save
 * 3, const views = require('koa-views')
 *    app.use(views(__dirname, {extension: 'ejs'})
 * 4, await ctx.render('index')
 */
const Koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views')

const app = new Koa()
const router = new Router()

// 配置模板引擎
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

router.get('/', async (ctx, next) => {
  const title = 'zhongshan'
  await ctx.render('index', {
    title
  })
})

router.get('/news', async ctx => {
  ctx.body = '新闻'
})

// 在每一个模块中都渲染一个公共的数据，这样在模板的任何地方都可以使用
app.use(async (ctx, next) => {
  ctx.state.userinfo = 'zhongshan'
  await next()
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)