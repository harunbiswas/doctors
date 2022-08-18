import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogHero } from "../../layouts/frontend/blog/BlogHero";
import SingleBlogBody from "../../layouts/frontend/blog/SingleBlogBody";
import Header from "../../layouts/headers/Header";
import Values from "../../Values";

export default function BlogDetails() {
  const { id = 1 } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const url = `${Values.BASE_URL}/admin/blog/${id}`;

    axios
      .get(url)
      .then((d) => {
        setData(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [id && id]);
  return (
    <>
      <Header />
      <div className="blog-details">
        <BlogHero />
        <SingleBlogBody data={data} />
      </div>
    </>
  );
}
