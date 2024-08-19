'use client'
import BlogGallery from "@/components/BlogGallery";
import Hero from "@/components/Hero";
import ProgramInfo from "@/components/ProgramInfo";
import Quiz from "@/components/Quiz";
import TestimonialGallery from "@/components/TestimonialGallery";
import { BUILD_QUIZ } from "@/constants";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null)

  return (
    <>
      <Hero refToStart={ref} />
      <ProgramInfo ref={ref} />
      <Quiz questionsArray={BUILD_QUIZ} title="Build Your Perfect Body" />
      <BlogGallery />
      <TestimonialGallery />
    </>
  )
}
