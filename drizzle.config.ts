import path from 'path';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: [
    './models/userSchema.ts', 
    './models/productSchema.ts', 
  ],
  out: path.join(__dirname, 'migrations'), 
  dialect: 'postgresql', 
  dbCredentials: {
    url: process.env.POSTGRES_URL, 
  }
})