import axios from "axios";
import { useEffect, useState } from "react";
import AdminAddBlog from "../../components/admin/blog/AdminAddBlog";
import Pagination from "../../components/basic/Pagination";
import Blog from "../../components/blogs/Blog";
import Values from "../../Values";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [isAddBlog, setIsAddBlog] = useState(false);
  const [page, setPage] = useState(1);

  const isBlogShowHandler = () => {
    setIsAddBlog(true);
  };
  const isBloghideHandler = () => {
    setIsAddBlog(false);
  };

  // call blogs
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

  // page related
  const [pages, setPages] = useState(1);
  const pageHandler = (e) => {
    setPages(e);
  };
  const perPageNum = 12;
  return (
    <>
      <div className="layout-specing">
        <div className="d-md-flex justify-content-between">
          <div>
            <h5 className="mb-0">Blogs</h5>

            <nav aria-label="breadcrumb" className="d-inline-block mt-1">
              <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Doctris</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Blogs
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-4 mt-sm-0">
            <a
              onClick={isBlogShowHandler}
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#newblogadd"
            >
              Add Blog
            </a>
          </div>
        </div>
        <div className="row">
          {blogs?.map(
            (blog, i) =>
              i + 1 > perPageNum * (pages - 1) &&
              i < perPageNum * pages && (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-12 mt-4">
                  <Blog data={blog} />
                </div>
              )
          )}
        </div>

        <div className="row">
          <div className="col-12 mt-4">
            <Pagination
              data={{ num: blogs.length, handler: pageHandler, perPageNum }}
            />{" "}
          </div>
          {/* <!--end col--> */}
        </div>
        {/* <!--end row--> */}
        <AdminAddBlog data={{ isBloghideHandler, isAddBlog }} />
      </div>
    </>
  );
}
