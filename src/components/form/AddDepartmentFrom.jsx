import axios from "axios";
import { useState } from "react";
import Values from "../../Values";
import OkMessage from "../basic/OkMessage";

export default function AddDepartmentForm() {
  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const url = `${Values.BASE_URL}/clinic/department`;
    const config = {
      headers: {
        token: JSON.parse(localStorage.getItem("login")).value.token,
      },
    };
    const data = {
      title,
      description,
    };
    axios
      .post(url, data, config)
      .then((d) => {
        setMsg(d.data);
      })
      .catch((e) => {
        setErrors(e.response.data);
      });
  };

  // input controler
  const [title, setTitle] = useState("");
  const [description, setDescripton] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
    setErrors({ ...errors, title: null });
  };

  const descriptionHandler = (e) => {
    setDescripton(e.target.value);
    setErrors({ ...errors, description: null });
  };

  // errors
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");

  const msgHandler = (e) => {
    setMsg(null);
    setTitle("");
    setDescripton("");
  };
  return (
    <form className="mt-4" onSubmit={(e) => submitHandler(e)}>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Title:</label>
            <input
              name="title"
              id="title"
              type="text"
              className={`form-control ${
                (errors && errors.title && "errors") || ""
              }`}
              placeholder=" Title :"
              value={title}
              onChange={(e) => titleHandler(e)}
            />
            {errors && errors.title && (
              <span className="text-danger">{errors.title.msg}</span>
            )}
          </div>
        </div>
        {/* <!--end col--> */}
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <input
              name="description"
              id="description"
              type="text"
              className={`form-control ${
                (errors && errors.description && "errors") || ""
              }`}
              placeholder="Descriptio :"
              value={description}
              onChange={(e) => descriptionHandler(e)}
            />
            {errors && errors.description && (
              <span className="text-danger">
                {errors && errors.description.msg}
              </span>
            )}
          </div>
        </div>
      </div>
      {/* <!--end row--> */}

      <button type="submit" className="btn btn-primary">
        Add Department
      </button>
      {msg && <OkMessage msg={msg} handler={msgHandler} />}
    </form>
  );
}
