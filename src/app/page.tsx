'use client'
import { getQuestions } from "@/actions/supaAction";
import BlogGallery from "@/components/BlogGallery";
import Hero from "@/components/Hero";
import ProgramInfo from "@/components/ProgramInfo";
import Quiz from "@/components/Quiz";
import TestimonialGallery from "@/components/TestimonialGallery";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, [])

  return (
    <>
      <Hero />
      <ProgramInfo />
      {loading ? <Loading /> : <Quiz questions={questions} />}
      <BlogGallery />
      <TestimonialGallery />
    </>
  )
}
