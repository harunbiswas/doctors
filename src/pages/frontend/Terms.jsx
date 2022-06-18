import CommonHero from "../../layouts/frontend/basic/CommonHero";
import TermsMain from "../../layouts/frontend/basic/TermsMain";
import Header from "../../layouts/headers/Header";

 export default function Terms() {

    return (
        <>
        <Header />
        <div className="tarms">
            <CommonHero />
            <TermsMain />
        </div>
        </>
    )
 }