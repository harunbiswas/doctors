import axios from "axios";
import { useEffect, useState } from "react";
import ClinicCard from "../../components/card/ClinicCard";
import Values from "../../Values";

export default function CLinicItems() {
  const [clinics, setClinics] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);
  useEffect(() => {
    const url = `${Values.BASE_URL}/clinic`;
    axios
      .get(url)
      .then((d) => {
        setClinics(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="row">
      {clinics?.map((clinic, i) => (
        <div key={i} className="col-xl-4 col-md-4 col-12 mt-5">
          {/* <div className="card features feature-primary bg-transparent border-0">
            <div className="icon text-center rounded-md">
              {<img src={clinic.image} alt="" />}
            </div>
            <div className="card-body p-0 mt-3">
              <Link to="/" className="title text-dark h5">
                {clinic.firstName}
              </Link>
              <p className="text-muted mt-3">{clinic.address}</p>
              <p className="text-muted">{clinic.phone}</p>
              <Link to={`/admin/clinic/${clinic.userId}`} className="link">
                Read More <i className="ri-arrow-right-line align-middle"></i>
              </Link>
            </div>
          </div> */}
          <ClinicCard data={clinic} />
        </div>
      ))}
    </div>
  );
}
