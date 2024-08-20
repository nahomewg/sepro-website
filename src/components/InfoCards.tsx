'use client'
import Link from "next/link";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Button from "./Button";
import { ITrainingInfo } from "@/app/interfaces/training.interface";

type CardProps = {
  trainingInfo: ITrainingInfo[];
  preview: boolean;
  options?: EmblaOptionsType;
}

const InfoCards: React.FC<CardProps> = (props) => {
  const { trainingInfo, preview, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })]);

  return (
    <>
      {preview && <div className="flex flex-col items-center gap-5 py-12 lg:justify-items-center lg:grid lg:grid-cols-2">
          {trainingInfo.slice(0, 4).map((card) => (
            <Link href={"/training"} key={card.id} className='max-w-md xl:max-w-xl w-full flex items-center overflow-hidden border-orange border-2 rounded-3xl transition-all hover:font-bold hover:border-3'>
              <Image src={card.image ? card.image : '/ropes.png'} alt={card.alt ? card.alt : 'Image next to text'} width={200} height={400} className="w-24 h-28 sm:w-32 sm:h-36 md:w-44 md:h-48 rounded-s-3xl border-r-2 border-r-orange" />
              <div className="w-full px-5">
                <p className="text-lg md:text-xl text-center uppercase line-clamp-3">{card.title}</p>
              </div>
            </Link>
          ))}
      </div>}

      {!preview &&
        <section className="embla emblaLarge pt-12 pb-24">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="emblaContainer">
              {trainingInfo.map((slide) => (
                <div key={slide.id} className="emblaSlide h-60">
                  <Link href={`/training?id=${slide.id}`} className="flex overflow-hidden border-orange border-2 rounded-3xl transition-all hover:border-3">
                    <Image src={slide.image ? slide.image : '/ropes.png'} alt="Training image" width={200} height={400} className="hidden sm:block sm:w-1/3 rounded-s-3xl" />
                    <div className="flex flex-col flex-grow p-5 items-center">
                      <h2 className="line-clamp-2 pb-2 text-base sm:text-2xl md:text-3xl text-center uppercase font-semibold">{slide.title}</h2>
                      <p className="line-clamp-6 text-sm sm:text-base">{slide.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    </>
  )
}

export default InfoCards