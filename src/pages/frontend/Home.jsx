import AboutVideo from "../../layouts/frontend/about/AboutVideo";
import ClientLogo from "../../layouts/frontend/about/ClientLogo";
import Cta from "../../layouts/frontend/about/Cta";
import Doctors from "../../layouts/frontend/about/Doctors";
import Services from "../../layouts/frontend/about/Targets";
import Hero from "../../layouts/home/Hero";
import Aperments from "../../layouts/services/Aperments";
import MadicalServices from "../../layouts/services/MadicalServices";

export default function Home() {
  return (
    <>
      <div className="home">
        <Hero />
        <Services />

        {/* <!-- Start --> */}
        <section className="section bg-white pb-0">
          <AboutVideo />
          <MadicalServices />
          <Cta />
        </section>
        {/* <!-- End --> */}
        <ClientLogo />

        {/* <!-- End --> */}

        {/* <!-- Start --> */}
        <section className="section bg-white">
          <Doctors />
          <Aperments />
        </section>
        {/* <!--end section--> */}
        {/* <!-- End --> */}

        {/* <!-- MOdal End --> */}
      </div>
    </>
  );
}
