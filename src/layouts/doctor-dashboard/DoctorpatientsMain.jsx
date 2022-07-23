 import { useState } from 'react';
import img from "../../assets/images/client/01.jpg";

 export default function DoctorPatientsMain() {
    const [patients, setPatients] = useState([
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
        {
            id: 9,
        },
        {
            id: 10,
        },
    ]);
    const [toggleID, setToggleID] = useState(0)

    const toggleHandler = (e) => {
        if(e=== toggleID){
            setToggleID(0)
        }else{
        setToggleID(e)
        }
    }

    return(
        <>
      
                        <h5 class="mb-0">Patients List</h5>
                        <div class="row">
                        {
                            patients?.map((patient,i )=>(
                                <div key={i} class="col-xl-3 col-lg-6 col-12 mt-4 pt-2">
                                <div class="card border-0 shadow rounded p-4">
                                    <div class="d-flex justify-content-between">
                                        <img src={img} class="avatar avatar-md-md rounded-pill shadow" alt="" />
                                        
                                        <div class="dropdown dropdown-primary">
                                            <button onClick={e=>toggleHandler(patient.id)} type="button" class={`btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0 ${toggleID === patient.id &&"show"||""}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="uil uil-ellipsis-h icons"></i></button>
                                            <div class={`dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3 ${toggleID === patient.id &&"show"||""}`} >
                                                <a class="dropdown-item text-dark" href="#"><span class="mb-0 d-inline-block me-1"><i class="uil uil-user align-middle h6"></i></span> Profile</a>
                                                <a class="dropdown-item text-dark" href="#"><span class="mb-0 d-inline-block me-1"><i class="uil uil-setting align-middle h6"></i></span> Profile Settings</a>
                                                <a class="dropdown-item text-dark" href="#"><span class="mb-0 d-inline-block me-1"><i class="uil uil-trash align-middle h6"></i></span> Delete</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card-body p-0 pt-3">
                                        <a href="#" class="text-dark h6">Howard Tanner</a>
                                        <p class="text-muted">#d00012</p>
                                        
                                        <ul class="mb-0 list-unstyled mt-2">
                                            <li class="mt-1"><span class="text-muted me-2">Gender:</span>Male</li>
                                            <li class="mt-1"><span class="text-muted me-2">Age:</span>25years</li>
                                            <li class="mt-1"><span class="text-muted me-2">Country:</span>USA</li>
                                            <li class="mt-1"><span class="text-muted me-2">Diagnosis:</span>Heart Attack</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                        </div>
                        {/* <!--end row--> */}

                        <div class="row text-center">
                            <div class="col-12 mt-4 pt-2">
                                <ul class="pagination justify-content-center mb-0 list-unstyled">
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Previous">Prev</a></li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Next">Next</a></li>
                                </ul>
                                {/* <!--end pagination--> */}
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                    
        </>
    )
 }