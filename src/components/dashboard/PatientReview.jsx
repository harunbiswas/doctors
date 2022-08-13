import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import img from "../../assets/images/client/01.jpg";
import logoImg from "../../assets/images/client/amazon.png";

export default function PatientReview() {
  const [items, setItems] = useState([1, 1, 1, 1, 1, 1]);
  const [reviews, setReviews] = useState([1, 1, 1, 1, 1]);
  const [logos, setLogos] = useState([1, 1, 1, 1]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <div className="card border-0 shadow rounded">
        <div className="p-4 border-bottom">
          <h6 className="mb-0">Patient's Review</h6>
        </div>

        <div className="p-4">
          <div className="client-review-slider">
            <Slider {...settings}>
              {items?.map((item, i) => (
                <div key={i} className="tiny-slide">
                  <p className="text-muted fst-italic">
                    " It seems that only melodies in order to have a
                    'ready-made' text to sing with the melody of the originalthe
                    'Lorem Ipsum', which is said to have originated century. "
                  </p>

                  <div className="d-inline-flex align-items-center">
                    <img
                      src={img}
                      className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                      alt=""
                    />
                    <div className="ms-3">
                      <ul className="list-unstyled d-block mb-0">
                        {reviews?.map((review, i) => (
                          <li key={i} className="list-inline-item">
                            <i className="mdi mdi-star text-warning">
                              <AiFillStar />
                            </i>
                          </li>
                        ))}
                      </ul>
                      <h6 className="text-primary">
                        - Thomas Israel{" "}
                        <small className="text-muted">C.E.O</small>
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* <!--end carousel--> */}

          <div className="row justify-content-center mt-3">
            {logos?.map((logo, i) => (
              <div key={i} className="col-md col-6 text-center pt-3">
                <img src={logoImg} className="avatar avatar-client" alt="" />
              </div>
            ))}
          </div>
          {/* <!--end row--> */}
        </div>
      </div>
    </>
  );
}
