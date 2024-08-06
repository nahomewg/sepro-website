'use server'
import { Blog } from "@/app/interfaces/blog.interface";
import { ITrainingInfo } from "@/app/interfaces/training.interface";
import { db } from "@/db";
import { blogsTable, optionsTable, questionsTable, trainingInfoTable } from "@/db/schema";
import { eq } from "drizzle-orm";

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

export const getQuestions = async (): Promise<Questions[]> => {
  const data = await db.select().from(questionsTable).leftJoin(optionsTable, eq(questionsTable.id, optionsTable.questionId));

  // Transform the result set into nested Questions objects
  const questionsMap: Record<string, Questions> = {};
  data.forEach(row => {
    const questionId = row.questions.id;

    if (!questionsMap[questionId]) {
      questionsMap[questionId] = {
        id: row.questions.id,
        question: row.questions.question,
        questionType: row.questions.questionType as 'multiple' | 'input' | 'slider',
        created_at: row.questions.created_at ? new Date(row.questions.created_at).toISOString() : undefined,
        options: []
      };
    }

    if (row.options) {
      questionsMap[questionId].options!.push({
        id: row.options.id,
        option: row.options.option,
        image: row.options.image ?? undefined,
        alt: row.options.alt ?? undefined
      });
    }
  });

  return Object.values(questionsMap);
};