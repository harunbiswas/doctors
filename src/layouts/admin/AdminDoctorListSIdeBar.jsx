import { useState } from "react"
import img from "../../assets/images/doctors/01.jpg"

export default function AdminDoctorListSideBar() {
    const [items, setItems] = useState([1,1,1,1,1,1,1,1,1])
    return(
        <>
        <div className="card rounded border-0 shadow">
                                    <div className="p-4 border-bottom">
                                        <h5 className="mb-0">Doctors List</h5>
                                    </div>

                                    <ul className="list-unstyled mb-0 p-4" data-simplebar style={{height: "664px", overflowX: "auto"}}>
                                        {items?.map((item, i)=>(
                                            <li className="d-md-flex align-items-center text-center text-md-start my-3">
                                            <img src={img} className="avatar avatar-medium rounded-md shadow" alt="" />

                                            <div className="ms-md-3 mt-4 mt-sm-0">
                                                <a href="#" className="text-dark h6">Dr. Calvin Carlo</a>
                                                <p className="text-muted my-1">Cardiologist</p>
                                                <p className="text-muted mb-0">3 Years Experienced</p>
                                            </div>
                                        </li>
                                        ))}
                                        

                                        <li className="mt-4">
                                            <a href="doctors.html" className="btn btn-primary">All Doctors</a>
                                        </li>
                                    </ul>
                                </div>
        </>
    )
}