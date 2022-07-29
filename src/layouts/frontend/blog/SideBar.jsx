import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import RecentBlog from "./RecentBlog";

export default function SideBar() {
  return (
    <>
      <div className="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div className="card border-0 sidebar sticky-bar rounded shadow">
          <div className="card-body">
            {/* <!-- SEARCH --> */}
            <div className="widget mb-4 pb-2">
              <h5 className="widget-title">Search</h5>
              <div id="search2" className="widget-search mt-4 mb-0">
                <form
                  role="search"
                  method="get"
                  id="searchform"
                  className="searchform"
                >
                  <div>
                    <input
                      type="text"
                      className="border rounded"
                      name="s"
                      id="s"
                      placeholder="Search Keywords..."
                    />
                    <input type="submit" id="searchsubmit" value="Search" />
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- SEARCH --> */}

            {/* <!-- RECENT POST --> */}
            <RecentBlog />
            {/* <!-- SOCIAL --> */}
            <div className="widget">
              <h5 className="widget-title">Follow us</h5>
              <ul className="list-unstyled social-icon mb-0 mt-4">
                <li className="list-inline-item mx-1">
                  <a
                    target="blanck"
                    href="https://www.facebook.com/"
                    className="rounded"
                  >
                    <i
                      data-feather="facebook"
                      className="fea icon-sm fea-social"
                    >
                      <FiFacebook />
                    </i>
                  </a>
                </li>
                <li className="list-inline-item mx-1">
                  <a
                    target="blanck"
                    href="https://www.instagram.com/"
                    className="rounded"
                  >
                    <i
                      data-feather="instagram"
                      className="fea icon-sm fea-social"
                    >
                      <FiInstagram />
                    </i>
                  </a>
                </li>
                <li className="list-inline-item mx-1">
                  <a
                    target="blanck"
                    href="https://www.twitter.com/"
                    className="rounded"
                  >
                    <i
                      data-feather="twitter"
                      className="fea icon-sm fea-social"
                    >
                      <FiTwitter />
                    </i>
                  </a>
                </li>
                <li className="list-inline-item mx-1">
                  <a
                    target="blanck"
                    href="https://www.linkedin.com/"
                    className="rounded"
                  >
                    <i
                      data-feather="linkedin"
                      className="fea icon-sm fea-social"
                    >
                      <FiLinkedin />
                    </i>
                  </a>
                </li>
              </ul>
              {/* <!--end icon--> */}
            </div>
            {/* <!-- SOCIAL --> */}
          </div>
        </div>
      </div>
    </>
  );
}
