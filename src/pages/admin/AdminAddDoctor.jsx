import img from "../../assets/images/doctors/01.jpg";
import AdminDoctorListSideBar from "../../layouts/admin/AdminDoctorListSIdeBar";

export default function AdminAddDoctor(){
    return(
        <>
        <div className="layout-specing">
                        <div className="d-md-flex justify-content-between">
                            <h5 className="mb-0">Add New Doctor</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                                <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item"><a href="index.html">Doctris</a></li>
                                    <li className="breadcrumb-item"><a href="doctors.html">Doctors</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Add Doctor</li>
                                </ul>
                            </nav>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-8 mt-4">
                                <div className="card border-0 p-4 rounded shadow">
                                    <div className="row align-items-center">
                                        <div className="col-lg-2 col-md-4">
                                            <img src={img} className="avatar avatar-md-md rounded-pill shadow mx-auto d-block" alt="" />
                                        </div>
                                        {/* <!--end col--> */}
            
                                        <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                                            <h5 className="">Upload your picture</h5>
                                            <p className="text-muted mb-0">For best results, use an image at least 600px by 600px in either .jpg or .png format</p>
                                        </div>
                                        {/* <!--end col--> */}
            
                                        <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                                            <a href="#" className="btn btn-primary">Upload</a>
                                            <a href="#" className="btn btn-soft-primary ms-2">Remove</a>
                                        </div>
                                        {/* <!--end col--> */}
                                    </div>
                                    {/* <!--end row--> */}
            
                                    <form className="mt-4">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">First Name</label>
                                                    <input name="name" id="name" type="text" className="form-control" placeholder="First Name :" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Last Name</label>
                                                    <input name="name" id="name2" type="text" className="form-control" placeholder="Last Name :" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Email</label>
                                                    <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" />
                                                </div> 
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Phone no.</label>
                                                    <input name="number" id="number" type="text" className="form-control" placeholder="Phone no. :" />
                                                </div>                                                                               
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Departments</label>
                                                    <select className="form-control department-name select2input">
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
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Gender</label>
                                                    <select className="form-control gender-name select2input">
                                                        <option value="EY">Male</option>
                                                        <option value="GY">Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Instagram</label>
                                                    <div className="input-group flex-nowrap">
                                                        <span className="input-group-text bg-white border border-end-0 text-dark" id="insta-id"><i data-feather="instagram" className="fea icon-sm"></i></span>
                                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="insta-id" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Facebook</label>
                                                    <div className="input-group flex-nowrap">
                                                        <span className="input-group-text bg-white border border-end-0 text-dark" id="fb-id"><i data-feather="facebook" className="fea icon-sm"></i></span>
                                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="fb-id" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Linkedin</label>
                                                    <div className="input-group flex-nowrap">
                                                        <span className="input-group-text bg-white border border-end-0 text-dark" id="linke-pro"><i data-feather="linkedin" className="fea icon-sm"></i></span>
                                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="linke-pro" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Twitter</label>
                                                    <div className="input-group flex-nowrap">
                                                        <span className="input-group-text bg-white border border-end-0 text-dark" id="twitter-id"><i data-feather="twitter" className="fea icon-sm"></i></span>
                                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="twitter-id" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Bio Here</label>
                                                    <textarea name="comments" id="comments" rows="3" className="form-control" placeholder="Bio :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end row--> */}
            
                                        <button type="submit" className="btn btn-primary">Add Doctor</button>
                                    </form>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-lg-4 mt-4">
                                <AdminDoctorListSideBar />
                            </div>
                        </div>
                        {/* <!--end row--> */}
                    </div>
        </>
    )
}