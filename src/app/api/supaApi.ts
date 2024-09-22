'use server'
import { IBlog } from "@/app/interfaces/blog.interface";
import { ITrainingInfo } from "@/app/interfaces/training.interface";
import { db } from "@/db";
import { blogsTable, testimonialsTable, trainingInfoTable } from "@/db/schema";
import { desc } from 'drizzle-orm';
import { Testimonial } from "../interfaces/testimonial.interface";


export const getBlogs = async (): Promise<IBlog[]> => {
    const data = await db.select().from(blogsTable);

    // Transform the data to match the Blog interface
    const transformedData: IBlog[] = data.map(blog => ({
      ...blog,
      created_at: blog.created_at ? blog.created_at.toISOString() : undefined,
      alt: blog.alt ?? undefined,  // Convert null to undefined for the alt field
      additionalResources: blog.additionalResources as IBlog["additionalResources"]  // Ensure type compatibility
    }));

  return transformedData;
};

export const getRecentBlog = async (): Promise<IBlog> => {
  const data = await db
    .select()
    .from(blogsTable)
    .orderBy(desc(blogsTable.created_at))
    .limit(1);

  if (data.length === 0) {
    throw new Error('No blog found');
  }
  // Transform the data to match the Blog interface
  const transformedData: IBlog = {
    ...data[0],
    created_at: data[0].created_at ? data[0].created_at.toISOString() : undefined,
    alt: data[0].alt ?? undefined,  // Convert null to undefined for the alt field
    additionalResources: data[0].additionalResources as IBlog["additionalResources"]  // Ensure type compatibility
  };
  return transformedData;

}

export const getTrainingInfo = async (): Promise<ITrainingInfo[]> => {
  const data = await db.select().from(trainingInfoTable);
  
  // Transform the data to match the TrainingInfo interface
  const transformedData: ITrainingInfo[] = data.map(info => ({
    ...info,
    created_at: info.created_at ? info.created_at.toISOString() : undefined,
    alt: info.alt ?? undefined,  // Convert null to undefined for the alt field
    feature: info.feature ?? undefined,  // Ensure type compatibility for feature field
    image: info.image ?? undefined  // Ensure type compatibility for image field
  }));

  return transformedData;
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const data = await db.select().from(testimonialsTable);

  // Transform the data to match the Testimonial interface
  const transformedData: Testimonial[] = data.map(testimonial => ({
    ...testimonial,
    image: testimonial.image ?? undefined,
    alt: testimonial.alt ?? undefined
  }));

  return transformedData;
}