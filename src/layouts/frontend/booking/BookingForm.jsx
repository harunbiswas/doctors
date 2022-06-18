export default function BookingForm() {
    return(
        <>
             {/* <!-- Start --> */}
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-0 shadow rounded overflow-hidden">
                            <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link rounded-0 active" id="clinic-booking" data-bs-toggle="pill" href="#pills-clinic" role="tab" aria-controls="pills-clinic" aria-selected="false">
                                        <div className="text-center pt-1 pb-1">
                                            <h4 className="title fw-normal mb-0">Clinic Appointment</h4>
                                        </div>
                                    </a>
                                    {/* <!--end nav link--> */}
                                </li>
                                {/* <!--end nav item--> */}
                                
                                <li className="nav-item">
                                    <a className="nav-link rounded-0" id="online-booking" data-bs-toggle="pill" href="#pills-online" role="tab" aria-controls="pills-online" aria-selected="false">
                                        <div className="text-center pt-1 pb-1">
                                            <h4 className="title fw-normal mb-0">Online Appointment</h4>
                                        </div>
                                    </a>
                                    {/* <!--end nav link--> */}
                                </li>
                                {/* <!--end nav item--> */}
                            </ul>
    
                            <div className="tab-content p-4" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-clinic" role="tabpanel" aria-labelledby="clinic-booking">
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                                                    <input name="name" id="name" type="text" className="form-control" placeholder="Patient Name :" />
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
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                    <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" />
                                                </div> 
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                                    <input name="phone" id="phone" type="tel" className="form-control" placeholder="Your Phone :" />
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
    
                                <div className="tab-pane fade" id="pills-online" role="tabpanel" aria-labelledby="online-booking">
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                                                    <input name="name" id="name2" type="text" className="form-control" placeholder="Patient Name :" />
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
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                    <input name="email" id="email2" type="email" className="form-control" placeholder="Your email :" />
                                                </div> 
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                                    <input name="phone" id="phone2" type="tel" className="form-control" placeholder="Your Phone :" />
                                                </div> 
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label"> Date : </label>
                                                    <input name="date" type="text" className="flatpickr flatpickr-input form-control" id="checkin-date" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label" for="input-time">Time : </label>
                                                    <input name="time" type="text" className="form-control timepicker" id="input-time" placeholder="03:30 PM" />
                                                </div> 
                                            </div>
                                            {/* <!--end col--> */}
            
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Comments <span className="text-danger">*</span></label>
                                                    <textarea name="comments" id="comments2" rows="4" className="form-control" placeholder="Your Message :"></textarea>
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
                    </div>
                    {/* <!--end col--> */}
                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
        </section>
        {/* <!--end section--> */}
        {/* <!-- End --> */}
        </>
    )
}