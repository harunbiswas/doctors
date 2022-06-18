import blogImg from '../../../assets/images/blog/single.jpg';
import clientImg1 from '../../../assets/images/client/01.jpg';
import clientImg2 from '../../../assets/images/client/02.jpg';
import RelatedBlog from './RelatedBlog';
import SideBar from './SideBar';

export default function SingleBlogBody() {
    return(
        <>
        {/* <!-- Start --> */}
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-7">
                        <img src={blogImg} className="img-fluid rounded shadow" alt="" />
                         {/* <ul className="list-unstyled mt-4">
                            <li className="list-inline-item user text-muted me-2"><i className="mdi mdi-account"></i> Calvin Carlo</li>
                            <li className="list-inline-item date text-muted"><i className="mdi mdi-calendar-check"></i> 1st January, 2021</li>
                        </ul>  */}

                        <p className="text-muted mt-4">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century.</p>
                        <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                        <p className="text-muted mb-0">For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>
                    
                        <h5 className="card-title mt-4 mb-0">Comments :</h5>

                        <ul className="media-list list-unstyled mb-0">
                            <li className="mt-4">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <a className="pe-3" href="#">
                                            <img src={clientImg1} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                        </a>
                                        <div className="commentor-detail">
                                            <h6 className="mb-0"><a href="javascript:void(0)" className="text-dark media-heading">Lorenzo Peterson</a></h6>
                                            <small className="text-muted">15th August, 2019 at 01:25 pm</small>
                                        </div>
                                    </div>
                                    <a href="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</a>
                                </div>
                                <div className="mt-3">
                                    <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                </div>
                            </li>

                            <li className="mt-4">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <a className="pe-3" href="#">
                                            <img src={clientImg2} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                        </a>
                                        <div className="commentor-detail">
                                            <h6 className="mb-0"><a href="javascript:void(0)" className="media-heading text-dark">Tammy Camacho</a></h6>
                                            <small className="text-muted">15th August, 2019 at 05:44 pm</small>
                                        </div>
                                    </div>
                                    <a href="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</a>
                                </div>
                                <div className="mt-3">
                                    <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                </div>
                            </li>
                            
                            <li className="mt-4">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <a className="pe-3" href="#">
                                            <img src={clientImg1} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                        </a>
                                        <div className="commentor-detail">
                                            <h6 className="mb-0"><a href="javascript:void(0)" className="media-heading text-dark">Tammy Camacho</a></h6>
                                            <small className="text-muted">16th August, 2019 at 03:44 pm</small>
                                        </div>
                                    </div>
                                    <a href="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</a>
                                </div>
                                <div className="mt-3">
                                    <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                </div>

                                <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                                    <li className="mt-4">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <a className="pe-3" href="#">
                                                    <img src={clientImg2} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                                </a>
                                                <div className="commentor-detail">
                                                    <h6 className="mb-0"><a href="javascript:void(0)" className="text-dark media-heading">Lorenzo Peterson</a></h6>
                                                    <small className="text-muted">17th August, 2019 at 01:25 pm</small>
                                                </div>
                                            </div>
                                            <a href="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</a>
                                        </div>
                                        <div className="mt-3">
                                            <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    
                        <h5 className="card-title mt-4 mb-0">Leave A Comment :</h5>

                        <form className="mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Your Comment</label>
                                        <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control" required=""></textarea>
                                    </div>
                                </div>
                                {/* <!--end col--> */}

                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Name <span className="text-danger">*</span></label>
                                        <input id="name" name="name" type="text" placeholder="Name" className="form-control" required="" />
                                    </div>
                                </div>
                                {/* <!--end col--> */}

                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                        <input id="email" type="email" placeholder="Email" name="email" className="form-control" required="" />
                                    </div>
                                </div>
                                {/* <!--end col--> */}

                                <div className="col-md-12">
                                    <div className="send d-grid">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                                {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                        </form>
                        {/* <!--end form--> */}
                    </div>
                    {/* <!--end col--> */}

                    <SideBar />
                </div>
                {/* <!--end row--> */}
            </div>
            <RelatedBlog />
        </section>
        {/* <!--end section--> */}
        {/* <!-- End --> */}
        </>
    )
}