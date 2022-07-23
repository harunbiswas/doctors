import { useState } from "react"
import img from "../../assets/images/doctors/01.jpg"

 export default function AdminReviewList() {
    const [items, setItems] = useState([1,1,1,1,1,1,1,1,1])

    return(
        <>
        <div className="card border-0 shadow rounded">
                                    <div className="p-4 border-bottom">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h6 className="mb-0"><i className="uil uil-user text-primary me-1 h5"></i> Patients Reviews</h6>
                                            
                                            <div className="mb-0 position-relative">
                                                <select className="form-select form-control" id="dailypatient">
                                                    <option selected>New</option>
                                                    <option value="2019">Old</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="list-unstyled mb-0 p-4" data-simplebar style={{maxHeight: "400px", overflowX: "auto"}}>
                                        {items?.map((item, i)=>(
                                            <li key={i} className="d-flex align-items-center justify-content-between my-3">
                                            <div className="d-flex align-items-center">
                                                <img src={img} className="avatar avatar-small rounded-circle border shadow" alt="" />
                                                <div className="flex-1 ms-3">
                                                    <span className="d-block h6 mb-0">Dr. Calvin Carlo</span>
                                                    <small className="text-muted">Orthopedic</small>

                                                    <ul className="list-unstyled mb-0">
                                                        <li className="list-inline-item text-muted">(45)</li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <p className="text-muted mb-0">150 Patients</p>
                                        </li>
                                        ))}
                                        
                                    </ul>
                                </div>
        </>
    )
 }