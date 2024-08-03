'use client'
import Image from "next/image"
import Link from "next/link"
import BlogCard from "@/components/BlogCard"
import BlogGallery from "@/components/BlogGallery"
import { useEffect, useState } from "react";
import BlogContent from "@/components/BlogContent";
import { useSearchParams } from "next/navigation"
import { DUMMY_BLOGS } from "@/constants"

export default function Blog() {
    const [selectedBlog, setSelectedBlog] = useState<any>(null);
    const searchParams = useSearchParams();
    const blogId = searchParams.get("id");
  
    useEffect(() => {
      if (blogId) {
        const blog = DUMMY_BLOGS.find(blog => blog.id === +blogId);
        setSelectedBlog(blog);
      } else {
        setSelectedBlog(null);
      }
    }, [blogId]);
  
    return (
        <>
            <section className="w-full h-[660px] relative">
                <div className="bg-blog-background h-full w-full bg-cover bg-center opacity-70 absolute" />
                <Link href="#feature" className="absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">s
                    <h1 className="text-5xl z-10">Blog</h1>
                    <Image src="/Down.png" alt="Down arrow" className="w-16 h-16 self-center" width={64} height={64} />
                </Link>
            </section>
            {selectedBlog ? (
                <BlogContent blog={selectedBlog} />
            ) : (
                <BlogCard id="feature" />
            )}
            <BlogGallery />
        </>
    )
}