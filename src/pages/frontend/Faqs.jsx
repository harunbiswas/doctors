import TitleText from "../../components/basic/TitleText";
import ContactInfo from "../../layouts/frontend/contact/ContactInfo";
import FaqsHero from "../../layouts/frontend/faqs/FaqsHero";
import FaqsItems from "../../layouts/frontend/faqs/FaqsItems";
import Questions from "../../layouts/frontend/faqs/Questions";
import Header from "../../layouts/headers/Header";

export default function Faqs() {

    return(
        <>
        <Header />
        <div className="faqs">
            <FaqsHero />

            <section className="section">
                <div className="container">
                    <TitleText data={{title: "Choose a category to quickly find", text: "Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation."}} />
                    <FaqsItems />
                </div>
                <div className="container mt-100 mt-60">
                    <TitleText data={{title: "General Questions", text: "Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation."}} />
                    <Questions />
                </div>

                <div className="container mt-100 mt-60">
                    <TitleText data={{title: "Still have a questions ?", text: "Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation."}} />
                    <ContactInfo />
                </div>
            </section>
        </div>
        </>
    )
}