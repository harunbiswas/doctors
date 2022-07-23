import { useEffect, useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import logoDark from '../../assets/images/logo-dark.png';
import logo from '../../assets/images/logo-light.png';

export default function HeaderOne() {
    const [isActive, setIsActive] = useState(false)
    const [isToggle, setIsToggle] = useState(false)

    const toggleHandler = () => {
        if(isToggle){
            setIsToggle(false)
        }else {
            setIsToggle(true)
        }
    }

    const submenuHandler = (e) =>{
        if(!e.target.nextSibling){
        e.target.parentNode.nextSibling.classList.toggle("open")
        }else{
            e.target.nextSibling.classList.toggle("open")
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY> 100){
                setIsActive(true)
            }else{
                setIsActive(false)
            }
        })
    })

    return(
        <>
            {/* <!-- Navbar STart --> */}
        <header id="topnav" className={`defaultscroll sticky ${isActive && "nav-sticky"|| ""}`}>
            <div className="container-fluid">
                {/* <!-- Logo container--> */}
                <div>
                    <a className="logo" href="/">
                        <span className="logo-light-mode">
                            <img src={logoDark} className="l-dark" height="24" alt="" />
                            <img src={logoDark} className="l-light" height="24" alt="" />
                        </span>
                        <img src={logo} height="24" className="logo-dark-mode" alt="" />
                    </a>
                </div>
                {/* <!-- End Logo container--> */}
                
                {/* <!-- Start Mobile Toggle --> */}
                <div className="menu-extras">
                    <div className="menu-item">
                        {/* <!-- Mobile menu toggle--> */}
                        <a className={`navbar-toggle ${isToggle&& "open" || ''}`} id="isToggle" onClick={toggleHandler}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        {/* <!-- End mobile menu toggle--> */}
                    </div>
                </div>
                {/* <!-- End Mobile Toggle --> */}

                {/* <!-- Start Dropdown --> */}
                <ul className="dropdowns list-inline mb-0">
                    <li className="list-inline-item mb-0">
                        <a href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <div className="btn btn-icon btn-pills btn-primary"><i data-feather="settings" className="fea icon-sm"><FiSettings /></i></div>
                        </a>
                    </li>

                    <li className="list-inline-item mb-0 ms-1">
                        <a href="javascript:void(0)" className="btn btn-icon btn-pills btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                            <i className="uil uil-search"></i>
                        </a>
                    </li>

                    {/* <li className="list-inline-item mb-0 ms-1">
                        <div className="dropdown dropdown-primary">
                            <button type="button" className="btn btn-pills btn-soft-primary dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/images/doctors/01.jpg" className="avatar avatar-ex-small rounded-circle" alt="" /></button>
                            <div className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3" style={{minWidth:" 200px"}}>
                                <a className="dropdown-item d-flex align-items-center text-dark" href="doctor-profile ">
                                    <img src="../assets/images/doctors/01.jpg" className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                    <div className="flex-1 ms-2">
                                        <span className="d-block mb-1">Calvin Carlo</span>
                                        <small className="text-muted">Orthopedic</small>
                                    </div>
                                </a>
                                <a className="dropdown-item text-dark" href="doctor-dashboard "><span className="mb-0 d-inline-block me-1"><i className="uil uil-dashboard align-middle h6"></i></span> Dashboard</a>
                                <a className="dropdown-item text-dark" href="doctor-profile-setting "><span className="mb-0 d-inline-block me-1"><i className="uil uil-setting align-middle h6"></i></span> Profile Settings</a>
                                <div className="dropdown-divider border-top"></div>
                                <a className="dropdown-item text-dark" href="login "><span className="mb-0 d-inline-block me-1"><i className="uil uil-sign-out-alt align-middle h6"></i></span> Logout</a>
                            </div>
                        </div>
                    </li> */}
                </ul>
                {/* <!-- Start Dropdown --> */}
        
                <div id="navigation" className={isToggle && "d-block"|| ""}>
                    {/* <!-- Navigation Menu-->    */}
                    <ul className="navigation-menu nav-left">
                        <li className="has-submenu parent-menu-item">
                        <a href="/" className="sub-menu-item">Home</a>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <a onClick={e=>submenuHandler(e)} href="/doctors">Doctors <span className="menu-arrow"></span></a>
                                    <ul className="submenu">
                                        <li><a href="doctor-dashboard " className="sub-menu-item">Dashboard</a></li>
                                        <li><a href="doctor-appointment " className="sub-menu-item">Appointment</a></li>
                                        <li><a href="patient-list " className="sub-menu-item">Patients</a></li>
                                        <li><a href="doctor-schedule " className="sub-menu-item">Schedule Timing</a></li>
                                        <li><a href="invoices " className="sub-menu-item">Invoices</a></li>
                                        <li><a href="patient-review " className="sub-menu-item">Reviews</a></li>
                                        <li><a href="doctor-messages " className="sub-menu-item">Messages</a></li>
                                        <li><a href="doctor-profile " className="sub-menu-item">Profile</a></li>
                                        <li><a href="doctor-profile-setting " className="sub-menu-item">Profile Settings</a></li>
                                        <li><a href="doctor-chat " className="sub-menu-item">Chat</a></li>
                                        <li><a href="login " className="sub-menu-item">Login</a></li>
                                        <li><a href="signup " className="sub-menu-item">Sign Up</a></li>
                                        <li><a href="forgot-password " className="sub-menu-item">Forgot Password</a></li>
                                    </ul>
                        </li>

                        <li className="has-submenu parent-menu-item">
                            <a onClick={e=>submenuHandler(e)} href="javascript:void(0)">Patients <span className="menu-arrow"></span></a>
                            <ul className="submenu">
                                <li><a href="/patient-dashboard" className="sub-menu-item">Dashboard</a></li>
                                <li><a href="/patient-profile" className="sub-menu-item">Profile</a></li>
                                <li><a href="/booking-appointment" className="sub-menu-item">Book Appointment</a></li>
                                <li><a href="/patient-invoice" className="sub-menu-item">Invoice</a></li>
                            </ul>
                        </li>
        
                        <li className="has-submenu parent-parent-menu-item">
                            <a onClick={e=>submenuHandler(e)} href="javascript:void(0)">Pages<span className="menu-arrow"></span></a>
                            <ul className="submenu">
                                <li><a href="/about" className="sub-menu-item"> About Us</a></li>
                                <li><a href="/departments" className="sub-menu-item">Departments</a></li>
                                <li><a href="/faqs" className="sub-menu-item">FAQs</a></li>
                                <li className="has-submenu parent-menu-item">
                                    <a onClick={e=>submenuHandler(e)} href="javascript:void(0)" className="menu-item"> Blogs <span className="submenu-arrow"></span></a>
                                    <ul className="submenu">
                                        <li><a href="/blogs" className="sub-menu-item">Blogs</a></li>
                                        <li><a href="/blog-detail/1" className="sub-menu-item">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="/terms" className="sub-menu-item">Terms & Policy</a></li>
                                <li><a href="/privacy" className="sub-menu-item">Privacy Policy</a></li>
                                <li><a href="/error" className="sub-menu-item">404 !</a></li>
                                <li><a href="/contact" className="sub-menu-item">Contact</a></li>
                            </ul>
                        </li>
                        <li><a href="../admin/index " className="sub-menu-item" target="_blank">Admin</a></li>
                    </ul>
                    {/* <!--end navigation menu--> */}
                </div>
                {/* <!--end navigation--> */}
            </div>
            {/* <!--end container--> */}
        </header>
        {/* <!--end header--> */}
        {/* <!-- Navbar End --> */}
        
        </>
    )
}