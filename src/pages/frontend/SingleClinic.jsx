import Pricings from "../../layouts/clinics/Pricings";
import DoctorProfileReviews from "../../layouts/doctor-dashboard/DoctorProfileReviews";
import Doctors from "../../layouts/frontend/about/Doctors";
import Targets from "../../layouts/frontend/about/Targets";
import CommonHero from "../../layouts/frontend/basic/CommonHero";

export default function SingleClinic() {
  const heroData = {
    title: "Clinic Profile",
    text: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.",
  };
  return (
    <div className="single-clinic">
      <CommonHero data={heroData} />
      <Targets />
      <Doctors />
      <Pricings />
      <section className="section bg-white">
        <DoctorProfileReviews />
      </section>
    </div>
  );
}
