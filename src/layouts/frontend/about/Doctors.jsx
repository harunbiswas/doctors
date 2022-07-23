import { useState } from "react"
import DoctorCardTwo from "../../../components/doctor/DoctorCardTwo"


export default function Doctors() {
    const[ doctors, setDoctors] = useState([1,1,1,1])

    return (
        <>
           <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Doctors</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        </div>
                    </div>
                    {/* <!--end col--> */}
                </div>
                {/* <!--end row--> */}

                <div className="row align-items-center">
                    {
                        doctors?.map((doctor, i)=> (
                            <div key={i} className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2">
                                <DoctorCardTwo />
                            </div>
                        ))
                    }
                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
        </>
    )
}