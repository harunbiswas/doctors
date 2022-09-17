import { useEffect, useRef, useState } from "react";
import bg1 from "../../assets/images/bg/01.jpg";
import bg2 from "../../assets/images/bg/02.jpg";
import bg3 from "../../assets/images/bg/03.jpg";
import bg4 from "../../assets/images/bg/04.jpg";
import iconImg from "../../assets/images/logo-icon.png";
import SearchForm from "../../components/form/SearchForm";

export default function Hero() {
  const [bgs, setBgs] = useState([bg1, bg2, bg3, bg4]);
  const [bgCount, setBgCount] = useState(0);

  const bg = useRef();

  useEffect(() => {
    const bgChange = setInterval(() => {
      if (bgCount < 3) {
        setBgCount(bgCount + 1);
      } else {
        setBgCount(0);
      }
    }, 7000);
    bg.current.style.backgroundImage = `url('${bgs[bgCount]}')`;
    return () => clearInterval(bgChange);
  }, [bgCount]);

  return (
    <>
      {/* <!-- Start Hero --> */}
      <section ref={bg} className="bg-half-170 d-table w-100" id="home">
        <div className="bg-overlay bg-overlay-dark"></div>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-xl-10">
              <div className="heading-title text-center">
                <img src={iconImg} height="50" alt="" />
                <h4 className="heading fw-bold text-white title-dark mt-3 mb-4">
                  Booking Your Appointments
                </h4>
                <p className="para-desc mx-auto text-white-50 mb-0">
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>
              </div>
              <SearchForm />
            </div>
            {/* <!--end col--> */}
          </div>
          {/* <!--end row--> */}
        </div>
        {/* <!--end container--> */}
      </section>
      {/* <!--end section--> */}
      {/* <!-- End Hero --> */}
    </>
  );
}
