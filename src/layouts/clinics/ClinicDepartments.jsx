import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function ClinicDepartments(data) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(data);
  }, [data]);
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="pills-experience"
        role="tabpanel"
        aria-labelledby="experience-tab"
      >
        <h4>Our Departments:</h4>

        <div className="row">
          <div className="col-12 mt-4">
            <div className="col-md-12">
              <div className="slider-range-four tiny-timeline">
                <Slider {...settings}>
                  {items.data &&
                    items.data.map((item, i) => (
                      <div key={i} className="tiny-slide text-center">
                        <div className="card border-0 p-4 item-box mb-2 shadow rounded">
                          <h6 className="mt-1">{item.title}</h6>
                          <p className="text-muted mb-0">{item.discription}</p>
                        </div>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
          {/* <!--end col--> */}
        </div>
        {/* <!--end row--> */}
      </div>
      {/* <!--end teb pane--> */}
    </>
  );
}
