import { useState } from "react";
import DoctorCardOne from "../../components/doctor/DoctorCardOne";

export default function ClinicProfileOverview({ data }) {
  const [items, setItems] = useState([1, 1, 1, 1]);

  return (
    <>
      <div
        className="tab-pane fade show active"
        id="pills-overview"
        role="tabpanel"
        aria-labelledby="overview-tab"
      >
        <h5 className="mb-1">{data.firstName && data.firstName}</h5>
        <a href={`tell:${data.phone && data.phone}`} className="text-primary">
          {data?.phone}
        </a>

        <p className="text-muted mt-4">{data.description}</p>
        <h5>Serviceses: </h5>
        <ul className="list-unstyled mt-2">
          {data.departments &&
            data.departments.map((dep) => (
              <li key={dep.id} className="mt-1">
                <i className="uil uil-arrow-right text-primary"></i> {dep.title}
              </li>
            ))}
        </ul>
        <h5>Doctors: </h5>
        <div className="row">
          {data.doctors &&
            data.doctors?.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2">
                <DoctorCardOne data={item} />
              </div>
            ))}
        </div>
        {/* <!--end row--> */}
      </div>
      {/* <!--end teb pane--> */}
    </>
  );
}
