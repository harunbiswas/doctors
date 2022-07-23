import { useState } from "react";
import AdminAddBlog from "../../components/admin/blog/AdminAddBlog";
import Blog from "../../components/blogs/Blog";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  const [isAddBlog, setIsAddBlog] = useState(false);

  const isBlogShowHandler = () => {
    setIsAddBlog(true);
  };
  const isBloghideHandler = () => {
    setIsAddBlog(false);
  };
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
          {blogs?.map((blog, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-12 mt-4">
              <Blog />
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12 mt-4">
            <ul className="pagination justify-content-end mb-0 list-unstyled">
              <li className="page-item">
                <a
                  className="page-link"
                  href="javascript:void(0)"
                  aria-label="Previous"
                >
                  Prev
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="javascript:void(0)">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0)">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0)">
                  3
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="javascript:void(0)"
                  aria-label="Next"
                >
                  Next
                </a>
              </li>
            </ul>
            {/* <!--end pagination--> */}
          </div>
          {/* <!--end col--> */}
        </div>
        {/* <!--end row--> */}
        <AdminAddBlog data={{ isBloghideHandler, isAddBlog }} />
      </div>
    </>
  );
}
