'use strict';

import Koa from 'koa';
const app = new Koa();

import bodyParser from 'koa-bodyparser';

import router from './routes/index.js';
import injectTimestamp from './middlewares/injectTimestamp.js';

// app.use(async ctx => {
//     ctx.body = '<h1>Hello world!</h1>';
// });

app.use(injectTimestamp);
app.use(bodyParser());
app.use(router.middleware());

app.listen(3000);
