import axios from "axios";
import { useEffect, useState } from "react";
import ClinicCardFrontend from "../../components/card/ClinicCardFrontend";
import Values from "../../Values";

export default function CLinicItems() {
  const [clinics, setClinics] = useState([]);
  useEffect(() => {
    const url = `${Values.BASE_URL}/valuableClinics`;
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
          <ClinicCardFrontend data={clinic} />
        </div>
      ))}
    </div>
  );
}
