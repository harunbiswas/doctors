import { useState } from 'react'
import img from '../../../assets/images/client/google.png'

export default function ClientLogo() {
    const[logos, setLogos] = useState([1,1,1,1,1,1])

    return(
        <>
            <section className="pt-md-0 cta-section bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="row mt-4">
                            {
                                logos?.map((logo,i)=> (
                                    <div key={i} className="col-lg-3 col-md-4 col-6 text-center py-4">
                                        <img src={img} className="avatar avatar-client" alt="" />
                                    </div>
                                ))
                            }
                            {/* <!--end col--> */}
        
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                    </div>
                    {/* <!--end col--> */}
                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
        </section>
        {/* <!--end section--> */}
        </>
    )
}