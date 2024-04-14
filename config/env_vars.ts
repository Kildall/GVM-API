import { dotenv } from 'deps';

// Create custom type for the required variables that I can then map to the result of the loadEnvVariables function
enum RequiredVariables {
  'ENVIROMENT' = 'ENVIROMENT',
  'DB_CONNECTION_STRING' = 'DB_CONNECTION_STRING',
}

export const { ENVIROMENT, DB_CONNECTION_STRING } = await loadEnvVariables();


async function loadEnvVariables(
  envPath: string | null = './.env',
): Promise<{ [key in RequiredVariables]: string }> {
  // Use the env and build parameters instead of directly using Deno.env and Deno.build
  await dotenv.load({ export: true, allowEmptyValues: true, envPath: envPath });

  // Get the array of required variables for the current environment
  const requiredVariables = Object.values(RequiredVariables);

  // Empty map of all the environment variables
  const env = Deno.env.toObject();

  // Check each required variable and throw an error if it is not defined
  if (requiredVariables.length > 0) {
    for (const variable of requiredVariables) {
      const envVar = Deno.env.get(variable);
      if (!envVar) {
        throw new Error(`Missing ${variable}`);
      }
    }
  }

  // Create an object with the enum values as keys and the corresponding env variable values
  const result: { [key in RequiredVariables]: string } = {} as { [key in RequiredVariables]: string };
  for (const variable of requiredVariables) {
    result[variable as RequiredVariables] = env[variable] as string;
  }

  return result;
}


