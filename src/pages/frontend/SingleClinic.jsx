import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleMap from "../../components/map/SingleMap";
import DoctorProfileReviews from "../../layouts/doctor-dashboard/DoctorProfileReviews";
import Doctors from "../../layouts/frontend/about/Doctors";
import Targets from "../../layouts/frontend/about/Targets";
import CommonHero from "../../layouts/frontend/basic/CommonHero";
import Values from "../../Values";

export default function SingleClinic() {
  const [data, setdata] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `${Values.BASE_URL}/clinic/list/${id}`;
    axios
      .get(url)
      .then((d) => {
        setdata(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);
  const heroData = {
    title: "Clinic Profile",
    text: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.",
  };
  return (
    <div className="single-clinic">
      <CommonHero data={heroData} />
      <Targets />
      <Doctors />

      <section className="section bg-white">
        <DoctorProfileReviews />
      </section>
      <SingleMap info={data} />
    </div>
  );
}
