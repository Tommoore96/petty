const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const respond = require('koa-respond');

const router = require('./router');
require('./db');

const corsOptions = {origin: 'http://localhost:3000'};
app.use(cors());
app.use(bodyParser());
app.use(respond());
app.use(router.routes());

app.listen(3003);
