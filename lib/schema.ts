import { pgTable, serial, varchar, decimal, text, integer } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  description: text('description'),
  image_url: varchar('image_url', { length: 255 }),
  status: varchar('status', { length: 50 }),
  stock: integer('stock'),  // Kolona 'stock' e shtuar
});
