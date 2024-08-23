'use client'
import Carousel from "./Carousel"
import { EmblaOptionsType } from "embla-carousel"
import { useEffect, useState } from "react"
import { getBlogs } from "../app/api/supaApi";
import { IBlog } from "@/app/interfaces/blog.interface"

const OPTIONS: EmblaOptionsType = {
    align: 'center',
    loop: true,
    slidesToScroll: 'auto'
}

const BlogGallery = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBlogs();
  }, [])

  return (
    <div className="pb-24 px-10 lg:px-32 xl:px-64">
      <h2 className="text-3xl md:text-4xl pb-12 font-bold">Blog</h2>
      <Carousel slides={blogs} options={OPTIONS} contentType="blog"></Carousel>
    </div>
  )
}

export default BlogGallery