import CommonHero from "../../layouts/frontend/basic/CommonHero";
import DepartmentsInfo from "../../layouts/frontend/departments/DepartmentsInfo";
import Header from "../../layouts/headers/Header";

export default function Departments(){

    return(
        <>
        <Header />
        <div className="departments">
            <CommonHero />
            <section class="section">
                <div class="container">
                    <DepartmentsInfo />
                </div>
            </section>
        </div>
        </>
    )
}