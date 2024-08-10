import BlogGallery from "@/components/BlogGallery";
import Hero from "@/components/Hero";
import ProgramInfo from "@/components/ProgramInfo";
import Quiz from "@/components/Quiz";
import TestimonialGallery from "@/components/TestimonialGallery";
import { READINESS_QUIZ } from "@/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <ProgramInfo />
      <Quiz questions={READINESS_QUIZ} quizTitle="Readiness Quiz" />
      <BlogGallery />
      <TestimonialGallery />
    </>
  )
}
