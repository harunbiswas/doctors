import CommonHero from "../../layouts/frontend/basic/CommonHero";
import DoctorWrp from "../../layouts/frontend/doctors/DoctorWrp";
import Header from "../../layouts/headers/Header";

export default function Doctors(){
    return(
        <>
        <Header />
        <div className="doctors">
            <CommonHero />
            <DoctorWrp />
        </div>
        </>
    )
}