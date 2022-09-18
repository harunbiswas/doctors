import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Values from "../../Values";

export default function DoctorProfileExperience() {
  const settings = {
    dots: true,
    infinite: false,
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
  const [reload, setReload] = useState(null);

  const [items, setItem] = useState([]);
  const { id } = useParams();
  const [role, setRole] = useState("");
  useEffect(() => {
    const url = `${Values.BASE_URL}/doctor/experience/${id}`;

    axios
      .get(url)
      .then((d) => {
        setItem(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });

    //set role
    setRole(JSON.parse(localStorage.getItem("login"))?.value.loginData.role);
  }, [reload]);

  const deleteHandler = async (e) => {
    const url = `${Values.BASE_URL}/doctor/experience/${e}`;
    try {
      const data = await axios.delete(url, Values.consfig);
      setReload(data);
    } catch (e) {
      console.log(e.response);
    }
  };
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="pills-experience"
        role="tabpanel"
        aria-labelledby="experience-tab"
      >
        <h5 className="mb-1">Experience:</h5>

        <div className="row">
          <div className="col-12 mt-4">
            <div className="col-md-12">
              <div className="slider-range-four tiny-timeline">
                <Slider {...settings}>
                  {items?.map((item, i) => (
                    <div key={i} className="tiny-slide text-center">
                      <div className="card border-0 p-5 item-box mb-2 shadow rounded position-relative">
                        <p className="text-muted mb-0">
                          {item?.fromDate} - {item?.toDate}
                        </p>
                        <h6 className="mt-1">{item?.role}</h6>
                        <p className="text-muted mb-0">{item?.institute}</p>
                        {(role === "clinic" || role === "doctor") && (
                          <button
                            className="btn btn-outline-danger position-absolute"
                            style={{
                              top: "5px",
                              right: "5px",
                            }}
                            onClick={(e) => deleteHandler(item?.id)}
                          >
                            delete
                          </button>
                        )}
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
