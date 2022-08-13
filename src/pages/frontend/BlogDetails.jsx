import { BlogHero } from "../../layouts/frontend/blog/BlogHero";
import SingleBlogBody from "../../layouts/frontend/blog/SingleBlogBody";
import Header from "../../layouts/headers/Header";

export default function BlogDetails() {
  return (
    <>
      <Header />
      <div className="blog-details">
        <BlogHero />
        <SingleBlogBody />
      </div>
    </>
  );
}
