'use strict';

import Koa from 'koa';
const app = new Koa();

import router from './routes/index.js';
import bodyParser from 'koa-bodyparser';

// app.use(async ctx => {
//     ctx.body = '<h1>Hello world!</h1>';
// });

app.use(bodyParser());
app.use(router.middleware());

app.listen(3000);
