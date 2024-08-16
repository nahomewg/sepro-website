'use client'
import Carousel from "./Carousel"
import { EmblaOptionsType } from "embla-carousel"
import { useEffect, useState } from "react"
import { getBlogs } from "../app/api/supaApi";
import { Blog } from "@/app/interfaces/blog.interface"
import { DUMMY_BLOGS } from "@/constants"

const OPTIONS: EmblaOptionsType = {
    align: 'center',
    loop: true,
    slidesToScroll: 'auto'
}

const BlogGallery = () => {
  // const [blogs, setBlogs] = useState<Blog[]>([]);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const data = await getBlogs();
  //       setBlogs(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchBlogs();
  // }, [])

  return (
    <div className="pb-48 px-10 lg:px-32 xl:px-64">
      <h2 className="text-3xl md:text-4xl pb-12 font-bold">Blog</h2>
      <Carousel slides={DUMMY_BLOGS} options={OPTIONS} contentType="blog"></Carousel>
    </div>
  )
}

export default BlogGallery