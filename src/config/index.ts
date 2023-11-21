export const PORT = process.env.PORT;

export const APPLICATION_NAME = process.env.APPLICATION_NAME as string;
export const APPLICATION_VERSION = process.env.APPLICATION_VERSION as string;

export const JWT_SECRET = process.env.JWT_SECRET as string;
export const JWT_ISSUER = process.env.JWT_ISSUER as string;
export const JWT_AUDIENCE = process.env.JWT_AUDIENCE as string;

export const MONGO_DB_CONNECTION_STRING = process.env
  .MONGO_DB_CONNECTION_STRING as string;
export const MONGO_DB_DATABASE_NAME = process.env
  .MONGO_DB_DATABASE_NAME as string;
