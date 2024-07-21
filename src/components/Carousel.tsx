'use client'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react';
import { DUMMY_BLOGS } from "@/constants"
import Link from 'next/link';
import Image from 'next/image';

type PropType = {
    slides: typeof DUMMY_BLOGS
    contentType: 'blog' | 'testimonial'
    options?: EmblaOptionsType,
}

const Carousel: React.FC<PropType> = (props) => {
    const { slides, options, contentType } = props;
    const [emblaRef] = useEmblaCarousel(options);

    return (
        <section className='embla'>
            <div className='overflow-hidden' ref={emblaRef}>
                <div className='embla__container'>
                    {slides.map((index) => (
                        <div className='embla__slide h-48' key={index.id}>
                            {contentType == 'blog' &&
                                <Link href={"/"} className='flex relative items-center justify-center w-full border-orange border-2 rounded-3xl'>
                                    <Image src={index.image} alt="Background image" width={0} height={0} sizes='100vw' style={{ objectFit: 'cover' }} className='w-full h-full absolute rounded-3xl opacity-50' />
                                    <p className='line-clamp-2 px-5 text-base sm:text-2xl md:text-3xl capitalize drop-shadow-[2px_2px_0_rgba(0,0,0,1)] font-semibold z-10'>{index.title}</p>
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
