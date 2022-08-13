import CommonHero from "../../layouts/frontend/basic/CommonHero";
import ContactForm from "../../layouts/frontend/contact/ContactForm";
import ContactInfo from "../../layouts/frontend/contact/ContactInfo";
import Maps from "../../layouts/frontend/contact/Maps";

export default function Contact() {
  const heroData = {
    title: "Contact",
    text: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.",
  };
  return (
    <>
      <div className="contact">
        <CommonHero data={heroData} />
        <section className="mt-100 mt-60">
          <ContactInfo />
          <ContactForm />
          <Maps />
        </section>
      </div>
    </>
  );
}
