import { knex as knexSetup, Knex } from 'knex';
import { env } from '../../env';

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DB_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
  }
}

export const knex = knexSetup(config);