'use server'
import { db } from "@/db";
import { blogsTable } from "@/db/schema";

export const getBlogs = async () => {
    const data = await db.select().from(blogsTable);
    return data;
  };