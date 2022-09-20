import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Values from "../../Values";

export default function AddTimeTableFrom({ prop }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  // data holder
  const [data, setData] = useState({
    day: "",
    start: "",
    end: "",
  });

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  // submit handler
  const { id } = useParams();
  const submitHandler = async (e) => {
    e.preventDefault();
    const url = `${Values.BASE_URL}/doctor/time/${id}`;
    try {
      const result = await axios.post(url, data, Values.consfig);
      setData(null);
      prop?.handler();
    } catch (e) {
      setErrors(e.response.data);
    }
  };

  // erorr handler
  const [errors, setErrors] = useState({});

  return (
    <div className="add-experince-from  modal show fade d-block">
      <div className="modal-dialog modal-dialog-centered position-relative">
        <div className="modal-content p-4">
          <button
            className="position-absolute border-1 rounded-circle "
            style={{
              top: "5px",
              right: "5px",
              width: "2rem",
              height: "2rem",
              fontSize: "20px",
            }}
            onClick={prop.handler}
          >
            X
          </button>
          <form action="" onSubmit={(e) => submitHandler(e)}>
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="day" className="form-label">
                  Day <span className="text-danger">*</span>
                </label>
                <select
                  className={`form-control ${
                    (errors && errors.day && "errors") || ""
                  }`}
                  name="day"
                  onChange={(e) => dataHandler(e)}
                  id="day"
                >
                  <option value="">-- select day --</option>
                  {days?.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                {errors && errors.day && (
                  <span className="error-msg text-danger">
                    {errors.day.msg}
                  </span>
                )}
              </div>
            </div>
            {/* col end  */}

            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="startTime" className="form-label">
                  Start Time <span className="text-danger">*</span>
                </label>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  className={`form-control ${
                    (errors && errors.startTime && "errors") || ""
                  }`}
                  placeholder="EX: Assistant Doctor"
                  value={data.startTime}
                  onChange={(e) => dataHandler(e)}
                />
                {errors && errors.startTime && (
                  <span className="error-msg text-danger">
                    {errors.startTime.msg}
                  </span>
                )}
              </div>
            </div>
            {/* col end  */}
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="endTime" className="form-label">
                  End Time <span className="text-danger">*</span>
                </label>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  className={`form-control ${
                    (errors && errors.endTime && "errors") || ""
                  }`}
                  placeholder="EX: Doctor Madical HOLE"
                  value={data.endTime}
                  onChange={(e) => dataHandler(e)}
                />
                {errors && errors.endTime && (
                  <span className="error-msg text-danger">
                    {errors.endTime.msg}
                  </span>
                )}
              </div>
            </div>
            {/* col end  */}
            <button type="submit" className="btn btn-primary">
              Add Experience
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
