import logger from 'api/helpers/pino.ts';
import { ENVIROMENT } from 'config/env_vars.ts'
import { APP } from 'api/routes/index.ts';

const PORT = 8000;

async function listen(
	port: number,
	hostname: string | undefined,
	enviroment: string | undefined,
) {
	try {
		logger.info(
			`starting server ${
				enviroment ? `(${enviroment})` : '(no enviroment found)'
			} on port ${port} with hostname ${hostname}`,
		);
		await APP.listen({ hostname, port });
	} catch {
		logger.info(`failed to start server with port ${port}`);
		// If the port is already in use, try to start the server with a random port
		const randomPort = Math.floor(Math.random() * 1000) + 8000;
		logger.info(
			`starting server ${
				enviroment ? `(${enviroment})` : '(no enviroment found)'
			} on port ${randomPort}`,
		);
		await APP.listen({ hostname, port: randomPort });
	}
}

if (ENVIROMENT === 'development') {
	await listen(PORT, '0.0.0.0', 'local');
} else if (ENVIROMENT === 'deno') {
	await listen(PORT, '0.0.0.0', 'deno');
} else {
	await listen(PORT, undefined, 'production');
}