
import path from 'path';
import { defineConfig } from 'drizzle-kit';

export default {
    schema: './models/schema.ts',
  out: path.join(__dirname, 'migrations'), 
  dialect: 'postgresql', 
  dbCredentials: {
        url: process.env.POSTGRES_URL,
      },
};