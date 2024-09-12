// // config/connection.ts
// import { drizzle } from 'drizzle-orm/vercel-postgres';
// import { sql } from '@vercel/postgres';
// import dotenv from 'dotenv';

// dotenv.config();

// // Destructure environment variables
// const {
//   POSTGRES_USER,
//   POSTGRES_PASSWORD,
//   POSTGRES_HOST,
//   POSTGRES_DATABASE,
//   POSTGRES_PORT = 5432, // Default to 5432 if not set
// } = process.env;

// // Construct the PostgreSQL connection string
// const POSTGRES_URL = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}`;

// // Initialize the database connection
// export const db = drizzle(sql, { connectionString: POSTGRES_URL });

// config/connection.ts
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import dotenv from 'dotenv';

dotenv.config();

// Destructure environment variables
const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_DATABASE,
  POSTGRES_PORT = 5432, // Default to 5432 if not set
} = process.env;

// Construct the PostgreSQL connection URL
const POSTGRES_URL = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}`;

// Initialize the database connection using the sql instance
export const db = drizzle(sql);

