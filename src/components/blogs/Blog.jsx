import moment from "moment";
import { Link } from "react-router-dom";

export default function Blog({ data }) {
  return (
    <>
      <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
        <img src={data && data.thumbnail} className="img-fluid" alt="" />
        <div className="card-body p-4">
          <ul className="list-unstyled mb-2">
            <li className="list-inline-item text-muted small me-3">
              <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
              {data && moment(data.createdAt).fromNow()}
            </li>
            {data && data.timeToRead && (
              <li className="list-inline-item text-muted small">
                <i className="uil uil-clock text-dark h6 me-1"></i>
                {data.timeToRead}
              </li>
            )}
          </ul>
          <Link
            to={`/${
              (localStorage.getItem("login") &&
                JSON.parse(localStorage.getItem("login")).value.loginData
                  .role === "admin") ||
              (JSON.parse(localStorage.getItem("login")).value.loginData
                .role === "editor" &&
                "admin/") ||
              ""
            }blog-detail/${data && data.id}`}
            className="text-dark title h5"
          >
            {data && data.title}
          </Link>
          <div className="post-meta d-flex justify-content-between mt-3">
            <ul className="list-unstyled mb-0">
              <li className="list-inline-item me-2 mb-0">
                <a href="#" className="text-muted like">
                  <i className="mdi mdi-heart-outline me-1"></i>00
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-muted comments">
                  <i className="mdi mdi-comment-outline me-1"></i>00
                </a>
              </li>
            </ul>
            <Link to={`/admin/blog-detail/${data.id}`} className="link">
              Read More <i className="mdi mdi-chevron-right align-middle"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
