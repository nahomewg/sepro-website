import { EmblaOptionsType } from "embla-carousel"
import Carousel from "./Carousel"
import { DUMMY_TESTIMONIALS } from "@/constants"

const OPTIONS: EmblaOptionsType = {
  align: 'center',
  loop: true,
  slidesToScroll: 'auto'
}

const TestimonialGallery = () => {
  return (
    <div className="pb-24 px-10 lg:px-32 xl:px-64">
      <h2 className="text-3xl md:text-4xl pb-12 font-bold">Testimonials</h2>
      <Carousel slides={DUMMY_TESTIMONIALS} options={OPTIONS} contentType="testimonial"></Carousel>
    </div>
  )
}

export default TestimonialGallery