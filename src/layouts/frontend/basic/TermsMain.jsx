import Questions from "../faqs/Questions";

 export default function TermsMain() {

    return(
        <>
         {/* <!-- Start --> */}
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="card shadow border-0 rounded">
                            <div className="card-body">
                                <h5 className="card-title">Introduction :</h5>
                                <p className="text-muted">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>

                                <h5 className="card-title">User Agreements :</h5>
                                <p className="text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                                <p className="text-muted">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                                <p className="text-muted">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                                
                                <h5 className="card-title">Restrictions :</h5>
                                <p className="text-muted">You are specifically restricted from all of the following :</p>
                                <ul className="list-unstyled text-muted">
                                    <li><i data-feather="arrow-right" className="fea icon-sm me-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mt-2"><i data-feather="arrow-right" className="fea icon-sm me-2"></i>Our Talented & Experienced Marketing Agency</li>
                                    <li className="mt-2"><i data-feather="arrow-right" className="fea icon-sm me-2"></i>Create your own skin to match your brand</li>
                                    <li className="mt-2"><i data-feather="arrow-right" className="fea icon-sm me-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mt-2"><i data-feather="arrow-right" className="fea icon-sm me-2"></i>Our Talented & Experienced Marketing Agency</li>
                                    <li className="mt-2"><i data-feather="arrow-right" className="fea icon-sm me-2"></i>Create your own skin to match your brand</li>
                                </ul>

                                <h5 className="card-title">Users Question & Answer :</h5>
                                <Questions />

                                <div className="mt-3">
                                    <a href="" className="btn btn-primary mt-2 me-2">Accept</a>
                                    <a href="" className="btn btn-soft-primary mt-2">Decline</a>
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