import { Router } from 'deps';
import { composeMiddleware } from 'third/oak@14.2.0/mod.ts';
import post_login from 'api/controllers/auth/post_login.ts';

const authRouter = new Router();
authRouter.prefix('/auth');

authRouter.post('/login', composeMiddleware(post_login.middlewares), post_login.handler);

export { authRouter };
