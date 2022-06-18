import CommonHero from "../../layouts/frontend/basic/CommonHero";
import PrivacyMain from "../../layouts/frontend/basic/PrivacyMain";
import Header from "../../layouts/headers/Header";

 export default function PrivacyPolicy() {

    return(
        <>
        <Header />
        <div className="privacy-policy">
            <CommonHero />
            <PrivacyMain />
        </div>
        </>
    )
 }