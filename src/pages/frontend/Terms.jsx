import CommonHero from "../../layouts/frontend/basic/CommonHero";
import TermsMain from "../../layouts/frontend/basic/TermsMain";

export default function Terms() {
  const heroData = {
    title: "Terms",
    text: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.",
  };

  return (
    <>
      <div className="tarms">
        <CommonHero data={heroData} />
        <TermsMain />
      </div>
    </>
  );
}
