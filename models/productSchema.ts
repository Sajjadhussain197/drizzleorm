import { serial, text, decimal, integer, pgTable, foreignKey, timestamp } from 'drizzle-orm/pg-core';
import { UsersTable } from './userSchema';
// import { UsersTable } from './path-to-users-schema'; // Adjust the import path as necessary

export const ProductsTable = pgTable(
  'products',
  {
    product_id: serial('product_id').primaryKey(), // Primary Key
    name: text('name').notNull(), // Product name
    description: text('description'), // Product description
    price: decimal('price', { precision: 10, scale: 2 }).notNull(), // Product price
    stock_quantity: integer('stock_quantity').notNull(), // Stock quantity
    category_id: integer('category_id').notNull(), // Category ID
    image_url: text('image_url'), // Image URL
    created_at: timestamp('created_at').defaultNow().notNull(), // Created timestamp
    updated_at: timestamp('updated_at').defaultNow().notNull(), // Updated timestamp
    user_id: integer('user_id').notNull(), // User ID
  },
  (table) => {
    return {
      userReference: foreignKey({
        columns: [table.user_id], // Local column
        foreignColumns: [UsersTable.id], // Foreign column
        name: 'fk_user_id', // Custom foreign key name
      }),
    };
  },
);

