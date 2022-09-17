import { useState } from "react";
import img from "../../../assets/images/about/about-2.png";
import Video from "../../../components/basic/Video";

export default function AboutVideo() {
  const [isHover, setIsHover] = useState(true);

  const hoverHandler = () => {
    setIsHover(false);
  };

  const hoverOutHandler = () => {
    setIsHover(true);
  };

  // video handler
  const [show, setShow] = useState(false);
  const hideHandler = () => {
    if (show) {
      setShow(false);
    }
  };
  const showHandler = () => {
    if (!show) {
      setShow(true);
    }
  };

  return (
    <>
      {/* <!-- Start --> */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="position-relative">
              <img src={img} className="img-fluid" alt="" />
              <div className="play-icon">
                <a
                  onClick={showHandler}
                  onMouseEnter={hoverHandler}
                  onMouseLeave={hoverOutHandler}
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#watchvideomodal"
                  className="play-btn video-play-icon"
                >
                  <i className="mdi mdi-play text-primary rounded-circle bg-white title-bg-dark shadow"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!--end col--> */}

          <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="section-title ms-lg-5">
              <span className="badge badge-pill badge-soft-primary">
                About Doctris
              </span>
              <h4 className="title mt-3 mb-4">
                Good Services And Better <br /> Health By Our Specialists
              </h4>
              <p className="para-desc text-muted">
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
              <p className="para-desc text-muted">
                The most well-known dummy text is the 'Lorem Ipsum', which is
                said to have originated in the 16th century. Lorem Ipsum is
                composed in a pseudo-Latin language which more or less
                corresponds to 'proper' Latin. It contains a series of real
                Latin words.
              </p>
              <div className="mt-4">
                <a href="/about" className="btn btn-soft-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          {<Video hideHandler={hideHandler} show={show} />}
          {/* <!--end col--> */}
        </div>
      </div>
    </>
  );
}
