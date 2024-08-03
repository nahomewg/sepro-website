import { sql } from 'drizzle-orm';
import { pgTable, text, varchar, timestamp, json, boolean, uuid } from 'drizzle-orm/pg-core';

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

// Define the schema for the `questions` table
export const questionsTable = pgTable('questions', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  question: varchar('question').notNull(),
  questionType: varchar('question_type').notNull(), // Enum handling might be needed based on your requirements
  options: json('options'), // Store options as JSON
});

// Define the schema for the `options` table
export const optionsTable = pgTable('options', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  option: varchar('option').notNull(),
  image: varchar('image'),
  alt: varchar('alt'),
  questionId: uuid('question_id').notNull().references(() => questionsTable.id),
});

// Define the schema for the `testimonials` table
export const testimonialsTable = pgTable('testimonials', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  fullName: varchar('full_name').notNull(),
  body: text('body').notNull(),
  rating: uuid('rating').notNull(),
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
