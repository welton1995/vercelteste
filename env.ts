import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  DB_URL: z.string(),
  PORT: z.coerce.number().default(3333),
});

const _env = envSchema.safeParse(process.env);

if(_env.success === false){
  console.error('*** INVALID ENVIRONMENTS VARIABLES', _env.error.format());

  throw new Error('Invalid env\'s');
}

export const env = _env.data