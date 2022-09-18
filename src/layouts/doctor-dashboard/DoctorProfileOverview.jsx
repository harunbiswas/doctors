import { useState } from "react";
import { Link } from "react-router-dom";

export default function DoctorProfileOverview({ data }) {
  const [items, setItems] = useState([1, 1, 1, 1]);

  return (
    <>
      <div
        className="tab-pane fade show active"
        id="pills-overview"
        role="tabpanel"
        aria-labelledby="overview-tab"
      >
        <h5 className="mb-1">{data && data.firstName + " " + data.lastName}</h5>
        <Link to="" className="text-primary">
          {data && data.title}
        </Link>
        <span> {data && data.degree}</span>

        <p className="text-muted mt-4">{data && data.bio}</p>
        <h6>Contact: </h6>
        <ul className="list-unstyled mt-4">
          <li className="mt-1">
            <i className="uil uil-arrow-right text-primary"></i>
            <a href={`tell: ${data && data.phone}`}>{data && data.phone}</a>
          </li>
          <li className="mt-1">
            <i className="uil uil-arrow-right text-primary"></i>
            <a href={`mailto: ${data && data.phone}`}>{data && data.email}</a>
          </li>
        </ul>
      </div>
    </>
  );
}
