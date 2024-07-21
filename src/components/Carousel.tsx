'use client'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react';
import { DUMMY_BLOGS, DUMMY_TESTIMONIALS } from "@/constants"
import Link from 'next/link';
import Image from 'next/image';
import { Avatar } from '@nextui-org/avatar';


type PropType = {
    slides: any[]
    contentType: 'blog' | 'testimonial'
    options?: EmblaOptionsType,
}

const Carousel: React.FC<PropType> = (props) => {
    const { slides, options, contentType } = props;
    const [emblaRef] = useEmblaCarousel(options);

    return (
        <section className='embla'>
            <div className='overflow-hidden' ref={emblaRef}>
                <div className='emblaContainer'>
                    {slides.map((slide) => (
                        <div key={slide.id} className={`emblaSlide ${contentType == 'blog' ? 'h-48' : 'h-80'}`}>
                            {contentType == 'blog' &&
                                <Link href={"/"} key={slide.id} className='flex relative items-center justify-center w-full h-full border-orange border-2 rounded-3xl'>
                                    <Image src={slide.image} alt="Background image" width={0} height={0} sizes='100vw' style={{ objectFit: 'cover' }} className='w-full h-full absolute rounded-3xl opacity-50' />
                                    <p className='line-clamp-2 px-5 text-base sm:text-2xl md:text-3xl capitalize drop-shadow-[2px_2px_0_rgba(0,0,0,1)] font-semibold z-10'>{slide.title}</p>
                                </Link>
                            }
                            {contentType == 'testimonial' &&
                                <Link href={"/"} className='flex flex-col w-full h-full border-orange border-2 rounded-3xl'>
                                    <div className='flex h-1/2 border-b-1 border-orange mx-5 py-5'>
                                        <p className='line-clamp-5 text-secondary-white text-base font-normal'>{slide.body}</p>
                                    </div>
                                    <div className='flex flex-grow px-5 pb-5 items-center gap-3'>
                                        <Avatar name={slide.full_name[0]} color='warning' className='w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 font-extrabold text-2xl sm:text-3xl md:text-4xl' />
                                        <div className='flex flex-col'>
                                            <p className='text-secondary-white text-base font-normal'>{slide.full_name}</p>
                                            <div className='flex gap-1 pt-2'>
                                                {[...Array(slide.rating)].map((_, index) => (
                                                    <Image src={'/star.png'} alt="Gold star" width={20} height={20} key={index}></Image>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            }
                        </div>
                    ))}
                </div>
            </div>        

        </section>
    )
}

export default Carousel
