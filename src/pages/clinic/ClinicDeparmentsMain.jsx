import axios from "axios";
import { useEffect, useState } from "react";
import DepartmentsInfo from "../../layouts/frontend/departments/DepartmentsInfo";
import Values from "../../Values";

export default function ClinicDepartmentsMain() {
  const [departments, setDeparments] = useState([]);
  useEffect(() => {
    const url = `${Values.BASE_URL}/clinic/departments`;
    const config = {
      headers: {
        token: JSON.parse(localStorage.getItem("login")).value.token,
      },
    };
    axios
      .get(url, config)
      .then((d) => {
        setDeparments(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);
  return (
    <div className="clinic-departmetns m-5">
      <DepartmentsInfo data={departments} />
    </div>
  );
}
