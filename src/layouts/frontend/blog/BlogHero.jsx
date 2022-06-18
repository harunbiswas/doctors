import { BsCalendarCheck } from 'react-icons/bs'
import { HiUser } from "react-icons/hi"
import bgImg from '../../../assets/images/bg/about.jpg'

export function BlogHero() {
    return(
        <>
        <section className="bg-half-150 d-table w-100 bg-light" style={{background: `url('${bgImg}') center center`}} >
        <div className="bg-overlay bg-overlay-dark"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="sub-title mb-4 text-white">Lockdowns lead to fewer people seeking medical care</h3>
                            <p className="para-desc mx-auto text-white-50">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        
                            <ul className="list-unstyled mt-4">
                                <li className="list-inline-item user text-white-50 me-2"><i className="mdi mdi-account"><HiUser /></i> Calvin Carlo</li>
                                <li className="list-inline-item date text-white-50"><i className="mdi mdi-calendar-check"><BsCalendarCheck /></i> 1st January, 2021</li>
                            </ul>
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