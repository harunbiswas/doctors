import { useState } from "react"
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { TbBrandGithub } from 'react-icons/tb'
import doctorImg1 from '../../../assets/images/doctors/01.jpg'


export default function Doctors() {
    const[ doctors, setDoctors] = useState([1,1,1,1])

    return (
        <>
           <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Doctors</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        </div>
                    </div>
                    {/* <!--end col--> */}
                </div>
                {/* <!--end row--> */}

                <div className="row align-items-center">
                    {
                        doctors?.map((doctor, i)=> (
                            <div key={i} className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2">
                                <div className="card team border-0 rounded shadow overflow-hidden">
                                    <div className="team-img position-relative">
                                        <img src={doctorImg1} className="img-fluid" alt="" />
                                        <ul className="list-unstyled team-social mb-0">
                                            <li><a href="javascript:void(0)" className="btn btn-icon btn-pills btn-soft-primary"><i data-feather="facebook" className="icons"><FiFacebook /></i></a></li>
                                            <li className="mt-2"><a href="javascript:void(0)" className="btn btn-icon btn-pills btn-soft-primary"><i data-feather="linkedin" className="icons"><FiLinkedin /></i></a></li>
                                            <li className="mt-2"><a href="javascript:void(0)" className="btn btn-icon btn-pills btn-soft-primary"><i data-feather="github" className="icons"><TbBrandGithub /></i></a></li>
                                            <li className="mt-2"><a href="javascript:void(0)" className="btn btn-icon btn-pills btn-soft-primary"><i data-feather="twitter" className="icons"><FiTwitter /></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body content text-center">
                                        <a href="doctor-team-one.html" className="title text-dark h5 d-block mb-0">Calvin Carlo</a>
                                        <small className="text-muted speciality">Eye Care</small>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
        </>
    )
}