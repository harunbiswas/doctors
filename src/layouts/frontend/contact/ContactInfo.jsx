import { useState } from "react"
import { BsTelephone } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { HiOutlineLocationMarker } from 'react-icons/hi'

export default function ContactInfo() {

    const [infos, setInfo] = useState([
        {
            icon: <BsTelephone />,
            name: "Phone",
            text: "Great doctor if you need your family member to get effective assistance",
            link: "tel:+152534-468-854",
            linkText: "+152 534-468-854"
        },
        {
            icon: <GoMail />,
            name: "Email",
            text: "Great doctor if you need your family member to get effective assistance",
            link: "mailto:contact@example.com",
            linkText: "contact@example.com"
        },
        {
            icon: <HiOutlineLocationMarker />,
            name: "Location",
            text: "C/54 Northwest Freeway, Suite 558,",
            text1: "Houston, USA 485",
            link: "/",
            linkText: "View on Google map"
        },
    ])

    return(
        <>
            <div className="container">
                <div className="row">
                    {
                        infos?.map((info, i)=>(
                        <div key={i} className="col-lg-4 col-md-6">
                        <div className="card features feature-primary text-center border-0">
                            <div className="icon text-center rounded-md mx-auto">
                                <i className="uil uil-phone h3 mb-0">{info.icon}</i>
                            </div>
                            <div className="card-body p-0 mt-3">
                                <h5>{info.name}</h5>
                                <p className="text-muted mt-3">{info.text}<br />{info.text1}</p>
                                <a href={info.link} className="link">{info.linkText}</a>
                            </div>
                        </div>
                    </div>))}
                    
                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
        </>
    )
}