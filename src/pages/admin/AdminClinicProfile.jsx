import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClinicLocation from "../../components/clinic/ClinicLocation";
import AdminClinicSettins from "../../layouts/clinics/AdminClinicSettins";
import DoctorDepartments from "../../layouts/clinics/ClinicDepartments";
import ClinicProfileOverview from "../../layouts/clinics/ClinicProfileOverview";
import DoctorProfileReviews from "../../layouts/doctor-dashboard/DoctorProfileReviews";
import Values from "../../Values";

export default function AdminClinicProfile() {
  const [buttons, setButtons] = useState([
    {
      id: 1,
      name: "OverView",
    },
    {
      id: 2,
      name: "Departments",
    },
    {
      id: 3,
      name: "Reviews",
    },
    {
      id: 4,
      name: "Location",
    },
    {
      id: 5,
      name: "Settings",
    },
  ]);
  const [buttonID, setButtonID] = useState(1);
  const buttonHandler = (e) => {
    setButtonID(e);
  };
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `${Values.BASE_URL}/clinic/list/${id}`;
    axios
      .get(url)
      .then((d) => {
        setData(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <div className="layout-specing">
        <div className="d-md-flex justify-content-between">
          <h5 className="mb-0">Clinic Profile & Settings</h5>

          <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/admin/clinic">Clinics</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Profile
              </li>
            </ul>
          </nav>
        </div>

        <div className="card bg-white rounded shadow overflow-hidden mt-4 border-0">
          <div className="p-5 bg-primary bg-gradient"></div>
          <div className="avatar-profile d-flex margin-nagative mt-n5 position-relative ps-3">
            <img
              src={data.image && data.image}
              className="rounded-circle shadow-md avatar avatar-medium"
              alt=""
            />
            <div className="mt-4 ms-3 pt-3">
              <h5 className="mt-3 mb-1">{data.firstName && data.firstName}</h5>
              <p className="text-muted mb-0">{data.address && data.address}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-4">
              <div className="card border-0 rounded-0 p-4">
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
                          (buttonID === button.id && "active") || ""
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
                  {(buttonID === 1 && <ClinicProfileOverview data={data} />) ||
                    (buttonID === 2 && (
                      <DoctorDepartments data={data.departments} />
                    )) ||
                    (buttonID === 3 && <DoctorProfileReviews />) ||
                    (buttonID === 4 && <ClinicLocation data={data} />) ||
                    (buttonID === 5 && <AdminClinicSettins />)}
                </div>
                {/* <!--end tab content--> */}
              </div>
            </div>
            {/* <!--end col--> */}
          </div>
          {/* <!--end row--> */}
        </div>
      </div>
    </>
  );
}
