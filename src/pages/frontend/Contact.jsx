import CommonHero from "../../layouts/frontend/basic/CommonHero";
import ContactForm from "../../layouts/frontend/contact/ContactForm";
import ContactInfo from "../../layouts/frontend/contact/ContactInfo";
import Maps from "../../layouts/frontend/contact/Maps";
import Header from "../../layouts/headers/Header";

export default function Contact(){

    return(
        <>
        <Header />
        <div className="contact">
            <CommonHero />
            <section className="mt-100 mt-60">
                <ContactInfo />
                <ContactForm />
                <Maps />
            </section>
        </div>
        </>
    )
}