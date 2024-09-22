import { EmblaOptionsType } from "embla-carousel"
import Carousel from "./Carousel"
import { Testimonial } from "@/app/interfaces/testimonial.interface";
import { useEffect, useState } from "react";
import { getTestimonials } from "@/app/api/supaApi";

const OPTIONS: EmblaOptionsType = {
  align: 'center',
  loop: true,
  slidesToScroll: 'auto'
}

const TestimonialGallery = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTestimonials();
  }, [])
  return (
    <div className="pb-24 px-10 lg:px-32 xl:px-64">
      <h2 className="text-3xl md:text-4xl pb-12 font-bold">Testimonials</h2>
      <Carousel slides={testimonials} options={OPTIONS} contentType="testimonial"></Carousel>
    </div>
  )
}

export default TestimonialGallery