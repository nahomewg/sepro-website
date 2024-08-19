import Image from "next/image"
import Link from "next/link";
import { formatDate } from "@/app/utilities/dateUtils";
import { IBlog } from "@/app/interfaces/blog.interface";
import { useEffect, useState } from "react";
import { getRecentBlog } from "@/app/api/supaApi";
import Loading from "@/app/loading";

const BlogCard = (props: any) => {
    const [blog, setBlog] = useState<IBlog>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await getRecentBlog();
                setBlog(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchBlog();
    }, [])

    if (loading) {
        return <Loading />
      }

    return (
        <section id={props.id} className="py-48 px-10 lg:px-32 xl:px-64">
            <Link href={`/blog?id=${blog?.id}`} className="cursor-pointer flex border-orange border-2 rounded-3xl transition-all hover:border-3">
                <Image src={blog?.image ? blog.image : '/ropes.png'} alt="Training image" width={200} height={400} className="hidden md:block w-1/2 h-full rounded-s-3xl" />
                <div className="flex flex-col flex-grow p-5">
                    <p className="pb-2">
                        {formatDate(blog?.created_at)}
                    </p>
                    <h2 className="pb-2 text-base sm:text-2xl md:text-3xl capitalize font-semibold">{blog?.title}</h2>
                    <p className="line-clamp-5 text-secondary-white">{blog?.body}</p>
                    <div className="flex gap-2 items-center pt-4">
                        <p>Read more</p>
                        <Image src={"/right-arrow.png"} alt="Right arrow" width={25} height={25} />
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default BlogCard