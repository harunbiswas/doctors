import { useState } from "react"
import DoctorCard from "../../../components/doctor/DoctorCard"

export default function DoctorWrp() {
    const [items, setItems] = useState([1,1,1,1,1,1,1,1,1,1,])
    return(
        <>
            {/* <!-- Start --> */}
        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                {items?.map((item, i)=>(
                    <div key={i} className="col-lg-6 col-md-12 mb-4">
                        <DoctorCard />
                    </div>
                    ))}
                  
                    


                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
        </section>
        {/* <!--end section--> */}
        {/* <!-- End --> */}

        </>
    )
}