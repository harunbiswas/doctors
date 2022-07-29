import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        console.log(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="row">
      {clinics?.map((clinic, i) => (
        <div key={i} className="col-xl-3 col-md-4 col-12 mt-5">
          <div className="card features feature-primary bg-transparent border-0">
            <div className="icon text-center rounded-md">
              {
                <img
                  src={
                    clinic.image ||
                    "https://thumbs.dreamstime.com/b/medicine-doctor-holding-red-heart-shape-hand-medical-icon-network-connection-modern-virtual-screen-interface-service-mind-99681240.jpg"
                  }
                  alt=""
                />
              }
            </div>
            <div className="card-body p-0 mt-3">
              <Link to="/" className="title text-dark h5">
                {clinic.name || "Harun Madical serevise"}
              </Link>
              <p className="text-muted mt-3">
                {clinic.address || " collage avinew"}
              </p>
              <p className="text-muted">{clinic.phone || "01770201232"}</p>
              <Link to={`/admin/clinic/${clinic.userId}`} className="link">
                Read More <i className="ri-arrow-right-line align-middle"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
