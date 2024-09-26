enum EnvVars {
  ENVIRONMENT = "ENVIRONMENT",
  DATABASE_URL = "DATABASE_URL",
  JWT_SECRET = "JWT_SECRET",
  MAILERSEND_API_KEY = "MAILERSEND_API_KEY",
}

type ParsedEnvVars = {
  [key in EnvVars]: string;
};

function getEnvVars(): ParsedEnvVars {
  const parsedEnvVars: Partial<ParsedEnvVars> = {};

  for (const key of Object.values(EnvVars)) {
    const value = Bun.env[key];
    if (value === undefined) {
      throw new Error(`Environment variable ${key} is not defined`);
    }
    parsedEnvVars[key] = value;
  }

  return parsedEnvVars as ParsedEnvVars;
}

export const env = getEnvVars();