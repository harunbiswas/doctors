import { useState } from "react"

export default function FaqsItems(){
    const [items, setItems] = useState([1,1,1])
    return(
        <>
            <div className="row">
                    {items?.map((item, i)=>(

                    <div key={i} className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card features feature-primary text-center border-0">
                            <div className="icon text-center rounded-md mx-auto">
                                <i className="uil uil-book-open h3 mb-0"></i>
                            </div>
                            <div className="card-body p-0 mt-3">
                                <a href="#" className="title text-dark h5">Get started</a>
                                <p className="text-muted mt-3">There is now an abundance of readable dummy texts required purely to fill a space.</p>
                                <a href="#" className="link">Read More <i className="ri-arrow-right-line align-middle"></i></a>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>
        </>
    )
}