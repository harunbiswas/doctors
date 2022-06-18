export default function Aperments() {
    return(
        <>
        <div className="container mt-100 mt-60">
                <div className="row align-items-lg-end">
                    <div className="col-md-6">
                        <div className="me-xl-3">
                            <div className="section-title mb-4 pb-2">
                                <i className="uil uil-notes text-primary h2"></i>
                                <h4 className="title mb-4">Book Your Appointment</h4>
                                <p className="text-muted para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                            </div>
    
                            <div className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden">
                                <i className="uil uil-stethoscope-alt icons h2 mb-0 text-primary"></i>
                                <div className="ms-3">
                                    <h5 className="titles">Success Of Treatment</h5>
                                    <p className="text-muted para mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                                </div>
                                <div className="big-icon">
                                    <i className="uil uil-stethoscope-alt"></i>
                                </div>
                            </div>
    
                            <div className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden mt-4">
                                <i className="uil uil-microscope icons h2 mb-0 text-primary"></i>
                                <div className="ms-3">
                                    <h5 className="titles">Modern Technology</h5>
                                    <p className="text-muted para mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                                </div>
                                <div className="big-icon">
                                    <i className="uil uil-microscope"></i>
                                </div>
                            </div>
    
                            <div className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden mt-4">
                                <i className="uil uil-user-md icons h2 mb-0 text-primary"></i>
                                <div className="ms-3">
                                    <h5 className="titles">Certified Doctors</h5>
                                    <p className="text-muted para mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                                </div>
                                <div className="big-icon">
                                    <i className="uil uil-user-md"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end col--> */}

                    <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="card border-0 rounded shadow p-4 ms-xl-3">
                            <div className="custom-form">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                                                <input name="name" id="name1" type="text" className="form-control" placeholder="Patient Name :" />
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                        
                                        <div className="col-lg-6">
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
                                        
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Doctor</label>
                                                <select className="form-control doctor-name select2input">
                                                    <option value="CA">Dr. Calvin Carlo</option>
                                                    <option value="CR">Dr. Cristino Murphy</option>
                                                    <option value="AL">Dr. Alia Reddy</option>
                                                    <option value="TO">Dr. Toni Kovar</option>
                                                    <option value="JE">Dr. Jessica McFarlane</option>
                                                    <option value="EL">Dr. Elsie Sherman</option>
                                                    <option value="BE">Dr. Bertha Magers</option>
                                                    <option value="LO">Dr. Louis Batey</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" />
                                            </div> 
                                        </div>
                                        {/* <!--end col--> */}

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                                <input name="phone" id="phone" type="tel" className="form-control" placeholder="Your Phone :" />
                                            </div> 
                                        </div>
                                        {/* <!--end col--> */}

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label"> Date <span className="text-danger">*</span></label>
                                                <input name="date" type="text" className="flatpickr flatpickr-input form-control" id="checkin-date" />
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="input-time">Time <span className="text-danger">*</span></label>
                                                <input name="time" type="text" className="form-control timepicker" id="input-time" placeholder="03:30 PM" />
                                            </div> 
                                        </div>
                                        {/* <!--end col--> */}

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Comments <span className="text-danger">*</span></label>
                                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :"></textarea>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}

                                        <div className="col-lg-12">
                                            <div className="d-grid">
                                                <button type="submit" className="btn btn-primary">Book An Appointment</button>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                    </div>
                                    {/* <!--end row--> */}
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!--end col--> */}
                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
        </>
    )
}