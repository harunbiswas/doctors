import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TimeTable from "../../components/doctor/TimeTable";
import AddTimeTableFrom from "../../components/form/AddTimeTableFrom";
import Values from "../../Values";

export default function DoctorProfileTimeTable() {
  const [role, setRole] = useState("");
  const [isAddTimeTable, setIsTimeTable] = useState(false);
  const [data, setData] = useState({});

  const addTimeTableOpen = () => {
    setIsTimeTable(true);
  };
  const addTimeTableClose = () => {
    setIsTimeTable(false);
  };
  const { id } = useParams();
  useEffect(() => {
    setRole(JSON.parse(localStorage.getItem("login"))?.value.loginData.role);

    axios
      .get(`${Values.BASE_URL}/clinic/doctor/${id}`)
      .then((d) => {
        setData(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  return (
    <>
      <div
        className="tab-pane fade show active"
        id="pills-timetable"
        role="tabpanel"
        aria-labelledby="timetable-tab"
      >
        {role && (role === "clinic" || role === "doctor") && (
          <button
            className="btn btn-primary text-capitalize"
            onClick={addTimeTableOpen}
          >
            add time table
          </button>
        )}

        {isAddTimeTable && (
          <AddTimeTableFrom prop={{ handler: addTimeTableClose }} />
        )}
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="card border-0 p-3 rounded shadow">
              <TimeTable />
            </div>
          </div>
          {/* <!--end col--> */}

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div className="card border-0 text-center features feature-primary">
              <div className="icon text-center mx-auto rounded-md">
                <span className="mb-0">
                  <i className="uil uil-phone h3"></i>
                </span>
              </div>

              <div className="card-body p-0 mt-4">
                <h5 className="title fw-bold">Phone</h5>
                <p className="text-muted">
                  Great doctor if you need your family member to get effective
                  immediate assistance
                </p>
                <a href={`tel:${data?.phone}`} className="link">
                  {data?.phone}
                </a>
              </div>
            </div>
          </div>
          {/* <!--end col--> */}

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div className="card border-0 text-center features feature-primary">
              <div className="icon text-center mx-auto rounded-md">
                <span className="mb-0">
                  <i className="uil uil-envelope h3"></i>
                </span>
              </div>

              <div className="card-body p-0 mt-4">
                <h5 className="title fw-bold">Email</h5>
                <p className="text-muted">
                  Great doctor if you need your family member to get effective
                  immediate assistance
                </p>
                <a href={`mailto:${data?.email}`} className="link">
                  {data?.email}
                </a>
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
