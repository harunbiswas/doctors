import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Values from "../../Values";

export default function AddExperinceFrom({ prop }) {
  // data holder
  const [data, setData] = useState({
    fromDate: "",
    toDate: "",
    role: "",
    institute: "",
  });

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  // year list
  const year = new Date().getFullYear();
  const years = Array.from(new Array(20), (val, index) => year - index);

  // submit handler
  const { id } = useParams();
  const submitHandler = async (e) => {
    e.preventDefault();
    const url = `${Values.BASE_URL}/doctor/experience/${id}`;
    try {
      const result = await axios.post(url, data, Values.consfig);
      setData(null);
      prop.handler();
    } catch (e) {
      setErrors(e.response.data);
    }

    console.log(url);
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
                <label htmlFor="fromDate" className="form-label">
                  From <span className="text-danger">*</span>
                </label>
                <select
                  className={`form-control ${
                    (errors && errors.fromDate && "errors") || ""
                  }`}
                  name="fromDate"
                  onChange={(e) => dataHandler(e)}
                  id="fromDate"
                >
                  <option value="">-- select from --</option>
                  {years?.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {errors && errors.fromDate && (
                  <span className="error-msg text-danger">
                    {errors.fromDate.msg}
                  </span>
                )}
              </div>
            </div>
            {/* col end  */}
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="toDate" className="form-label">
                  To <span className="text-danger">*</span>
                </label>
                <select
                  name="toDate"
                  onChange={(e) => dataHandler(e)}
                  id="toDate"
                  className={`form-control ${
                    (errors && errors.toDate && "errors") || ""
                  }`}
                >
                  <option value="">-- select to --</option>
                  {years?.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {errors && errors.toDate && (
                  <span className="error-msg text-danger">
                    {errors.toDate.msg}
                  </span>
                )}
              </div>
            </div>
            {/* col end  */}
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  Role <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  className={`form-control ${
                    (errors && errors.role && "errors") || ""
                  }`}
                  placeholder="EX: Assistant Doctor"
                  value={data.role}
                  onChange={(e) => dataHandler(e)}
                />
                {errors && errors.role && (
                  <span className="error-msg text-danger">
                    {errors.role.msg}
                  </span>
                )}
              </div>
            </div>
            {/* col end  */}
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="institute" className="form-label">
                  Institute <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="institute"
                  name="institute"
                  className={`form-control ${
                    (errors && errors.institute && "errors") || ""
                  }`}
                  placeholder="EX: Doctor Madical HOLE"
                  value={data.institute}
                  onChange={(e) => dataHandler(e)}
                />
                {errors && errors.institute && (
                  <span className="error-msg text-danger">
                    {errors.institute.msg}
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
