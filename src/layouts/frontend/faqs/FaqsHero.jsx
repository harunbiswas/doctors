import img from '../../../assets/images/bg/department.jpg'

export default function FaqsHero() {

    return(
        <>
         {/* <!-- Start Hero --> */}
        <section className="bg-half-170 d-table w-100" style={{background: `url('${img}') center center`}}>
            <div className="bg-overlay bg-overlay-dark"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2 className="sub-title text-white title-dark">How can we help you ?</h2>
                        </div>
                        <div className="subcribe-form text-center mt-4">
                            <form>
                                <input type="text" id="name" name="name" className="border bg-white-50 rounded-pill" required="" placeholder="Ask a questions..." />
                                <button type="submit" className="btn btn-pills btn-primary"><i className="ri-search-line align-middle me-1"></i> Search</button>
                            </form>
                            <p className="text-white-50 mb-0 para-desc mx-auto mt-3">*We are collect your searching keywords to improve our FAQ</p>
                        </div>
                    </div>
                    {/* <!--end col--> */}
                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
        </section>
        {/* <!--end section--> */}
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        {/* <!-- End Hero --> */}
        </>
    )
}