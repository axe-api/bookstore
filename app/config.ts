import { CacheStrategies, IApplicationConfig } from "axe-api";

const config: IApplicationConfig = {
  prefix: "api",
  env: process.env.NODE_ENV || "production",
  port: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000,
  pino: {
    level: process.env.LOG_LEVEL || "error",
    transport: {
      target: "pino-pretty",
    },
  },
  docs: true,
  database: {
    client: process.env.DB_CLIENT || "mysql",
    connection: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "user",
      password: process.env.DB_PASSWORD || "password",
      database: process.env.DB_DATABASE || "database",
      filename: `${process.env.DB_DATABASE}.sqlite`,
    },
    searchPath: [process.env.DB_USER || "user", "public"],
    pool: {
      min: 10,
      max: 50,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  cache: {
    enable: true,
    ttl: 60 * 60,
    invalidation: CacheStrategies.TagBased,
  },
};

export default config;
