import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeBtn from "../components/basic/HomeBtn";
import LoginForm from "../components/form/LoginForm";
import Values from "../Values";

export default function Login() {
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    const url = `${Values.BASE_URL}/admin/isAdminCheck`;
    axios
      .get(url)
      .then((d) => {
        setAdmin(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);
  return (
    <div className="login">
      <HomeBtn />

      {/* <!-- Hero Start --> */}
      <section className="bg-home d-flex bg-light align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <img
                src="../assets/images/logo-dark.png"
                height="24"
                className="mx-auto d-block"
                alt=""
              />
              <div className="card login-page bg-white shadow mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Sign In</h4>
                  <LoginForm />
                  {!admin && (
                    <div className=" mx-auto text-center">
                      <p className="mb-0 mt-3">
                        <small className="text-dark me-2">
                          Do you want to singup as a admin?
                        </small>{" "}
                        <Link to="/adminSingup" className="text-dark fw-bold">
                          ADMIN
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {/* <!----> */}
            </div>
            {/* <!--end col--> */}
          </div>
          {/* <!--end row--> */}
        </div>
        {/* <!--end container--> */}
      </section>
      {/* <!--end section--> */}
      {/* <!-- Hero End --> */}
    </div>
  );
}
