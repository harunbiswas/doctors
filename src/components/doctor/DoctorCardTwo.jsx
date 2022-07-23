import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { TbBrandGithub } from 'react-icons/tb'
import doctorImg1 from "../../assets/images/doctors/01.jpg"

export default function DoctorCardTwo(){

    return(
        <>
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
        </>
    )
}