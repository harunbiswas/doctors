import Pricings from "../../layouts/clinics/Pricings";
import AboutVideo from "../../layouts/frontend/about/AboutVideo";
import ClientLogo from "../../layouts/frontend/about/ClientLogo";
import Cta from "../../layouts/frontend/about/Cta";
import Doctors from "../../layouts/frontend/about/Doctors";
import Tergets from "../../layouts/frontend/about/Targets";
import Hero from "../../layouts/home/Hero";
import MadicalServices from "../../layouts/services/MadicalServices";

export default function Home() {
  return (
    <>
      <div className="home">
        <Hero />
        <Tergets />

        <section className="section bg-white pb-0">
          <AboutVideo />
          <MadicalServices />
          <Cta />
        </section>

        <ClientLogo />

        <section className="section bg-white">
          <Doctors />
          <Pricings />
        </section>
      </div>
    </>
  );
}
