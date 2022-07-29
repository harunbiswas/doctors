import moment from "moment";
import RelatedBlog from "./RelatedBlog";
import SideBar from "./SideBar";

export default function SingleBlogBody({ data }) {
  return (
    <>
      {/* <!-- Start --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-7 overflow-hidden">
              <h4>{data && data.title}</h4>
              <img
                src={data && data.thumbnail}
                className="img-fluid rounded shadow single-blog-img"
                alt=""
              />
              <ul className="list-unstyled mt-4">
                <li className="list-inline-item user text-muted me-2">
                  <i className="mdi mdi-account"></i> {data && data.creatorName}
                </li>
                <li className="list-inline-item date text-muted">
                  <i className="mdi mdi-calendar-check"></i>{" "}
                  {data && moment(data.createdAt).format("MMMM Do YYYY")}
                </li>
              </ul>

              <p className="text-muted mt-4">{data && data.description}</p>
            </div>
            {/* <!--end col--> */}

            <SideBar />
          </div>
          {/* <!--end row--> */}
        </div>
        <RelatedBlog id={data && data.id} />
      </section>
      {/* <!--end section--> */}
      {/* <!-- End --> */}
    </>
  );
}
