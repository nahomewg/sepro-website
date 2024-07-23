import Link from "next/link";
import Image from "next/image";

type CardProps = {
    title: string;
    size: 'sm' | 'lg';
    description?: string;
    image?: string;
}

const InfoCard = ( { title, size, description, image }: CardProps ) => {
  return (
    <Link href={"/"} className="max-w-md xl:max-w-xl w-full flex items-center border-orange border-2 rounded-3xl transition-all hover:font-bold hover:border-3">
        <Image src={image ? image : '/ropes.png' } alt="Man with weighted ropes" width={size === 'lg' ? 200 : 100} height={size === 'lg' ? 400 :200} className="w-24 h-24 xs:w-auto xs:h-auto rounded-s-3xl border-r-2 border-r-orange" />
        <div className="w-full px-5">
            <p className="text-lg md:text-xl text-center line-clamp-1">{title}</p>
            {description && <p className="text-secondary-white text-md md:text-lg text-center line-clamp-2">{description}</p>}
        </div>
    </Link>
  )
}

export default InfoCard