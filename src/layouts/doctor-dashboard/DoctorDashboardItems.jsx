import { useState } from 'react'

export default function DoctorDashboardItems() {
    const [items, setItems] = useState([1,1,1,1])

    return(
        <>
        <div className="row">
            {items?.map((item, i)=> (
                            <div key={i} className="col-xl-3 col-md-6 mt-4">
                                <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                                    <div className="icon text-center rounded-lg mx-auto">
                                        <i className="uil uil-message align-middle h3 mb-0"></i>
                                    </div>
                                    <div className="card-body p-0 mt-3">
                                        <a href="javascript:void(0)" className="title text-dark h5">New Messages</a>
                                        <p className="text-muted my-2">Due to its wide spread use as filler text</p>
                                        <a href="javascript:void(0)" className="link">Read more <i className="ri-arrow-right-line align-middle"></i></a>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        {/* <!--end row--> */}
        </>
    )
}