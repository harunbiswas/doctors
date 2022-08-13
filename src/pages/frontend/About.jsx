import { Link } from "react-router-dom";
import AboutVideo from "../../layouts/frontend/about/AboutVideo";
import Doctors from "../../layouts/frontend/about/Doctors";
import CommonHero from "../../layouts/frontend/basic/CommonHero";
import MadicalServices from "../../layouts/services/MadicalServices";

export default function About() {
  const heroData = {
    title: "About us",
    text: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.",
  };
  return (
    <>
      <div className="about">
        <CommonHero data={heroData} />
        <section className="section bg-white pb-0">
          <AboutVideo />
          <MadicalServices />
          <div class="col-12 mt-4 pt-2 text-center">
            <Link to="/" class="btn btn-primary">
              See More
            </Link>
          </div>
        </section>
        <section className="section bg-white">
          <Doctors />
        </section>
      </div>
    </>
  );
}
