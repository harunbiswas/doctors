import { AiOutlineLogin, AiOutlineReload } from 'react-icons/ai'
import { BiMessageRounded } from 'react-icons/bi'
import { BsCalendarCheck, BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import { GrUserSettings } from 'react-icons/gr'
import { ImLaptop } from 'react-icons/im'
import { MdOutlineMarkEmailUnread, MdTimer } from 'react-icons/md'
import { RiChatVoiceLine, RiUserHeartLine, RiUserLine } from 'react-icons/ri'
import profileImg from '../../assets/images/doctors/01.jpg'
import img from '../../assets/images/doctors/profile-bg.jpg'

export default function DoctorDashboardSideBar() {
    
    return(
        <>
        <div className="rounded shadow overflow-hidden sticky-bar">
                            <div className="card border-0">
                                <img src={img} className="img-fluid" alt="" />
                            </div>

                            <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
                                <img src={profileImg} className="rounded-circle shadow-md avatar avatar-md-md" alt="" />
                                <h5 className="mt-3 mb-1">Dr. Calvin Carlo</h5>
                                <p className="text-muted mb-0">Orthopedic</p>
                            </div>

                            <ul className="list-unstyled sidebar-nav mb-0">
                                <li className="navbar-item"><a href="doctor-dashboard" className="navbar-link"><i className="ri-airplay-line align-middle navbar-icon"><ImLaptop /></i> Dashboard</a></li>
                                <li className="navbar-item"><a href="doctor-appointment" className="navbar-link"><i className="ri-calendar-check-line align-middle navbar-icon"><BsCalendarCheck /></i> Appointment</a></li>
                                <li className="navbar-item"><a href="doctor-schedule" className="navbar-link"><i className="ri-timer-line align-middle navbar-icon"><MdTimer /></i> Schedule Timing</a></li>
                                <li className="navbar-item"><a href="invoices" className="navbar-link"><i className="ri-pages-line align-middle navbar-icon"><BsReverseLayoutTextWindowReverse /></i> Invoices</a></li>
                                <li className="navbar-item"><a href="doctor-messages" className="navbar-link"><i className="ri-mail-unread-line align-middle navbar-icon"><MdOutlineMarkEmailUnread /></i> Messages</a></li>
                                <li className="navbar-item"><a href="doctor-profile" className="navbar-link"><i className="ri-user-line align-middle navbar-icon"><RiUserLine /></i> Profile</a></li>
                                <li className="navbar-item"><a href="doctor-profile-setting" className="navbar-link"><i className="ri-user-settings-line align-middle navbar-icon"><GrUserSettings /></i> Profile Settings</a></li>
                                <li className="navbar-item"><a href="patient-list" className="navbar-link"><i className="ri-empathize-line align-middle navbar-icon"><RiUserHeartLine /></i> Patients</a></li>
                                <li className="navbar-item"><a href="patient-review" className="navbar-link"><i className="ri-chat-1-line align-middle navbar-icon"><BiMessageRounded /></i> Patients Review</a></li>
                                <li className="navbar-item"><a href="doctor-chat" className="navbar-link"><i className="ri-chat-voice-line align-middle navbar-icon"><RiChatVoiceLine /></i> Chat</a></li>
                                <li className="navbar-item"><a href="login" className="navbar-link"><i className="ri-login-circle-line align-middle navbar-icon"><AiOutlineLogin /></i> Login</a></li>
                                <li className="navbar-item"><a href="forgot-password" className="navbar-link"><i className="ri-device-recover-line align-middle navbar-icon"><AiOutlineReload /></i> Forgot Password</a></li>
                            </ul>
                        </div>
        </>
    )
}