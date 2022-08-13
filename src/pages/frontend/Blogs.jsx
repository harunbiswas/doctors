import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../../components/basic/Pagination";
import Blog from "../../components/blogs/Blog";
import CommonHero from "../../layouts/frontend/basic/CommonHero";
import Values from "../../Values";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = `${Values.BASE_URL}/admin/blogs`;
    axios
      .get(url)
      .then((d) => {
        setBlogs(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  // pagination
  const [pages, setPages] = useState(1);
  const pageHandler = (e) => {
    setPages(e);
  };
  const perPageNum = 12;

  const heroData = {
    title: "Blogs",
    text: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.",
  };

  return (
    <>
      <div className="blogs">
        <CommonHero data={heroData} />
        <section className="section">
          <div className="container">
            <div className="row">
              {blogs?.map(
                (blog, i) =>
                  i + 1 > perPageNum * (pages - 1) &&
                  i < perPageNum * pages && (
                    <div key={i} className="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                      <Blog data={blog} />
                    </div>
                  )
              )}
            </div>
            {/* <!--end row--> */}
          </div>
          {/* <!--end container--> */}
          {blogs.length > 10 && (
            <Pagination
              data={{ num: blogs.length, handler: pageHandler, perPageNum }}
            />
          )}
        </section>
        {/* <!--end section--> */}
      </div>
    </>
  );
}
