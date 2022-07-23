import { useState } from "react";
import img from '../../assets/images/client/01.jpg';

 export default function InvoicesMain() {
    const [items, setItems] = useState([1,1,1,1,1,1,1,1,1,1])

    return(
        <>
        
                        <h5 className="mb-0">Invoice List</h5>
                        <div className="row">
                            <div className="col-12 mt-4 pt-2">
                                <div className="table-responsive shadow rounded">
                                    <table className="table table-center bg-white mb-0">
                                        <thead>
                                            <tr>
                                                <th className="border-bottom p-3">Invoice</th>
                                                <th className="border-bottom p-3" style={{minWidth: "220px;"}}>Name</th>
                                                <th className="text-center border-bottom p-3" style={{minWidth: "180px;"}}>Phone</th>
                                                <th className="text-center border-bottom p-3">Amount</th>
                                                <th className="text-center border-bottom p-3" style={{minWidth: "140px;"}}>Generate(Dt.)</th>
                                                <th className="text-center border-bottom p-3">Status</th>
                                                <th className="text-end border-bottom p-3" style={{minWdth: "200px;"}}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <!-- Start --> */}
                                            {items?.map((item, i)=>(
                                                <tr key={i}>
                                                <th className="p-3">#d01</th>
                                                <td className="p-3">
                                                    <a href="#" className="text-primary">
                                                        <div className="d-flex align-items-center">
                                                            <img src={img} className="avatar avatar-md-sm rounded-circle shadow" alt=""/>
                                                            <span className="ms-2">Howard Tanner</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td className="text-center p-3">(+12)85-4521-7568</td>
                                                <td className="text-center p-3">$253</td>
                                                <td className="text-center p-3">23th Dec 2020</td>
                                                <td className="text-center p-3">
                                                    <div className="badge bg-soft-danger rounded px-3 py-1">
                                                        Unpaid
                                                    </div>
                                                </td>
                                                <td className="text-end p-3">
                                                    <a href="#" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#view-invoice">View</a>
                                                    <a href="#" className="btn btn-sm btn-outline-primary ms-2">Print</a>
                                                </td>
                                            </tr>
                                            ))}
                                            
                                            {/* <!-- End --> */}

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
                   
        </>
    )
 }