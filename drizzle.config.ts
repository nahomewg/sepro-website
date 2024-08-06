import { defineConfig } from 'drizzle-kit'
import { config } from 'dotenv'

config({ path: '.env' });

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./supabase/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});