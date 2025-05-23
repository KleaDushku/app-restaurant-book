import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './lib/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
   host: process.env.POSTGRES_HOST,
   user: process.env.POSTGRES_USER,
   password: process.env.POSTGRES_PASSWORD,
   database: process.env.POSTGRES_DATABASE,
   url: process.env.DATABASE_URL!,
  },
});
