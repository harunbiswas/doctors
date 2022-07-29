import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Blog from "../../../components/blogs/Blog";
import Values from "../../../Values";

export default function RelatedBlog({ id = 1 }) {
  const [items, setItems] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

  // call blogs
  useEffect(() => {
    const url = `${Values.BASE_URL}/admin/blogs`;
    axios
      .get(url)
      .then((d) => {
        setItems(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [id]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <>
      <div className="container mt-100 mt-60">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h4 className="title mb-0">Related Post:</h4>
            </div>
          </div>
          {/* <!--end col--> */}
        </div>
        {/* <!--end row--> */}

        <div className="row">
          <div className="col-lg-12 mt-4 pt-2">
            <div className="slider-range-three">
              <Slider {...settings}>
                {items?.map(
                  (item, i) =>
                    item.id !== id &&
                    i < 11 && (
                      <div key={i} className="px-3">
                        <Blog data={item} />
                      </div>
                    )
                )}
              </Slider>
            </div>
          </div>
          {/* <!--end col--> */}
        </div>
        {/* <!--end row--> */}
      </div>
    </>
  );
}
