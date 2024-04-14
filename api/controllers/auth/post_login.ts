import { RouterContext } from 'deps';
import { checkJsonBody } from 'api/middlewares/check_json_body.ts';

export default {
  handler: async (
		context: RouterContext<'/login'>,
	) => {
    const { username } = await context.request.body.json();

    
    context.response.body = {
      user: username,
      logged: true,
    };
  },
  middlewares: [checkJsonBody]
}