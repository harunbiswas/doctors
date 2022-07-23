import { useState } from "react";
import profileImg from "../../assets/images/doctors/dr-profile.png";
import DoctorProfileExperience from "../../layouts/doctor-dashboard/DoctorProfileExperience";
import DoctorProfileLocation from "../../layouts/doctor-dashboard/DoctorProfileLoaction";
import DoctorProfileOverview from "../../layouts/doctor-dashboard/DoctorProfileOverview";
import DoctorProfileReviews from "../../layouts/doctor-dashboard/DoctorProfileReviews";
import DoctorProfileTimeTable from "../../layouts/doctor-dashboard/DoctorProfileTimeTable";

 export default function DoctorProfile() {
    const [buttons, setButtons] = useState([
        {
            id: 1,
            name: "Overview",
        },
        {
            id: 2,
            name: "Experience",
        },
        {
            id: 3,
            name: "Reviews",
        },
        {
            id: 4,
            name: "Location",
        },
        {
            id: 5,
            name: "Time Table",
        },
    ])
    const [buttonID, setButtonID] = useState(1)
    const buttonHandler = (e) => {
        setButtonID(e)
    }
    return(
        <>
        <div className="doctor-profile">
            {/* <!-- Start Hero --> */}
        <section className="bg-dashboard my-lg-5">
            <div className="container mt-xl-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-5 position-relative">
                                    <img src={profileImg} className="img-fluid dr-profile-img" alt="" />
                                </div>

                                <div className="col-xl-8 col-lg-8 col-md-7">
                                    <div className="p-lg-5 p-4">
                                        <small className="text-muted">25th December, 2020 - 5:00PM</small>

                                        <h4 className="my-3">Good Morning ! <br /> <span className="text-primary h2">Dr. Christopher Burrell</span></h4>
                                        <p className="para-desc text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                                    
                                        <h6 className="mb-0">You have <span className="text-primary">18 patients</span> remaining today!</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end col--> */}
                </div>
                {/* <!--end row--> */}

                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <div className="card border-0 shadow rounded p-4">
                            <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded shadow overflow-hidden bg-light" id="pills-tab" role="tablist">
                                {buttons?.map((button)=>(
                                    <li key={button.id} className="nav-item">
                                    <a onClick={e=>buttonHandler(button.id)} className={`nav-link rounded-0 ${button.id === buttonID && "active"|| ""}`} id="overview-tab" data-bs-toggle="pill"  role="tab" aria-controls="pills-overview" aria-selected="false">
                                        <div className="text-center pt-1 pb-1">
                                            <h4 className="title fw-normal mb-0">{button.name}</h4>
                                        </div>
                                    </a>
                                    {/* <!--end nav link--> */}
                                </li>
                                ))}
                                
                               
                               
                            </ul>
                            {/* <!--end nav pills--> */}

                            <div className="tab-content mt-2" id="pills-tabContent">
                               {buttonID === 1 && <DoctorProfileOverview />||
                                buttonID === 2 && <DoctorProfileExperience />||
                                buttonID === 3 &&  <DoctorProfileReviews />||
                                buttonID === 4 &&  <DoctorProfileLocation />||
                                buttonID === 5 && <DoctorProfileTimeTable />}
                            </div>
                            {/* <!--end tab content--> */}
                        </div>
                    </div>
                    {/* <!--end col--> */}
                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
        </section>
        {/* <!--end section--> */}
        {/* <!-- End Hero --> */}
        </div>
        </>
    )
 }