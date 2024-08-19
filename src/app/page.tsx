import BlogGallery from "@/components/BlogGallery";
import Hero from "@/components/Hero";
import ProgramInfo from "@/components/ProgramInfo";
import Quiz from "@/components/Quiz";
import TestimonialGallery from "@/components/TestimonialGallery";
import { BUILD_QUIZ } from "@/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <ProgramInfo />
      <Quiz questionsArray={BUILD_QUIZ} title="Build Your Perfect Body" />
      <BlogGallery />
      <TestimonialGallery />
    </>
  )
}
