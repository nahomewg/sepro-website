'use client'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar } from '@nextui-org/avatar';
import { Rating } from '@mui/material';
import { useRouter } from 'next/navigation';

type PropType = {
    slides: any[]
    contentType: 'blog' | 'testimonial' | 'additional'
    options?: EmblaOptionsType,
}

const Carousel: React.FC<PropType> = ({ slides, options, contentType }) => {
    const [emblaRef] = useEmblaCarousel(options);
    const router = useRouter();
  
    const handleBlogClick = (id: string) => {
      router.push(`/blog?id=${id}`);
    };

    const handleTestimonialClick = (id: string) => {
      router.push(`/testimonials?id=${id}`);
    };
  
    return (
        <section className='embla'>
            <div className='overflow-hidden' ref={emblaRef}>
                <div className='emblaContainer'>
                    {slides.map((slide) => (
                        <div key={slide.id} className={`emblaSlide ${contentType == 'blog' || contentType == 'additional' ? 'h-48' : 'h-80'}`}>
                            {contentType == 'blog' &&
                                <div onClick={() => handleBlogClick(slide.id)} className='cursor-pointer flex relative items-center justify-center w-full h-full border-orange border-2 rounded-3xl transition-all hover:font-bold hover:border-3'>
                                    <Image src={slide.image} alt="Background image" width={0} height={0} sizes='100vw' style={{ objectFit: 'cover' }} className='w-full h-full absolute rounded-3xl opacity-50' />
                                    <p className='line-clamp-2 px-5 text-base sm:text-xl md:text-2xl capitalize drop-shadow-[2px_2px_0_rgba(0,0,0,1)] font-semibold z-10'>{slide.title}</p>
                                </div>
                            }
                            {contentType == 'testimonial' &&
                                <div onClick={() => handleTestimonialClick(slide.id)} className='flex flex-col cursor-pointer w-full h-full border-orange border-2 rounded-3xl transition-all hover:font-bold hover:border-3'>
                                    <div className='flex h-1/2 border-b-1 border-orange mx-5 py-5'>
                                        <p className='line-clamp-5 text-secondary-white text-base font-normal'>{slide.body}</p>
                                    </div>
                                    <div className='flex flex-grow px-5 pb-5 items-center gap-3'>
                                        <Avatar name={slide.full_name[0]} color='warning' className='w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 font-extrabold text-2xl sm:text-3xl md:text-4xl' />
                                        <div className='flex flex-col'>
                                            <p className='text-secondary-white text-base font-normal'>{slide.full_name}</p>
                                            <Rating name='read-only' value={slide.rating} readOnly />
                                        </div>
                                    </div>
                                </div>
                            }
                            {contentType == 'additional' &&
                                <a href={slide.link}  target='_blank' className='cursor-pointer flex relative items-center justify-center w-full h-full border-orange border-2 rounded-3xl transition-all hover:font-bold hover:border-3'>
                                    <Image src='/ropes.png' alt="Background image" width={0} height={0} sizes='100vw' style={{ objectFit: 'cover' }} className='w-full h-full absolute rounded-3xl opacity-50' />
                                    <p className='line-clamp-2 px-5 text-base sm:text-xl md:text-2xl capitalize drop-shadow-[2px_2px_0_rgba(0,0,0,1)] font-semibold z-10'>{slide.title}</p>
                                </a>
                            }
                        </div>
                    ))}
                </div>
            </div>        

        </section>
    )
}

export default Carousel
