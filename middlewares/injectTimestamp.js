'use strict';

export default async (ctx, next) => {
    await next();
    ctx.body.timestamp = Date.now();
};