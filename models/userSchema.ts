import { serial, text, timestamp, primaryKey, pgTable } from 'drizzle-orm/pg-core';

export const UsersTable = pgTable(
  'users',
  {
    id: serial('id'), // Primary Key
    name: text('name').notNull(), // User name
    email: text('email').notNull(), // User email
    image: text('image').notNull(), // User image
    createdAt: timestamp('createdAt').defaultNow().notNull(), // Created timestamp
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.id] }), // Primary key
    };
  },
);

// import { drizzle } from 'drizzle-orm/vercel-postgres';
// import { sql } from '@vercel/postgres';
// import {
//   pgTable,
//   serial,
//   text,
//   timestamp,
//   uniqueIndex,
// } from 'drizzle-orm/pg-core';
 
// export const UsersTable = pgTable(
//   'users',
//   {
//     id: serial('id').primaryKey(),
//     name: text('name').notNull(),
//     email: text('email').notNull(),
//     image: text('image').notNull(),
//     createdAt: timestamp('createdAt').defaultNow().notNull(),
//   },
//   (users) => {
//     return {
//       uniqueIdx: uniqueIndex('unique_idx').on(users.email),
//     };
//   },
// );