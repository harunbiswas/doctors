import { useState } from "react"
import img from "../../assets/images/client/01.jpg"

export default function AdminPatients() {
    const [items, setItems] = useState([1,1,1,2,1,1,1,1,1,1,11,1,1,3,1])
    return(
        <>
        <div className="layout-specing">
                        <div className="d-md-flex justify-content-between">
                            <h5 className="mb-0">Patients List</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                                <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item"><a href="index.html">Doctris</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Patients</li>
                                </ul>
                            </nav>
                        </div>
                        
                        <div className="row">
                            <div className="col-12 mt-4">
                                <div className="table-responsive shadow rounded">
                                    <table className="table table-center bg-white mb-0">
                                        <thead>
                                            <tr>
                                                <th className="border-bottom p-3" style={{minWidth: "50px"}}>Id</th>
                                                <th className="border-bottom p-3" style={{minWidth: "180px"}}>Name</th>
                                                <th className="border-bottom p-3">Age</th>
                                                <th className="border-bottom p-3">Gender</th>
                                                <th className="border-bottom p-3">Address</th>
                                                <th className="border-bottom p-3">Mobile No.</th>
                                                <th className="border-bottom p-3">Department</th>
                                                <th className="border-bottom p-3" style={{minWidth: "150px"}}>Date</th>
                                                <th className="border-bottom p-3">Time</th>
                                                <th className="border-bottom p-3">Status</th>
                                                <th className="border-bottom p-3" style={{minWidth: "100px"}}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items?.map((item,i)=> (
                                                <tr key={i}>
                                                <th className="p-3">1</th>
                                                <td className="py-3">
                                                    <a href="#" className="text-dark">
                                                        <div className="d-flex align-items-center">
                                                            <img src={img} className="avatar avatar-md-sm rounded-circle shadow" alt="" />
                                                            <span className="ms-2">Howard Tanner</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td className="p-3">25</td>
                                                <td className="p-3">Male</td>
                                                <td className="p-3">1451 - ABC Street, NY</td>
                                                <td className="p-3">(+452) 8945 4568</td>
                                                <td className="p-3">Cardiology</td>
                                                <td className="p-3">20th Dec 2020</td>
                                                <td className="p-3">11:00AM</td>
                                                <td className="p-3"><span className="badge bg-soft-success">Approved</span></td>
                                                <td className="text-end p-3">
                                                    <a href="#" className="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewprofile"><i className="uil uil-eye"></i></a>
                                                    <a href="#" className="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><i className="uil uil-pen"></i></a>
                                                    <a href="#" className="btn btn-icon btn-pills btn-soft-danger"><i className="uil uil-trash"></i></a>
                                                </td>
                                            </tr>
                                            ))}
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* <!--end row--> */}

                        <div className="row text-center">
                            {/* <!-- PAGINATION START --> */}
                            <div className="col-12 mt-4">
                                <div className="d-md-flex align-items-center text-center justify-content-between">
                                    <span className="text-muted me-3">Showing 1 - 10 out of 50</span>
                                    <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                                        <li className="page-item"><a className="page-link" href="javascript:void(0)" aria-label="Previous">Prev</a></li>
                                        <li className="page-item active"><a className="page-link" href="javascript:void(0)">1</a></li>
                                        <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                                        <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                                        <li className="page-item"><a className="page-link" href="javascript:void(0)" aria-label="Next">Next</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                            {/* <!-- PAGINATION END --> */}
                        </div>
                        {/* <!--end row--> */}
                    </div>
        </>
    )
}