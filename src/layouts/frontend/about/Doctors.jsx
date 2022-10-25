import axios from "axios";
import { useEffect, useState } from "react";
import DoctorCardTwo from "../../../components/doctor/DoctorCardTwo";
import Values from "../../../Values";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    const url = `${Values.BASE_URL}/frDoctors`;
    if (location && location.latitude && location.longitude) {
      axios
        .get(url, {
          headers: location,
        })
        .then((d) => {
          setDoctors(d.data);
        })
        .catch((e) => {
          console.log(e.response);
        });
    }
  }, [location]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h4 className="title mb-4">Nearby Doctors</h4>
              <p className="text-muted mx-auto para-desc mb-0">
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
            </div>
          </div>
          {/* <!--end col--> */}
        </div>
        {/* <!--end row--> */}

        <div className="row align-items-center">
          {doctors?.map((doctor, i) => (
            <div key={i} className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2">
              <DoctorCardTwo data={doctor} />
            </div>
          ))}
        </div>
        {/* <!--end row--> */}
      </div>
      {/* <!--end container--> */}
    </>
  );
}
