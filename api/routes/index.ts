import { Application } from 'deps';
import { authRouter } from 'api/routes/auth/index.ts';

const APP = new Application();

APP.use(authRouter.routes());
APP.use(authRouter.allowedMethods());

export { APP }