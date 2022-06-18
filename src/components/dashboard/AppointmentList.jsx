import { useState } from 'react'
import { HiArrowSmRight } from 'react-icons/hi'
import img from '../../assets/images/client/06.jpg'

export default function AppointmentList() {
    const [items, setItems] = useState([1,1,1,1,1])

    return(
        <>
            <div className="d-flex justify-content-between p-4 border-bottom">
                                        <h6 className="mb-0"><i className="uil uil-calendar-alt text-primary me-1 h5"></i> Upcoming Appointment</h6>
                                        <h6 className="text-muted mb-0">55 Patients</h6>
                                    </div>

                                    <ul className="list-unstyled mb-0 p-4">
                                        {
                                            items?.map((item, i)=> (

                                        
                                        <li key={i} className='mb-4'>
                                            <a href="javascript:void(0)">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-inline-flex">
                                                        <img src={img} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                        <div className="ms-3">
                                                            <h6 className="text-dark mb-0 d-block">Cristino Murphy</h6>
                                                            <small className="text-muted">Booking on 27th Nov, 2020</small>
                                                        </div>
                                                    </div>
                                                    <i className="uil uil-arrow-right h4 text-dark"><HiArrowSmRight /></i>
                                                </div>
                                            </a>
                                        </li>
    ))
}
                                        
                                    </ul>
        </>
    )
}