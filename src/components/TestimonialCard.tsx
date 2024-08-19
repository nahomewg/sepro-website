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
    <section id={id} className="py-48 px-10 lg:px-32 xl:px-64">
    <div className='flex w-full h-96 border-orange border-2 rounded-3xl transition-all hover:font-bold hover:border-3'>
      <div className='flex flex-grow px-5 pb-5 w-1/2 items-center justify-center border-r-1 border-orange my-5 gap-3'>
          <Avatar name={test.full_name[0]} color='warning' className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 font-extrabold text-3xl sm:text-4xl md:text-5xl' />
          <div className='flex flex-col'>
              <p className='text-secondary-white text-2xl font-normal'>{test.full_name}</p>
              <Rating name='read-only' value={test.rating} size="large" readOnly />
          </div>
      </div>
      <div className='flex flex-col w-1/2 justify-center border-orange mx-5 py-5'>
          <p className='text-secondary-white text-2xl pb-2 font-normal'>{formatDate(test.created_at)}</p>
          <p className='line-clamp-5 text-secondary-white text-2xl font-normal'>{test.body}</p>
      </div>
    </div>
</section>
  )
}

export default TestimonialCard