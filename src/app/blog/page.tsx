import Image from "next/image"
import Link from "next/link"
import BlogCard from "@/components/BlogCard"
import BlogGallery from "@/components/BlogGallery"

export default function Blog() {
    return (
        <>
            <section className="w-full h-[660px] relative">
                <div className="bg-blog-background h-full w-full bg-cover bg-center opacity-70 absolute" />
                <Link href="#feature" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">s
                    <h1 className="text-5xl z-10">Blog</h1>
                    <Image src="/Down.png" alt="Down arrow" className="w-full h-auto" width={0} height={0} sizes="100vw" />
                </Link>
            </section>
            <BlogCard id="feature" />
            <BlogGallery />
        </>
    )
}