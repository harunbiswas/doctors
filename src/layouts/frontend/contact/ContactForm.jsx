import img from '../../../assets/images/about/about-2.png'

export default function ContactForm() {

    return(
        <>
        <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="me-lg-5">
                            <img src={img}className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="custom-form rounded shadow p-4">
                            <h5 className="mb-4">Get in touch!</h5>
                            <form method="post" name="myForm" >
                                <p id="error-msg"></p>
                                <div id="simple-msg"></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                            <input name="name" id="name" type="text" className="form-control border rounded" placeholder="First Name :" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                            <input name="email" id="email" type="email" className="form-control border rounded" placeholder="Your email :" />
                                        </div> 
                                    </div>
                                    {/* <!--end col--> */}

                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Subject</label>
                                            <input name="subject" id="subject" className="form-control border rounded" placeholder="Your subject :" />
                                        </div>
                                    </div>
                                    {/* <!--end col--> */}

                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Comments <span className="text-danger">*</span></label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control border rounded" placeholder="Your Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                    </div>
                                    {/* <!--end col--> */}
                                </div>
                                {/* <!--end row--> */}
                            </form>
                        </div>
                        {/* <!--end custom-form--> */}
                    </div>
                    {/* <!--end col--> */}
                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
        </>
    )
}