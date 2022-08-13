import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminDoctorProfileSettings from "../../layouts/admin/AdminDoctorProfileSettings";
import DoctorDepartments from "../../layouts/clinics/ClinicDepartments";
import ClinicProfileOverview from "../../layouts/clinics/ClinicProfileOverview";
import DoctorProfileReviews from "../../layouts/doctor-dashboard/DoctorProfileReviews";
import DoctorProfileTimeTable from "../../layouts/doctor-dashboard/DoctorProfileTimeTable";
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
      name: "Time Table",
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
      <div class="layout-specing">
        <div class="d-md-flex justify-content-between">
          <h5 class="mb-0">Clinic Profile & Settings</h5>

          <nav aria-label="breadcrumb" class="d-inline-block mt-4 mt-sm-0">
            <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
              <li class="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li class="breadcrumb-item">
                <Link to="/admin/clinic">Clinics</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Profile
              </li>
            </ul>
          </nav>
        </div>

        <div class="card bg-white rounded shadow overflow-hidden mt-4 border-0">
          <div class="p-5 bg-primary bg-gradient"></div>
          <div class="avatar-profile d-flex margin-nagative mt-n5 position-relative ps-3">
            <img
              src={data.image && data.image}
              class="rounded-circle shadow-md avatar avatar-medium"
              alt=""
            />
            <div class="mt-4 ms-3 pt-3">
              <h5 class="mt-3 mb-1">{data.firstName && data.firstName}</h5>
              <p class="text-muted mb-0">{data.address && data.address}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-12 mt-4">
              <div class="card border-0 rounded-0 p-4">
                <ul
                  class="nav nav-pills nav-justified flex-column flex-sm-row rounded shadow overflow-hidden bg-light"
                  id="pills-tab"
                  role="tablist"
                >
                  {buttons?.map((button) => (
                    <li key={button.id} class="nav-item">
                      <a
                        onClick={(e) => buttonHandler(button.id)}
                        class={`nav-link rounded-0 ${
                          (buttonID === button.id && "active") || ""
                        }`}
                        id="overview-tab"
                        data-bs-toggle="pill"
                        role="tab"
                        aria-controls="pills-overview"
                        aria-selected="false"
                      >
                        <div class="text-center pt-1 pb-1">
                          <h4 class="title fw-normal mb-0">{button.name}</h4>
                        </div>
                      </a>
                      {/* <!--end nav link--> */}
                    </li>
                  ))}
                </ul>
                {/* <!--end nav pills--> */}

                <div class="tab-content mt-2" id="pills-tabContent">
                  {(buttonID === 1 && <ClinicProfileOverview data={data} />) ||
                    (buttonID === 2 && (
                      <DoctorDepartments data={data.departments} />
                    )) ||
                    (buttonID === 3 && <DoctorProfileReviews />) ||
                    (buttonID === 4 && <DoctorProfileTimeTable />) ||
                    (buttonID === 5 && <AdminDoctorProfileSettings />)}
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
