import { formatDate } from "@/app/utilities/dateUtils";
import Carousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { IBlog } from "@/app/interfaces/blog.interface";

interface BlogContentProps {
    blog: IBlog;
}

const OPTIONS: EmblaOptionsType = {
  align: 'center',
  loop: true,
  slidesToScroll: 'auto'
}
  
  const BlogContent: React.FC<BlogContentProps> = ({ blog }) => {
    return (
      <section className="pb-48 pt-10 px-10 lg:px-32 xl:px-64">
        <p className="text-xl font-semibold">{formatDate(blog.created_at)}</p>
        <h2 className="text-3xl pt-2 font-semibold text-left capitalize">{blog.title}</h2>
        <p className="text-xl pt-12 pb-48">{blog.body}</p>
        {blog.additionalResources && (
          <>
            <h2 className="text-3xl md:text-4xl pb-12 font-bold">Additional Resources</h2>
            <Carousel slides={blog.additionalResources} options={OPTIONS} contentType="additional"></Carousel>
          </>
        )}
      </section>
    );
  };

export default BlogContent