'use client'
import Link from "next/link";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type CardProps = {
  trainingInfo: TrainingInfo[];
  preview: boolean;
  options?: EmblaOptionsType;
}

const InfoCards: React.FC<CardProps> = (props) => {
  const { trainingInfo, preview, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })]);

  return (
    <>
      {preview && <div className="flex flex-col items-center gap-5 py-12 lg:justify-items-center lg:grid lg:grid-cols-2">
          {trainingInfo.map((card) => (
            <Link href={"/"} key={card.id} className={`max-w-md xl:max-w-xl w-full flex ${preview ? 'items-center' : ''} overflow-hidden border-orange border-2 rounded-3xl transition-all hover:font-bold hover:border-3`}>
              <Image src={card.image ? card.image : '/ropes.png'} alt={card.alt ? card.alt : 'Image next to text'} width={200} height={400} className="w-24 h-28 sm:w-32 sm:h-36 md:w-44 md:h-48 rounded-s-3xl border-r-2 border-r-orange" />
              <div className="w-full px-5">
                <p className="text-lg md:text-xl text-center capitalize line-clamp-3">{card.title}</p>
              </div>
            </Link>
          ))}
      </div>}

      {!preview &&
        <section className="embla emblaLarge pt-12 pb-24">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="emblaContainer">
              {trainingInfo.map((slide) => (
                <div key={slide.id} className="emblaSlide h-80">
                  <Link href={"/"} className="flex border-orange border-2 rounded-3xl transition-all hover:font-bold hover:border-3">
                    <Image src={slide.image ? slide.image : '/ropes.png'} alt="Training image" width={200} height={400} className="w-1/3 h-full rounded-s-3xl" />
                    <div>
                      <h2>{slide.title}</h2>
                      <p>{slide.description}</p>
                    </div>
                  </Link>
                  {/* <Link href={"/"} key={slide.id} className='flex relative items-center justify-center w-full h-full border-orange border-2 rounded-3xl transition-all hover:font-bold hover:border-3'>
                    <Image src={slide.image} alt="Background image" width={0} height={0} sizes='100vw' style={{ objectFit: 'cover' }} className='w-full h-full absolute rounded-3xl opacity-50' />
                    <p className='line-clamp-2 px-5 text-base sm:text-2xl md:text-3xl capitalize drop-shadow-[2px_2px_0_rgba(0,0,0,1)] font-semibold z-10'>{slide.title}</p>
                  </Link> */}
                </div>
              ))}
            </div>
          </div>
        </section>
      }
            {/* {!preview && 
              <>
                <Image src={card.image ? card.image : '/ropes.png'} alt={card.alt ? card.alt : 'Image next to text'} width={200} height={400} className="w-24 h-28 xs:w-40 xs:h-44 sm:w-44 sm:h-48 md:w-52 md:h-56 rounded-s-3xl border-r-2 border-r-orange" />
                <div className="w-full h-28 xs:h-44 sm:h-48 md:h-56 p-5">
                  <p className="text-base sm:text-lg md:text-xl text-center capitalize line-clamp-3">{card.title}</p>
                  <p className="text-secondary-white text-sm sm:text-base md:text-lg line-clamp-1 xs:line-clamp-4 sm:line-clamp-5 md:line-clamp-6">{card.description}</p>
                </div>
              </>
            } */}
    </>
  )
}

export default InfoCards