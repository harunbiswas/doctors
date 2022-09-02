import { Link } from "react-router-dom";
import HomeBtn from "../components/basic/HomeBtn";
import SingUpFrom from "../components/form/SingUpForm";

export default function Singup() {
  return (
    <div className="singup">
      <HomeBtn />

      {/* <!-- Hero Start --> */}
      <section className="bg-half-150 d-table w-100 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="card login-page bg-white shadow mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Sign Up</h4>
                  <SingUpFrom />
                  <div className="mx-auto d-inline-block me-5">
                    <p className="mb-0 mt-3">
                      <small className="text-dark me-2">
                        Already have an account ?
                      </small>{" "}
                      <Link to="/login" className="text-dark fw-bold">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
