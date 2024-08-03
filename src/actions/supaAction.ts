'use server'
import { Blog } from "@/app/interfaces/blog.interface";
import { TrainingInfo } from "@/app/interfaces/training.interface";
import { db } from "@/db";
import { blogsTable, trainingInfoTable } from "@/db/schema";

export const getBlogs = async (): Promise<Blog[]> => {
    const data = await db.select().from(blogsTable);

    // Transform the data to match the Blog interface
    const transformedData: Blog[] = data.map(blog => ({
      ...blog,
      created_at: blog.created_at ? blog.created_at.toISOString() : undefined,
      alt: blog.alt ?? undefined,  // Convert null to undefined for the alt field
      additionalResources: blog.additionalResources as Blog["additionalResources"]  // Ensure type compatibility
    }));

  return transformedData;
};

export const getTrainingInfo = async (): Promise<TrainingInfo[]> => {
  const data = await db.select().from(trainingInfoTable);
  
  // Transform the data to match the TrainingInfo interface
  const transformedData: TrainingInfo[] = data.map(info => ({
    ...info,
    created_at: info.created_at ? info.created_at.toISOString() : undefined,
    alt: info.alt ?? undefined,  // Convert null to undefined for the alt field
    feature: info.feature ?? undefined,  // Ensure type compatibility for feature field
    image: info.image ?? undefined  // Ensure type compatibility for image field
  }));

  return transformedData;
};