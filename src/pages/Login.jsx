import HomeBtn from "../components/basic/HomeBtn";
import LoginForm from "../components/form/LoginForm";

export default function Login() {
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
