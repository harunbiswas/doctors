import AboutVideo from "../../layouts/frontend/about/AboutVideo";
import ClientLogo from "../../layouts/frontend/about/ClientLogo";
import Cta from "../../layouts/frontend/about/Cta";
import Doctors from "../../layouts/frontend/about/Doctors";
import Services from "../../layouts/frontend/about/Targets";
import Hero from "../../layouts/home/Hero";
import Aperments from "../../layouts/services/Aperments";
import MadicalServices from "../../layouts/services/MadicalServices";

export default function Home() {
  return (
    <>
      <div className="home">
        <Hero />
        <Services />

        {/* <!-- Start --> */}
        <section className="section bg-white pb-0">
          <AboutVideo />
          <MadicalServices />
          <Cta />
        </section>
        {/* <!-- End --> */}
        <ClientLogo />

        {/* <!-- End --> */}

        {/* <!-- Start --> */}
        <section className="section bg-white">
          <Doctors />
          <Aperments />
        </section>
        {/* <!--end section--> */}
        {/* <!-- End --> */}

        {/* <!-- Back to top --> */}
        <a
          href="#"
          onClick="topFunction()"
          id="back-to-top"
          className="btn btn-icon btn-pills btn-primary back-to-top"
        >
          <i data-feather="arrow-up" className="icons"></i>
        </a>
        {/* <!-- Back to top --> */}

        {/* <!-- Offcanvas Start --> */}
        <div
          className="offcanvas bg-white offcanvas-top"
          tabindex="-1"
          id="offcanvasTop"
        >
          <div className="offcanvas-body d-flex align-items-center align-items-center">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="text-center">
                    <h4>Search now.....</h4>
                    <div className="subcribe-form mt-4">
                      <form>
                        <div className="mb-0">
                          <input
                            type="text"
                            id="help"
                            name="name"
                            className="border bg-white rounded-pill"
                            required=""
                            placeholder="Search"
                          />
                          <button
                            type="submit"
                            className="btn btn-pills btn-primary"
                          >
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <!--end col--> */}
              </div>
              {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
          </div>
        </div>
        {/* <!-- Offcanvas End --> */}

        {/* <!-- Offcanvas Start --> */}
        <div
          className="offcanvas offcanvas-end bg-white shadow"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header p-4 border-bottom">
            <h5 id="offcanvasRightLabel" className="mb-0">
              <img
                src="../assets/images/logo-dark.png"
                height="24"
                className="light-version"
                alt=""
              />
              <img
                src="../assets/images/logo-light.png"
                height="24"
                className="dark-version"
                alt=""
              />
            </h5>
            <button
              type="button"
              className="btn-close d-flex align-items-center text-dark"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="uil uil-times fs-4"></i>
            </button>
          </div>
          <div className="offcanvas-body p-4 px-md-5">
            <div className="row">
              <div className="col-12">
                {/* <!-- Style switcher --> */}
                <div id="style-switcher">
                  <div>
                    <ul className="text-center list-unstyled mb-0">
                      <li className="d-grid">
                        <a
                          href="javascript:void(0)"
                          className="rtl-version t-rtl-light"
                          onClick="setTheme('style-rtl')"
                        >
                          <img
                            src="../assets/images/layouts/landing-light-rtl.png"
                            className="img-fluid rounded-md shadow-md d-block"
                            alt=""
                          />
                          <span className="text-muted mt-2 d-block">
                            RTL Version
                          </span>
                        </a>
                      </li>
                      <li className="d-grid">
                        <a
                          href="javascript:void(0)"
                          className="ltr-version t-ltr-light"
                          onClick="setTheme('style')"
                        >
                          <img
                            src="../assets/images/layouts/landing-light.png"
                            className="img-fluid rounded-md shadow-md d-block"
                            alt=""
                          />
                          <span className="text-muted mt-2 d-block">
                            LTR Version
                          </span>
                        </a>
                      </li>
                      <li className="d-grid">
                        <a
                          href="javascript:void(0)"
                          className="dark-rtl-version t-rtl-dark"
                          onClick="setTheme('style-dark-rtl')"
                        >
                          <img
                            src="../assets/images/layouts/landing-dark-rtl.png"
                            className="img-fluid rounded-md shadow-md d-block"
                            alt=""
                          />
                          <span className="text-muted mt-2 d-block">
                            RTL Version
                          </span>
                        </a>
                      </li>
                      <li className="d-grid">
                        <a
                          href="javascript:void(0)"
                          className="dark-ltr-version t-ltr-dark"
                          onClick="setTheme('style-dark')"
                        >
                          <img
                            src="../assets/images/layouts/landing-dark.png"
                            className="img-fluid rounded-md shadow-md d-block"
                            alt=""
                          />
                          <span className="text-muted mt-2 d-block">
                            LTR Version
                          </span>
                        </a>
                      </li>
                      <li className="d-grid">
                        <a
                          href="javascript:void(0)"
                          className="dark-version t-dark mt-4"
                          onClick="setTheme('style-dark')"
                        >
                          <img
                            src="../assets/images/layouts/landing-dark.png"
                            className="img-fluid rounded-md shadow-md d-block"
                            alt=""
                          />
                          <span className="text-muted mt-2 d-block">
                            Dark Version
                          </span>
                        </a>
                      </li>
                      <li className="d-grid">
                        <a
                          href="javascript:void(0)"
                          className="light-version t-light mt-4"
                          onClick="setTheme('style')"
                        >
                          <img
                            src="../assets/images/layouts/landing-light.png"
                            className="img-fluid rounded-md shadow-md d-block"
                            alt=""
                          />
                          <span className="text-muted mt-2 d-block">
                            Light Version
                          </span>
                        </a>
                      </li>
                      <li className="d-grid">
                        <a
                          href="../admin/index.html"
                          target="_blank"
                          className="mt-4"
                        >
                          <img
                            src="../assets/images/layouts/light-dash.png"
                            className="img-fluid rounded-md shadow-md d-block"
                            alt=""
                          />
                          <span className="text-muted mt-2 d-block">
                            Admin Dashboard
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- end Style switcher --> */}
              </div>
              {/* <!--end col--> */}
            </div>
            {/* <!--end row--> */}
          </div>

          <div className="offcanvas-footer p-4 border-top text-center">
            <ul className="list-unstyled social-icon mb-0">
              <li className="list-inline-item mb-0">
                <a
                  href="https://1.envato.market/doctris"
                  target="_blank"
                  className="rounded"
                >
                  <i
                    className="uil uil-shopping-cart align-middle"
                    title="Buy Now"
                  ></i>
                </a>
              </li>
              <li className="list-inline-item mb-0">
                <a
                  href="https://dribbble.com/shreethemes"
                  target="_blank"
                  className="rounded"
                >
                  <i
                    className="uil uil-dribbble align-middle"
                    title="dribbble"
                  ></i>
                </a>
              </li>
              <li className="list-inline-item mb-0">
                <a
                  href="https://www.facebook.com/shreethemes"
                  target="_blank"
                  className="rounded"
                >
                  <i
                    className="uil uil-facebook-f align-middle"
                    title="facebook"
                  ></i>
                </a>
              </li>
              <li className="list-inline-item mb-0">
                <a
                  href="https://www.instagram.com/shreethemes/"
                  target="_blank"
                  className="rounded"
                >
                  <i
                    className="uil uil-instagram align-middle"
                    title="instagram"
                  ></i>
                </a>
              </li>
              <li className="list-inline-item mb-0">
                <a
                  href="https://twitter.com/shreethemes"
                  target="_blank"
                  className="rounded"
                >
                  <i
                    className="uil uil-twitter align-middle"
                    title="twitter"
                  ></i>
                </a>
              </li>
              <li className="list-inline-item mb-0">
                <a href="mailto:support@shreethemes.in" className="rounded">
                  <i
                    className="uil uil-envelope align-middle"
                    title="email"
                  ></i>
                </a>
              </li>
              <li className="list-inline-item mb-0">
                <a
                  href="https://shreethemes.in"
                  target="_blank"
                  className="rounded"
                >
                  <i className="uil uil-globe align-middle" title="website"></i>
                </a>
              </li>
            </ul>
            {/* <!--end icon--> */}
          </div>
        </div>
        {/* <!-- Offcanvas End --> */}

        {/* <!-- MOdal Start --> */}
        <div
          className="modal fade"
          id="watchvideomodal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content video-modal rounded overflow-hidden">
              <video className="w-100" controls autoPlay muted loop>
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                {/* <!--Browser does not support <video> tag --> */}
              </video>
            </div>
          </div>
        </div>
        {/* <!-- MOdal End --> */}
      </div>
    </>
  );
}
