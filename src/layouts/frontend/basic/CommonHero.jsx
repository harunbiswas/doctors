import { Link } from 'react-router-dom'
import bgImg from '../../../assets/images/bg/about.jpg'

export default function CommonHero() {


    return(
        <>
            {/* <!-- Start Hero --> */}
        <section className="bg-half-170 d-table w-100" style={{background: `url('${bgImg}') center center`}}>
            <div className="bg-overlay bg-overlay-dark"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="sub-title mb-4 text-white title-dark">About us</h3>
                            <p className="para-desc mx-auto text-white-50">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        
                            <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                <ul className="breadcrumb bg-light rounded mb-0 py-1 px-2">
                                    <li className="breadcrumb-item"><Link to="/">Doctris</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">About us</li>
                                </ul>
                            </nav>
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