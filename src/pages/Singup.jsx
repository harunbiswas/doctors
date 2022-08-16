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
              <img
                src="../assets/images/logo-dark.png"
                height="24"
                className="mx-auto d-block"
                alt=""
              />
              <div className="card login-page bg-white shadow mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Sign Up</h4>
                  <SingUpFrom />
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
