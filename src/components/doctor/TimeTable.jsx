import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Values from "../../Values";

export default function TimeTable() {
  const { id } = useParams();
  const [times, setTimes] = useState([]);
  const [role, setRole] = useState("");
  const [reload, setReload] = useState("");
  useEffect(() => {
    const url = `${Values.BASE_URL}/doctor/time/${id}`;
    axios
      .get(url)
      .then((d) => {
        setTimes(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });

    // set role
    setRole(JSON.parse(localStorage.getItem("login"))?.value.loginData.role);
  }, [reload]);

  const deleteHandler = async (e) => {
    const url = `${Values.BASE_URL}/doctor/time/${e}`;

    try {
      const result = await axios.delete(url, Values.consfig);
      setReload(result);
    } catch (e) {
      console.log(e.response);
    }
  };
  return (
    <ul className="list-unstyled mb-0">
      {times?.map((time) => (
        <li key={time.id} className="d-flex justify-content-between py-2">
          <p className="text-muted mb-0">
            <i className="ri-time-fill text-primary align-middle h5 mb-0"></i>{" "}
            Monday
          </p>
          <p className="text-primary mb-0">
            <span className="text-dark">Time:</span>{" "}
            {moment(time.startTime, "hh:mm").format("hh:mm A")} -{" "}
            {moment(time.endTime, "hh:mm").format("hh:mm A")}
          </p>
          {role && (role === "doctor" || role === "clinic") && (
            <button
              onClick={(e) => deleteHandler(time.id)}
              className="btn btn-danger"
            >
              delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
