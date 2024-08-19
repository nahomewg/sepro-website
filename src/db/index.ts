import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }
  
  // Initialize the PostgreSQL client
  const postgresSqlClient = postgres(connectionString);
  
  // Create and export the Drizzle ORM instance
  export const db = drizzle(postgresSqlClient);