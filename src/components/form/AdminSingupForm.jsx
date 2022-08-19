import axios from "axios";
import { useState } from "react";
import Values from "../../Values";
import OkMessage from "../basic/OkMessage";

export default function AdminSingUpFrom() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handlser
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    setErrors({ ...errors, firstName: null });
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    setErrors({ ...errors, lastName: null });
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: null });
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: null });
  };

  // submit handler
  const sebmitHandler = (e) => {
    e.preventDefault();

    const url = `${Values.BASE_URL}/admin/singup`;
    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    axios
      .post(url, data)
      .then((d) => {
        setMsg(d.data);
      })
      .catch((e) => {
        setErrors(e.response.data);
      });
  };

  // handle errors
  const [errors, setErrors] = useState({});
  // message handler
  const [msg, setMsg] = useState(null);
  const msgHandler = () => {
    setMsg(null);
    location.reload();
  };
  return (
    <form onSubmit={(e) => sebmitHandler(e)} className="login-form mt-4">
      {msg && <OkMessage msg={msg} handler={msgHandler} />}

      <div className="row">
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">
              First name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${
                (errors && errors.firstName && "errors") || ""
              }`}
              placeholder="First Name"
              value={firstName}
              onChange={(e) => firstNameHandler(e)}
            />
            {errors && errors.firstName && (
              <span className="text-danger">{errors.firstName.msg}</span>
            )}
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">
              Last name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${
                (errors && errors.lastName && "errors") || ""
              }`}
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => lastNameHandler(e)}
            />
            {errors && errors.lastName && (
              <span className="text-danger">{errors.lastName.msg}</span>
            )}
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">
              Your Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className={`form-control ${
                (errors && errors.email && "errors") || ""
              }`}
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => emailHandler(e)}
            />
            {errors && errors.email && (
              <span className="text-danger">{errors.email.msg}</span>
            )}
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">
              Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className={`form-control ${
                (errors && errors.password && "errors") || ""
              }`}
              placeholder="Password"
              value={password}
              onChange={(e) => passwordHandler(e)}
            />
            {errors && errors.password && (
              <span className="text-danger">{errors.password.msg}</span>
            )}
          </div>
        </div>
        <div className="col-md-12">
          <div className="d-grid">
            <button className="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </form>
  );
}
