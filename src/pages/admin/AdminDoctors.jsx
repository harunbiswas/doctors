import { useState } from "react"
import DoctorCardTwo from "../../components/doctor/DoctorCardTwo"

 export default function AdminDoctors(){
    const [items, setItems] = useState([1,1,1,1,1,1,1,1,1,1,1,11,])
    return(
        <>
        <div className="layout-specing">
                        <div className="row">
                            <div className="col-xl-9 col-md-6">
                                <h5 className="mb-0">Doctors</h5>

                                <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                                    <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                                        <li className="breadcrumb-item"><a href="index.html">Doctris</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Doctors</li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
                                <a href="add-doctor.html" className="btn btn-primary">Add New Doctor</a>
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                        
                        <div className="row row-cols-md-2 row-cols-lg-5">
                            {items?.map((item, i)=> (
                                <div key={i} className="col mt-4">
                                    <DoctorCardTwo />
                                </div>
                            ))}
                            
                           
                        </div>
                    </div>
        </>
    )
 }