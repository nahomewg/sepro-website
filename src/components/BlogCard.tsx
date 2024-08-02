import Link from "next/link"
import Image from "next/image"
import { DUMMY_BLOGS } from "@/constants"
import { parseISO, format } from 'date-fns';

const BlogCard = (props: any) => {
    const formatDate = (dateString: string | undefined) => {
        if (!dateString) return '';
        const date = parseISO(dateString);
        return format(date, 'MMMM d, yyyy');
      };

    return (
        <section id={props.id} className="py-48 px-10 lg:px-32 xl:px-64">
            <Link href={"/"} className="flex border-orange border-2 rounded-3xl transition-all hover:border-3">
                <Image src={DUMMY_BLOGS[0].image ? DUMMY_BLOGS[0].image : '/ropes.png'} alt="Training image" width={200} height={400} className="w-1/2 h-full rounded-s-3xl" />
                <div className="flex flex-col flex-grow p-5">
                    <p className="pb-2">
                        {formatDate(DUMMY_BLOGS[0].date)}
                    </p>
                    <h2 className="line-clamp-2 pb-2 text-base sm:text-2xl md:text-3xl capitalize font-semibold">{DUMMY_BLOGS[0].title}</h2>
                    <p>{DUMMY_BLOGS[0].body}</p>
                    <div className="flex gap-2 items-center">
                        <p>Read more</p>
                        <Image src={"/right-arrow.png"} alt="Right arrow" width={25} height={25} />
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default BlogCard