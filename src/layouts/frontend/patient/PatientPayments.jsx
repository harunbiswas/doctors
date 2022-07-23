import { useState } from "react";

export default function PatientPayments() {
    const [items, setItems] = useState([1,1,1,1,1,1,1,1,1,1,1,1]);
    const [isToggle, setIsToggle] = useState(false)
    const toggleHandler = () => {
        if(isToggle){
            setIsToggle(false)
        }else{
            setIsToggle(true)
        }
    }
    
    return(
        <>
        <div className="card border-0 rounded shadow">
                                    <div className="d-flex justify-content-between align-items-center px-4 pt-4">
                                        <h6 className="mb-0">Payments</h6>
                                        
                                        <div className="dropdown dropdown-primary">
                                            <button onClick={toggleHandler} type="button" className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="uil uil-ellipsis-h icons"></i></button>
                                            <div className={`dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3 ${isToggle && "show" || ""}`}>
                                                <a className="dropdown-item text-dark" href="#"><span className="mb-0 d-inline-block me-1"><i className="uil uil-book-medical align-middle h6"></i></span> Add New</a>
                                                <a className="dropdown-item text-dark" href="#"><span className="mb-0 d-inline-block me-1"><i className="uil uil-trash align-middle h6"></i></span> Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="p-4 overflow-auto" data-simplebar style={{maxHeight: "380px"}}>
                                        {items?.map((item,i)=> (
                                            <div key={i} className="d-flex justify-content-between align-items-center rounded py-2 px-3 shadow my-3">
                                            <div className="flex-1 overflow-hidden">
                                                <h6 className="mb-0">Cardiogram</h6>
                                                <p className="text-muted mb-0 text-truncate small">Full bill paid</p>
                                            </div>
                                            <a href="#" className="btn btn-icon btn-primary" data-bs-toggle="modal" data-bs-target="#view-invoice"><i className="uil uil-clipboard-notes icons"></i></a>
                                        </div>
                                        ))}
                                        
                                    </div>
                                </div>
        </>
    )
}