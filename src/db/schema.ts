import { sql } from 'drizzle-orm';
import { pgTable, text, varchar, timestamp, json, boolean, uuid, integer } from 'drizzle-orm/pg-core';

// Define the schema for the `blogs` table
export const blogsTable = pgTable('blogs', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  title: varchar('title').notNull(),
  body: text('body').notNull(),
  image: varchar('image').notNull(),
  alt: varchar('alt'),
  created_at: timestamp('created_at'),
  additionalResources: json('additional_resources'),
});

// Define the schema for the `additionalResources` table
export const additionalResourcesTable = pgTable('additional_resources', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  title: varchar('title').notNull(),
  link: varchar('link').notNull(),
  created_at: timestamp('created_at'),
  blogId: uuid('blog_id').notNull().references(() => blogsTable.id),
});

// Define the schema for the `testimonials` table
export const testimonialsTable = pgTable('testimonials', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  title: varchar('title').notNull(),
  body: text('body').notNull(),
  rating: integer('rating').notNull(),
  image: varchar('image'),
  alt: varchar('alt'),
});

// Define the schema for the `trainingInfo` table
export const trainingInfoTable = pgTable('training_info', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  title: varchar('title').notNull(),
  description: text('description').notNull(),
  image: varchar('image'),
  alt: varchar('alt'),
  feature: boolean('feature'),
  created_at: timestamp('created_at').notNull(),
});

