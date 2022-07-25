import { Link } from "react-router-dom";

export default function SingUpFrom() {
  return (
    <form action="index.html" class="login-form mt-4">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label class="form-label">
              First name <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="First Name"
              name="s"
              required=""
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label class="form-label">
              Last name <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Last Name"
              name="s"
              required=""
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label class="form-label">
              Your Email <span class="text-danger">*</span>
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              name="email"
              required=""
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label class="form-label">
              Password <span class="text-danger">*</span>
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              required=""
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input align-middle"
                type="checkbox"
                value=""
                id="accept-tnc-check"
              />
              <label class="form-check-label" for="accept-tnc-check">
                I Accept{" "}
                <a href="#" class="text-primary">
                  Terms And Condition
                </a>
              </label>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="d-grid">
            <button class="btn btn-primary">Register</button>
          </div>
        </div>

        <div class="col-lg-12 mt-3 text-center">
          <h6 class="text-muted">Or</h6>
        </div>
        {/* <!--end col--> */}

        <div class="col-6 mt-3">
          <div class="d-grid">
            <Link to="javascript:void(0)" class="btn btn-soft-primary">
              <i class="uil uil-facebook"></i> Facebook
            </Link>
          </div>
        </div>
        {/* <!--end col--> */}

        <div class="col-6 mt-3">
          <div class="d-grid">
            <Link to="javascript:void(0)" class="btn btn-soft-primary">
              <i class="uil uil-google"></i> Google
            </Link>
          </div>
        </div>
        {/* <!--end col--> */}

        <div class="mx-auto">
          <p class="mb-0 mt-3">
            <small class="text-dark me-2">Already have an account ?</small>{" "}
            <Link to="/login" class="text-dark fw-bold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
