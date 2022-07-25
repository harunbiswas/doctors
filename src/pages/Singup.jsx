import HomeBtn from "../components/basic/HomeBtn";
import SingUpFrom from "../components/form/SingUpForm";

export default function Singup() {
  return (
    <div className="singup">
      <HomeBtn />

      {/* <!-- Hero Start --> */}
      <section class="bg-half-150 d-table w-100 bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-8">
              <img
                src="../assets/images/logo-dark.png"
                height="24"
                class="mx-auto d-block"
                alt=""
              />
              <div class="card login-page bg-white shadow mt-4 rounded border-0">
                <div class="card-body">
                  <h4 class="text-center">Sign Up</h4>
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
