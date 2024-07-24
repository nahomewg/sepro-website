import Link from "next/link";
import Image from "next/image";

type CardProps = {
  trainingInfo: TrainingInfo[];
  preview: boolean;
}

const InfoCards: React.FC<CardProps> = (props) => {
  const { trainingInfo, preview } = props;

  return (
    <div className="flex flex-col items-center gap-5 py-12 lg:justify-items-center lg:grid lg:grid-cols-2">
      {trainingInfo.map((card) => (
        <Link href={"/"} key={card.id} className="max-w-md xl:max-w-xl w-full flex items-center border-orange border-2 rounded-3xl transition-all hover:font-bold hover:border-3">
          {preview &&
            <Image src={card.image ? card.image : '/ropes.png' } alt={card.alt ? card.alt : 'Image next to text'} width={200} height={400} className="w-24 h-28 sm:w-32 sm:h-36 md:w-44 md:h-48 rounded-s-3xl border-r-2 border-r-orange" />
          }
          {!preview && 
            <Image src={card.image ? card.image : '/ropes.png' } alt={card.alt ? card.alt : 'Image next to text'} width={200} height={400} className="w-24 h-28 xs:w-44 xs:h-48 sm:w-52 sm:h-56 md:w-64 md:h-72 rounded-s-3xl border-r-2 border-r-orange" />
          }
          <div className="w-full px-5">
            <p className="text-lg md:text-xl text-center capitalize line-clamp-3">{card.title}</p>
            {!preview && <p className="text-secondary-white text-md md:text-lg text-center line-clamp-2">{card.description}</p>}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default InfoCards