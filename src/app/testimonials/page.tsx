'use client'
import Image from "next/image"
import Link from "next/link"
import BlogCard from "@/components/BlogCard"
import BlogGallery from "@/components/BlogGallery"
import { useEffect, useState } from "react";
import BlogContent from "@/components/BlogContent";
import { useSearchParams } from "next/navigation"
import { DUMMY_BLOGS, DUMMY_TESTIMONIALS } from "@/constants"
import TestimonialGallery from "@/components/TestimonialGallery"
import TestimonialCard from "@/components/TestimonialCard"

export default function Testimonials() {
    const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
    const searchParams = useSearchParams();

    useEffect(() => {
      if (searchParams.get("id")) {
        const testimonial = DUMMY_TESTIMONIALS.find(test => test.id === searchParams.get("id"));
        setSelectedTestimonial(testimonial);
      } else {
        setSelectedTestimonial(DUMMY_TESTIMONIALS[0]);
      }
    }, [searchParams]);
  
    return (
        <>
            <section className="w-full h-[660px] relative">
                <div className="bg-contact-background h-full w-full bg-cover bg-center opacity-70 absolute" />
                <Link href="#feature" className="absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">s
                    <h1 className="text-5xl z-10">Testimonials</h1>
                    <Image src="/Down.png" alt="Down arrow" className="w-16 h-16 self-center" width={64} height={64} />
                </Link>
            </section>
            {selectedTestimonial ? (
                <TestimonialCard test={selectedTestimonial} id ="feature" />
            ) : (
                <p>Nope</p>
                // <TestimonialCard id="feature" />
            )}
            <TestimonialGallery />
        </>
    )
}