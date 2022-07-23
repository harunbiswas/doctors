import { useState } from 'react'
import doctorImg from '../../../assets/images/client/01.jpg'
import profileImg from '../../../assets/images/client/04.jpg'
import cardImg from "../../../assets/images/payment/mastercard.png"

export default function PatientDashboardSideBar() {
    const [status, setStatus] = useState([
        {
            name: "Blood",
            value: "B +"
        },
        {
            name: "Height",
            value: "175cm"
        },
        {
            name: "Weight",
            value: "64kg"
        },
    ])
    const [doctors, setDocrots] = useState([1,1,1,1,1])
    const [cards, setCards] = useState([1,1,1,1,1])


    return(
        <>
        <div className="card border-0 p-4 rounded shadow overflow-hidden sticky-bar">
                            <div className="d-md-flex text-center text-md-start align-items-center">
                                <img src={profileImg} className="avatar avatar-md-md rounded-circle border shadow" alt="" />
                                <div className="ms-md-3 mt-3 mt-sm-0">
                                    <h5 className="d-block mb-1 mb-sm-0">Christopher Burrell</h5>
                                    <small className="text-muted">25 Years old</small>
                                </div>
                            </div>

                            <span className="bg-soft-success p-2 rounded-pill text-center h6 mb-0 mt-4">
                                Healthy
                            </span>

                            <div className="row">
                                {status?.map((data,i)=> (
                                    <div key={i} className="col-4 mt-4">
                                    <div className="text-center">
                                        <span className="h6 text-muted">{data.name}</span>
                                        <h6 className="mb-0 fw-normal">{data.value}</h6>
                                    </div>
                                </div>
                                ))}
                               
                            </div>
                            {/* <!--end row--> */}

                            <h6 className="mt-4 mb-0">Doctors:</h6>
                            <ul className="list-unstyled mb-0 mt-4">
                                {doctors?.map((doctor, i)=> (
                                    <li key={i} className="list-inline-item mx-1"><a href="#"><img src={doctorImg} className="avatar avatar-md-sm rounded-circle shadow" alt="" /></a></li>
                                ))}
                                
                            </ul>

                            <h6 className="mt-4 mb-0">Payments:</h6>
                            <ul className="list-unstyled mb-0 mt-4">
                                {cards?.map((card, i)=> (
                                    <li key={i} className="d-flex align-items-center">
                                    <img src={cardImg} className="avatar avatar-md-sm" alt="" />
                                    <div className="flex-1 ms-3">
                                        <p className="mb-0">Mastercard <span className="ms-2">•••• 4584</span></p>
                                        <p className="text-muted mb-0">Expires 12/22</p>
                                    </div>
                                </li>
                                ))}
                            </ul>

                            <div className="mt-4">
                                <div className="d-grid">
                                    <a href="#" className="btn btn-soft-primary">View Profile</a>
                                </div>
                            </div>
                        </div>
        </>
    )
}