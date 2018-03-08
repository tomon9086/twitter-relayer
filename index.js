const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const logger = require("koa-logger")
const serve = require("koa-static")

const twitter = require("./twitter.js")

const app = new Koa()

app.use(bodyParser())
app.use(logger())
app.use(serve("./build"))
