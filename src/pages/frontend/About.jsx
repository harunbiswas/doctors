import { Link } from "react-router-dom";
import AboutVideo from '../../layouts/frontend/about/AboutVideo';
import Doctors from "../../layouts/frontend/about/Doctors";
import CommonHero from "../../layouts/frontend/basic/CommonHero";
import Header from "../../layouts/headers/Header";
import MadicalServices from "../../layouts/services/MadicalServices";


export default function About() {
    return(
        <>
        <Header />
        <div className="about">
            <CommonHero />
            <section className="section bg-white pb-0">
            <AboutVideo />
            <MadicalServices />   
            <div class="col-12 mt-4 pt-2 text-center">
                <Link to="/" class="btn btn-primary">See More</Link>
            </div> 
        </section>
        <section className="section bg-white">
            <Doctors />    
        </section>
        </div>
        </>
    )
}