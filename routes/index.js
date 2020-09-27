'use strict';

// import our router module
import joiRouter from 'koa-joi-router';

import helloWorldController from '../controllers/index.js';

// get the Joi part from the module
const Joi = joiRouter.Joi;
// get our router
const router = joiRouter();

router.route({
    method: 'get',
    path: '/',
    type: 'json',
    output: {
        200: {
            body: {
                message: Joi.string()
            }
        }
    },
    handler: helloWorldController
});

router.route({
    method: 'get',
    path: '/hello',
    type: 'json',
    output: {
        200: {
            body: {
                message: Joi.string()
            }
        }
    },
    handler: helloWorldController
});

export default router
