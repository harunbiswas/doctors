import { useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { GoMail } from 'react-icons/go'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import logo from '../../assets/images/logo-light.png'

export default function Footer() {
    const [items1, setItems1] = useState([
        {
            url: "/",
            name: "About US"
        },
        {
            url: "/",
            name: "Services"
        },
        {
            url: "/",
            name: "Team"
        },
        {
            url: "/",
            name: "Project"
        },
        {
            url: "/",
            name: "Blog"
        },
        {
            url: "/",
            name: "Login"
        },
    ])

    const [items2, setItems2] = useState([
        {
            url: "/",
            name: "Eye Care"
        },
        {
            url: "/",
            name: "Paychotherapy"
        },
        {
            url: "/",
            name: "Dental Care"
        },
        {
            url: "/",
            name: "Orthopedic"
        },
        {
            url: "/",
            name: "Cardiology"
        },
        {
            url: "/",
            name: "Gynecology"
        },
        {
            url: "/",
            name: "Neurology"
        },
    ])
    return(
        <>
        {/* <!-- Start --> */}
        <footer className="bg-footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-4 mb-0 mb-md-4 pb-0 pb-md-2">
                        <a href="#" className="logo-footer">
                            <img src={logo} height="22" alt="" />
                        </a>
                        <p className="mt-4 me-xl-5">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                    </div>
                    {/* <!--end col--> */}

                    <div className="col-xl-7 col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="text-light title-dark footer-head">Company</h5>
                                <ul className="list-unstyled footer-list mt-4">
                                   
                                    {
                                        items1?.map((item, i)=>(
                                            <li key={i}><a href={item.url} className="text-foot"><i className="mdi mdi-chevron-right me-1"><MdKeyboardArrowRight /></i> {item.name}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                            {/* <!--end col--> */}
                            
                            <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="text-light title-dark footer-head">Departments</h5>
                                <ul className="list-unstyled footer-list mt-4">
                                {
                                        items2?.map((item, i)=>(
                                            <li key={i}><a href={item.url} className="text-foot"><i className="mdi mdi-chevron-right me-1"><MdKeyboardArrowRight /></i> {item.name}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                            {/* <!--end col--> */}
                            
                            <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="text-light title-dark footer-head">Contact us</h5>
                                <ul className="list-unstyled footer-list mt-4">
                                    <li className="d-flex align-items-center">
                                        <i data-feather="mail" className="fea icon-sm text-foot align-middle"><GoMail /></i>
                                        <a href="mailto:contact@example.com" className="text-foot ms-2">contact@example.com</a>
                                    </li>

                                    <li className="d-flex align-items-center">
                                        <i data-feather="phone" className="fea icon-sm text-foot align-middle"><BsTelephone /></i>
                                        <a href="tel:+152534-468-854" className="text-foot ms-2">+152 534-468-854</a>
                                    </li>

                                    <li className="d-flex align-items-center">
                                        <i data-feather="map-pin" className="fea icon-sm text-foot align-middle"><HiOutlineLocationMarker /></i>
                                        <a href="javascript:void(0)" className="video-play-icon text-foot ms-2">View on Google map</a>
                                    </li>
                                </ul>

                                <ul className="list-unstyled social-icon footer-social mb-0 mt-4">
                                    <li className="list-inline-item mx-1"><a href="#" className="rounded-pill"><i data-feather="facebook" className="fea icon-sm fea-social"><FiFacebook /></i></a></li>
                                    <li className="list-inline-item mx-1"><a href="#" className="rounded-pill"><i data-feather="instagram" className="fea icon-sm fea-social"><FiInstagram /></i></a></li>
                                    <li className="list-inline-item mx-1"><a href="#" className="rounded-pill"><i data-feather="twitter" className="fea icon-sm fea-social"><FiTwitter /></i></a></li>
                                    <li className="list-inline-item mx-1"><a href="#" className="rounded-pill"><i data-feather="linkedin" className="fea icon-sm fea-social"><FiLinkedin /></i></a></li>
                                </ul>
                                {/* <!--end icon--> */}
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                    </div>
                    {/* <!--end col--> */}
                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}

            <div className="container mt-5">
                <div className="pt-4 footer-bar">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="text-sm-start text-center">
                                <p className="mb-0">{(new Date().getFullYear())} © Doctris. Design with <i className="mdi mdi-heart text-danger"></i> by <a href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</a>.</p>
                            </div>
                        </div>
                        {/* <!--end col--> */}
    
                        <div className="col-sm-6 mt-4 mt-sm-0">
                            <ul className="list-unstyled footer-list text-sm-end text-center mb-0">
                                <li className="list-inline-item"><a href="terms.html" className="text-foot me-2">Terms</a></li>
                                <li className="list-inline-item"><a href="privacy.html" className="text-foot me-2">Privacy</a></li>
                                <li className="list-inline-item"><a href="aboutus.html" className="text-foot me-2">About</a></li>
                                <li className="list-inline-item"><a href="contact.html" className="text-foot me-2">Contact</a></li>
                            </ul>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
            </div>
            {/* <!--end container--> */}
        </footer>
        {/* <!--end footer--> */}
        {/* <!-- End --> */}
        </>
    )
}