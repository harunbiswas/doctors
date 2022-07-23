 import { useState } from 'react'
 
 export default function PatientAppointments(){
    const [isToggle, setIsToggle] = useState(false)
    const toggleHandler = () => {
        if(isToggle){
            setIsToggle(false)
        }else{
            setIsToggle(true)
        }
    }
    const [items, setItems] = useState([1,1,1,1,1])
    return(
        <>
        <div className="card border-0 rounded shadow">
                                    <div className="d-flex justify-content-between align-items-center px-4 pt-4">
                                        <h6 className="mb-0">Doctor's Appointment</h6>
                                        
                                        <div className="dropdown dropdown-primary">
                                            <button onClick={toggleHandler} type="button" className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="uil uil-ellipsis-h icons"></i></button>
                                            <div className={`dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3 ${isToggle && "show" || ""}`}>
                                                <a className="dropdown-item text-dark" href="#"><span className="mb-0 d-inline-block me-1"><i className="uil uil-book-medical align-middle h6"></i></span> Add New</a>
                                                <a className="dropdown-item text-dark" href="#"><span className="mb-0 d-inline-block me-1"><i className="uil uil-trash align-middle h6"></i></span> Delete</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 px-4">
                                        <form>
                                            <div className="mb-0">
                                                <input name="date" type="text" className="flatpickr flatpickr-input form-control active" id="checkin-date" /> 
                                            </div>
                                        </form>
                                    </div>
                                    
                                    <div className="p-4 overflow-auto" data-simplebar style={{maxHeight: "320px"}}>
                                        {items?.map((item, i)=> (
                                            <div key={i} className="d-flex justify-content-between align-items-center rounded py-1 px-3 shadow my-3">
                                            <i className="ri-heart-pulse-line h3 fw-normal text-primary mb-0"></i>
                                            <div className="flex-1 overflow-hidden ms-2">
                                                <h6 className="mb-0">Cardiogram</h6>
                                                <p className="text-muted mb-0 text-truncate small">Dr. Calvin Carlo</p>
                                            </div>
                                            <span className="mb-0">10 Dec</span>
                                        </div>
                                        ))}
                                    </div>
                                </div>
        </>
    )
 }