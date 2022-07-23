import AdminReviewList from "../../components/admin/AdminReviewList"
import AppointmentList from "../../components/dashboard/AppointmentList"

export default function AdminDashboardMain(){
    return(
        <>
        <div className="container-fluid">
                    <div className="layout-specing">
                        <h5 className="mb-0">Dashboard</h5>

                        <div className="row">
                            <div className="col-xl-2 col-lg-4 col-md-4 mt-4">
                                <div className="card features feature-primary rounded border-0 shadow p-4">
                                    <div className="d-flex align-items-center">
                                        <div className="icon text-center rounded-md">
                                            <i className="uil uil-bed h3 mb-0"></i>
                                        </div>
                                        <div className="flex-1 ms-2">
                                            <h5 className="mb-0">558</h5>
                                            <p className="text-muted mb-0">Patients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                            
                            <div className="col-xl-2 col-lg-4 col-md-4 mt-4">
                                <div className="card features feature-primary rounded border-0 shadow p-4">
                                    <div className="d-flex align-items-center">
                                        <div className="icon text-center rounded-md">
                                            <i className="uil uil-file-medical-alt h3 mb-0"></i>
                                        </div>
                                        <div className="flex-1 ms-2">
                                            <h5 className="mb-0">$2164</h5>
                                            <p className="text-muted mb-0">Avg. costs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                            
                            <div className="col-xl-2 col-lg-4 col-md-4 mt-4">
                                <div className="card features feature-primary rounded border-0 shadow p-4">
                                    <div className="d-flex align-items-center">
                                        <div className="icon text-center rounded-md">
                                            <i className="uil uil-social-distancing h3 mb-0"></i>
                                        </div>
                                        <div className="flex-1 ms-2">
                                            <h5 className="mb-0">112</h5>
                                            <p className="text-muted mb-0">Staff Members</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                            
                            <div className="col-xl-2 col-lg-4 col-md-4 mt-4">
                                <div className="card features feature-primary rounded border-0 shadow p-4">
                                    <div className="d-flex align-items-center">
                                        <div className="icon text-center rounded-md">
                                            <i className="uil uil-ambulance h3 mb-0"></i>
                                        </div>
                                        <div className="flex-1 ms-2">
                                            <h5 className="mb-0">16</h5>
                                            <p className="text-muted mb-0">Vehicles</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            {/* <!--end col--> */}
                            
                            <div className="col-xl-2 col-lg-4 col-md-4 mt-4">
                                <div className="card features feature-primary rounded border-0 shadow p-4">
                                    <div className="d-flex align-items-center">
                                        <div className="icon text-center rounded-md">
                                            <i className="uil uil-medkit h3 mb-0"></i>
                                        </div>
                                        <div className="flex-1 ms-2">
                                            <h5 className="mb-0">220</h5>
                                            <p className="text-muted mb-0">Appointment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                            
                            <div className="col-xl-2 col-lg-4 col-md-4 mt-4">
                                <div className="card features feature-primary rounded border-0 shadow p-4">
                                    <div className="d-flex align-items-center">
                                        <div className="icon text-center rounded-md">
                                            <i className="uil uil-medical-drip h3 mb-0"></i>
                                        </div>
                                        <div className="flex-1 ms-2">
                                            <h5 className="mb-0">10</h5>
                                            <p className="text-muted mb-0">Operations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}

                        <div className="row">
                            <div className="col-xl-8 col-lg-7 mt-4">
                                <div className="card shadow border-0 p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h6 className="align-items-center mb-0">Patients visit by Gender</h6>
                                        
                                        <div className="mb-0 position-relative">
                                            <select className="form-select form-control" id="yearchart">
                                                <option selected>2020</option>
                                                <option value="2019">2019</option>
                                                <option value="2018">2018</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div id="dashboard" className="apex-chart"></div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-xl-4 col-lg-5 mt-4">
                                <div className="card shadow border-0 p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h6 className="align-items-center mb-0">Patients by Department</h6>
                                        
                                        <div className="mb-0 position-relative">
                                            <select className="form-select form-control" id="dailychart">
                                                <option selected>Today</option>
                                                <option value="2019">Yesterday</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div id="department" className="apex-chart"></div>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}

                        <div className="row">
                            <div className="col-xl-4 col-lg-6 mt-4">
                                <div className="card border-0 shadow rounded">
                                <AppointmentList />
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-xl-4 col-lg-6 mt-4">
                                
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-xl-4 col-lg-12 mt-4">
                                <AdminReviewList />
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                    </div>
                </div>
        </>
    )
}