import { Testimonial } from "@/app/interfaces/testimonial.interface"
import { formatDate } from "@/app/utilities/dateUtils"
import { Rating } from "@mui/material"
import { Avatar } from "@nextui-org/avatar"


interface TestimonialContentProps {
    test: Testimonial
    id: string
}

const TestimonialCard: React.FC<TestimonialContentProps> = ({ test, id }) => {
  return (
    <section id={id} className="py-24 px-10 lg:px-32 xl:px-64">
      <div className='flex flex-col w-full h-full border-orange border-2 rounded-3xl transition-all hover:font-bold hover:border-3'>
        <div className='flex h-1/2 border-b-1 border-orange mx-5 py-5'>
            <p className='line-clamp-5 text-secondary-white text-base font-normal'>{test.body}</p>
        </div>
        <div className='flex flex-grow px-5 py-5 items-center gap-3'>
            <Avatar name={test.title[0]} color='warning' className='w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 font-extrabold text-2xl sm:text-3xl md:text-4xl' />
            <div className='flex flex-col'>
                <p className='text-secondary-white text-base font-normal'>{test.title}</p>
                <Rating name='read-only' value={test.rating} readOnly />
            </div>
        </div>
      </div>
</section>
  )
}

export default TestimonialCard