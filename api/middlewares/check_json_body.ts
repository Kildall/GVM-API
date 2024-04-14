import { Middleware } from 'deps';



const checkJsonBody: Middleware = (context, next) => {
  if(!context.request.hasBody) {
    context.response.status = 400;
    context.response.body = 'Invalid request';
    return;
  }

  if(context.request.body.type() !== 'json') {
    context.response.status = 400;
    context.response.body = 'Invalid request';
    return;
  }

  return next();
} 


export { checkJsonBody }