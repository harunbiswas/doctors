import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoctorProfileExperience from "../../layouts/doctor-dashboard/DoctorProfileExperience";
import DoctorProfileOverview from "../../layouts/doctor-dashboard/DoctorProfileOverview";
import DoctorProfileReviews from "../../layouts/doctor-dashboard/DoctorProfileReviews";
import DoctorProfileTimeTable from "../../layouts/doctor-dashboard/DoctorProfileTimeTable";
import CommonHero from "../../layouts/frontend/basic/CommonHero";
import Values from "../../Values";

export default function DoctorProfileFrontend() {
  const [data, setData] = useState({});
  const [buttons, setButtons] = useState([
    {
      id: 1,
      name: "Overview",
    },
    {
      id: 2,
      name: "Experience",
    },
    {
      id: 3,
      name: "Reviews",
    },

    {
      id: 5,
      name: "Time Table",
    },
  ]);
  const [buttonID, setButtonID] = useState(1);
  const buttonHandler = (e) => {
    setButtonID(e);
  };
  const [message, setMessage] = useState("");
  const hours = new Date().getHours();
  const { id } = useParams();
  useEffect(() => {
    setMessage(
      (hours < 12 && "Good Morning") ||
        (hours < 18 && "Good Afternoon") ||
        "Good Evening"
    );

    axios
      .get(`${Values.BASE_URL}/clinic/doctor/${id}`)
      .then((d) => {
        setData(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  const info = {
    title: data?.firstName + " " + data?.lastName,
    text: data.bio,
  };

  return (
    <>
      <CommonHero data={info} />
      <div className="doctor-profile">
        {/* <!-- Start Hero --> */}
        <section className="bg-dashboard my-lg-5">
          <div className="container mt-xl-5">
            <div className="row">
              <div className="col-12">
                <div className="card border-0 rounded shadow">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-5 position-relative">
                      <img
                        src={data?.image}
                        className="img-fluid  dr-profile-img"
                        alt=""
                      />
                    </div>

                    <div className="col-xl-8 col-lg-8 col-md-7">
                      <div className="p-lg-5 p-4">
                        <small className="text-muted">
                          {moment(new Date()).format("LLLL")}
                        </small>

                        <h4 className="my-3">
                          {message} ! <br />{" "}
                          <span className="text-primary h2">
                            Dr. {data?.firstName} {data?.lastName}
                          </span>
                        </h4>
                        <p className="para-desc text-muted">{data?.bio}</p>
                        <div className="py-3">
                          <button className="btn btn-primary">
                            Booking Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--end col--> */}
            </div>
            {/* <!--end row--> */}

            <div className="row">
              <div className="col-12 mt-4 pt-2">
                <div className="card border-0 shadow rounded p-4">
                  <ul
                    className="nav nav-pills nav-justified flex-column flex-sm-row rounded shadow overflow-hidden bg-light"
                    id="pills-tab"
                    role="tablist"
                  >
                    {buttons?.map((button) => (
                      <li key={button.id} className="nav-item">
                        <a
                          onClick={(e) => buttonHandler(button.id)}
                          className={`nav-link rounded-0 ${
                            (button.id === buttonID && "active") || ""
                          }`}
                          id="overview-tab"
                          data-bs-toggle="pill"
                          role="tab"
                          aria-controls="pills-overview"
                          aria-selected="false"
                        >
                          <div className="text-center pt-1 pb-1">
                            <h4 className="title fw-normal mb-0">
                              {button.name}
                            </h4>
                          </div>
                        </a>
                        {/* <!--end nav link--> */}
                      </li>
                    ))}
                  </ul>
                  {/* <!--end nav pills--> */}

                  <div className="tab-content mt-2" id="pills-tabContent">
                    {(buttonID === 1 && (
                      <DoctorProfileOverview data={data} />
                    )) ||
                      (buttonID === 2 && <DoctorProfileExperience />) ||
                      (buttonID === 3 && <DoctorProfileReviews />) ||
                      (buttonID === 5 && <DoctorProfileTimeTable />)}
                  </div>
                  {/* <!--end tab content--> */}
                </div>
              </div>
              {/* <!--end col--> */}
            </div>
            {/* <!--end row--> */}
          </div>
        </section>
      </div>
    </>
  );
}
