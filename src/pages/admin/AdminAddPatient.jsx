import img from "../../assets/images/doctors/01.jpg";
import AdminDoctorListSideBar from "../../layouts/admin/AdminDoctorListSIdeBar";

export default function AdminAddPatient() {
    
    return(
        <>
        <div class="layout-specing">
                        <div class="d-md-flex justify-content-between">
                            <h5 class="mb-0">Add New Patient</h5>

                            <nav aria-label="breadcrumb" class="d-inline-block mt-4 mt-sm-0">
                                <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li class="breadcrumb-item"><a href="index.html">Doctris</a></li>
                                    <li class="breadcrumb-item"><a href="patients.html">Patients</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Add Patient</li>
                                </ul>
                            </nav>
                        </div>
                        
                        <div class="row">
                            <div class="col-lg-8 mt-4">
                                <div class="card border-0 p-4 rounded shadow">
                                    <div class="row align-items-center">
                                        <div class="col-lg-2 col-md-4">
                                            <img src={img} class="avatar avatar-md-md rounded-pill shadow mx-auto d-block" alt="" />
                                        </div>
                                        {/* <!--end col--> */}
            
                                        <div class="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                                            <h5 class="">Upload your picture</h5>
                                            <p class="text-muted mb-0">For best results, use an image at least 600px by 600px in either .jpg or .png format</p>
                                        </div>
                                        {/* <!--end col--> */}
            
                                        <div class="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                                            <a href="#" class="btn btn-primary">Upload</a>
                                            <a href="#" class="btn btn-soft-primary ms-2">Remove</a>
                                        </div>
                                        {/* <!--end col--> */}
                                    </div>
                                    {/* <!--end row--> */}
            
                                    <form class="mt-4">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">First Name</label>
                                                    <input name="name" id="name" type="text" class="form-control" placeholder="First Name :" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Last Name</label>
                                                    <input name="name" id="name2" type="text" class="form-control" placeholder="Last Name :" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Your Email</label>
                                                    <input name="email" id="email" type="email" class="form-control" placeholder="Your email :" />
                                                </div> 
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Phone no.</label>
                                                    <input name="number" id="number" type="text" class="form-control" placeholder="Phone no. :" />
                                                </div>                                                                               
                                            </div>
                                            {/* <!--end col--> */}

                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label"> Date : </label>
                                                    <input name="date" type="text" class="flatpickr flatpickr-input form-control" id="checkin-date" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Departments</label>
                                                    <select class="form-control department-name select2input">
                                                        <option value="EY">Eye Care</option>
                                                        <option value="GY">Gynecologist</option>
                                                        <option value="PS">Psychotherapist</option>
                                                        <option value="OR">Orthopedic</option>
                                                        <option value="DE">Dentist</option>
                                                        <option value="GA">Gastrologist</option>
                                                        <option value="UR">Urologist</option>
                                                        <option value="NE">Neurologist</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
            
                                        <button type="submit" class="btn btn-primary">Add Patient</button>
                                    </form>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div class="col-lg-4 mt-4">
                                <AdminDoctorListSideBar />
                            </div>
                        </div>
                    </div>
        </>
    )
}