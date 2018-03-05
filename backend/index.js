const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

const router = require('./router');
const db = require('./db');

app.use(bodyParser());
app.use(router.routes());


app.listen(3003);
