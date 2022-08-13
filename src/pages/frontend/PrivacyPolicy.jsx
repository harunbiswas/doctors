import CommonHero from "../../layouts/frontend/basic/CommonHero";
import PrivacyMain from "../../layouts/frontend/basic/PrivacyMain";

export default function PrivacyPolicy() {
  const heroData = {
    title: "Privacy",
    text: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.",
  };

  return (
    <>
      <div className="privacy-policy">
        <CommonHero data={heroData} />
        <PrivacyMain />
      </div>
    </>
  );
}
