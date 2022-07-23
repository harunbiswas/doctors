import { AiOutlineSetting } from 'react-icons/ai'
import { MdOutlineEmail } from 'react-icons/md'
import img2 from '../../assets/images/doctors/01.jpg'
import img1 from "../../assets/images/language/american.png"

export default function AdminTopHeader({handler}) {

    return(
        <>
        <div className="top-header">
                    <div className="header-bar d-flex justify-content-between border-bottom">
                        <div className="d-flex align-items-center">
                            <a href="#" className="logo-icon">
                                <img src="../assets/images/logo-icon.png" height="30" className="small" alt="" />
                                <span className="big">
                                    <img src="../assets/images/logo-dark.png" height="24" className="logo-light-mode" alt="" />
                                    <img src="../assets/images/logo-light.png" height="24" className="logo-dark-mode" alt="" />
                                </span>
                            </a>
                            <a onClick={handler} id="close-sidebar" className="btn btn-icon btn-pills btn-soft-primary ms-2" href="#">
                                <i className="uil uil-bars"></i>
                            </a>
                            <div className="search-bar p-0 d-none d-md-block ms-2">
                                <div id="search" className="menu-search mb-0">
                                    <form role="search" method="get" id="searchform" className="searchform">
                                        <div>
                                            <input type="text" className="form-control border rounded-pill" name="s" id="s" placeholder="Search Keywords..." />
                                            <input type="submit" id="searchsubmit" value="Search" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
        
                        <ul className="list-unstyled mb-0">
                            <li className="list-inline-item mb-0">
                                <div className="dropdown dropdown-primary">
                                    <button type="button" className="btn btn-pills btn-soft-primary dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={img1} className="avatar avatar-ex-small rounded-circle p-2" alt="" /></button>
                                    <div className="dropdown-menu dd-menu drop-ups dropdown-menu-end bg-white shadow border-0 mt-3 p-2" data-simplebar style={{height: "175px"}}>
                                        <a href="javascript:void(0)" className="d-flex align-items-center">
                                            <img src={img1} className="avatar avatar-client rounded-circle shadow" alt="" />
                                            <div className="flex-1 text-left ms-2 overflow-hidden">
                                                <small className="text-dark mb-0">Chinese</small>
                                            </div>
                                        </a>
        
                                        <a href="javascript:void(0)" className="d-flex align-items-center mt-2">
                                            <img src={img1} className="avatar avatar-client rounded-circle shadow" alt="" />
                                            <div className="flex-1 text-left ms-2 overflow-hidden">
                                                <small className="text-dark mb-0">European</small>
                                            </div>
                                        </a>
        
                                        <a href="javascript:void(0)" className="d-flex align-items-center mt-2">
                                            <img src={img1} className="avatar avatar-client rounded-circle shadow" alt="" />
                                            <div className="flex-1 text-left ms-2 overflow-hidden">
                                                <small className="text-dark mb-0">Indian</small>
                                            </div>
                                        </a>
        
                                        <a href="javascript:void(0)" className="d-flex align-items-center mt-2">
                                            <img src={img1} className="avatar avatar-client rounded-circle shadow" alt="" />
                                            <div className="flex-1 text-left ms-2 overflow-hidden">
                                                <small className="text-dark mb-0">Japanese</small>
                                            </div>
                                        </a>
        
                                        <a href="javascript:void(0)" className="d-flex align-items-center mt-2">
                                            <img src={img1} className="avatar avatar-client rounded-circle shadow" alt="" />
                                            <div className="flex-1 text-left ms-2 overflow-hidden">
                                                <small className="text-dark mb-0">Russian</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li className="list-inline-item mb-0 ms-1">
                                <a href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <div className="btn btn-icon btn-pills btn-soft-primary"><AiOutlineSetting /><i data-feather="settings" className="fea icon-sm"></i></div>
                                </a>
                            </li>

                            <li className="list-inline-item mb-0 ms-1">
                                <div className="dropdown dropdown-primary">
                                    <button type="button" className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="mail" className="fea icon-sm"><MdOutlineEmail /></i></button>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">4 <span className="visually-hidden">unread mail</span></span>
                                    
                                    <div className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 px-2 py-2" data-simplebar style={{height: "320px", width: "300px"}}>
                                        <a href="#" className="d-flex align-items-center justify-content-between py-2">
                                            <div className="d-inline-flex position-relative overflow-hidden">
                                                <img src="../assets/images/client/02.jpg" className="avatar avatar-md-sm rounded-circle shadow" alt="" />
                                                <small className="text-dark mb-0 d-block text-truncat ms-3">You received a new email from <b>Janalia</b> <small className="text-muted fw-normal d-inline-block">1 hour ago</small></small>
                                            </div>
                                        </a>

                                        <a href="#" className="d-flex align-items-center justify-content-between py-2 border-top">
                                            <div className="d-inline-flex position-relative overflow-hidden">
                                                <img src="../assets/images/client/Codepen.svg" className="avatar avatar-md-sm rounded-circle shadow" alt="" />
                                                <small className="text-dark mb-0 d-block text-truncat ms-3">You received a new email from <b>codepen</b>  <small className="text-muted fw-normal d-inline-block">4 hour ago</small></small>
                                            </div>
                                        </a>

                                        <a href="#" className="d-flex align-items-center justify-content-between py-2 border-top">
                                            <div className="d-inline-flex position-relative overflow-hidden">
                                                <img src="../assets/images/client/03.jpg" className="avatar avatar-md-sm rounded-circle shadow" alt="" />
                                                <small className="text-dark mb-0 d-block text-truncat ms-3">You received a new email from <b>Cristina</b> <small className="text-muted fw-normal d-inline-block">5 hour ago</small></small>
                                            </div>
                                        </a>

                                        <a href="#" className="d-flex align-items-center justify-content-between py-2 border-top">
                                            <div className="d-inline-flex position-relative overflow-hidden">
                                                <img src="../assets/images/client/dribbble.svg" className="avatar avatar-md-sm rounded-circle shadow" alt="" />
                                                <small className="text-dark mb-0 d-block text-truncat ms-3">You received a new email from <b>Dribbble</b> <small className="text-muted fw-normal d-inline-block">24 hour ago</small></small>
                                            </div>
                                        </a>

                                        <a href="#" className="d-flex align-items-center justify-content-between py-2 border-top">
                                            <div className="d-inline-flex position-relative overflow-hidden">
                                                <img src="../assets/images/client/06.jpg" className="avatar avatar-md-sm rounded-circle shadow" alt="" />
                                                <small className="text-dark mb-0 d-block text-truncat ms-3">You received a new email from <b>Donald Aghori</b> <small className="text-muted fw-normal d-inline-block">1 day ago</small></small>
                                            </div>
                                        </a>

                                        <a href="#" className="d-flex align-items-center justify-content-between py-2 border-top">
                                            <div className="d-inline-flex position-relative overflow-hidden">
                                                <img src="../assets/images/client/07.jpg" className="avatar avatar-md-sm rounded-circle shadow" alt="" />
                                                <small className="text-dark mb-0 d-block text-truncat ms-3">You received a new email from <b>Calvin</b> <small className="text-muted fw-normal d-inline-block">2 day ago</small></small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li className="list-inline-item mb-0 ms-1">
                                <div className="dropdown dropdown-primary">
                                    <button type="button" className="btn btn-pills btn-soft-primary dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={img2} className="avatar avatar-ex-small rounded-circle" alt="" /></button>
                                    <div className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3" style={{minWidth: "200px"}}>
                                        <a className="dropdown-item d-flex align-items-center text-dark" href="profile.html">
                                            <img src={img2} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                            <div className="flex-1 ms-2">
                                                <span className="d-block mb-1">Calvin Carlo</span>
                                                <small className="text-muted">Orthopedic</small>
                                            </div>
                                        </a>
                                        <a className="dropdown-item text-dark" href="index.html"><span className="mb-0 d-inline-block me-1"><i className="uil uil-dashboard align-middle h6"></i></span> Dashboard</a>
                                        <a className="dropdown-item text-dark" href="dr-profile.html"><span className="mb-0 d-inline-block me-1"><i className="uil uil-setting align-middle h6"></i></span> Profile Settings</a>
                                        <div className="dropdown-divider border-top"></div>
                                        <a className="dropdown-item text-dark" href="lock-screen.html"><span className="mb-0 d-inline-block me-1"><i className="uil uil-sign-out-alt align-middle h6"></i></span> Logout</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
        </>
    )
}