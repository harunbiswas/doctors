import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Values from "../../Values";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  // onchange handler
  const emailHandler = (e) => {
    setErrors({ ...errors, email: null });
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setErrors({ ...errors, password: null });
    setPassword(e.target.value);
  };

  const rememberMeHandler = (e) => {
    setRememberMe(e.target.checked);
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const url = `${Values.BASE_URL}/admin/singin`;
    const data = {
      email,
      password,
    };
    axios
      .post(url, data)
      .then((d) => {
        const item = {
          value: {
            token: d.data.token,
            loginData: d.data.userObject,
          },
          expiry: new Date().getTime() + 864000000,
        };
        localStorage.setItem("login", JSON.stringify(item));
        if (item.value.loginData.role === "clinic") {
          history.go(-2);
        } else {
          location.reload();
        }
      })
      .catch((e) => {
        setErrors(e.response.data);
      });
  };

  return (
    <form onSubmit={(e) => submitHandler(e)} className="login-form mt-4">
      <div className="row">
        <div className="col-lg-12">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email <span className="text-danger">*</span>
            </label>
            <input
              id="email"
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
              <span className="error-msg text-danger">{errors.email.msg}</span>
            )}
          </div>
        </div>

        <div className="col-lg-12">
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              id="password"
              className={`form-control ${
                (errors && errors.password && "errors") || ""
              }`}
              placeholder="Password"
              value={password}
              onChange={(e) => passwordHandler(e)}
            />
            {errors && errors.password && (
              <span className="error-msg text-danger">
                {errors.password.msg}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-12">
          <div className="d-flex justify-content-between">
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input align-middle"
                  type="checkbox"
                  onChange={(e) => rememberMeHandler(e)}
                  id="remember-check"
                />
                <label className="form-check-label" for="remember-check">
                  Remember me
                </label>
              </div>
            </div>
            <a href="/" className="text-dark h6 mb-0">
              Forgot password ?
            </a>
          </div>
        </div>
        <div className="col-lg-12 mb-0">
          <div className="d-grid">
            <button className="btn btn-primary">Sign in</button>
          </div>
        </div>

        <div className="col-12 text-center">
          <p className="mb-0 mt-3">
            <small className="text-dark me-2">Don't have an account ?</small>{" "}
            <Link to="/singup" className="text-dark fw-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
