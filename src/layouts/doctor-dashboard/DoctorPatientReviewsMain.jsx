import { useState } from "react";
import ReviewCard from "../../components/card/ReviewCard";

export default function DoctorPatientReviewsMain() {
    const [progresses, setProgresses] = useState([
        {
            value: 5,
            name: "Very satisfied"
        },
        {
            value: 4,
            name: "satisfied"
        },
        {
            value: 3,
            name: "Neutral"
        },
        {
            value: 2,
            name: "Dissatisfied"
        },
        {
            value: 1,
            name: "Very Dissatisfied"
        },
    ])
    const [reviews, setReviews] = useState([1,1,1,1,1,1,1,])
    return(
        <>
                        <h5 className="mb-0">Patients Review</h5>
                        <div className="row">
                            <div className="col-xl-3 col-lg-5 col-md-5 col-12 mt-4 pt-2">
                                <div className="card p-4 border-0 shadow rounded">
                                    <div>
                                        <span className="text-primary h1 mb-0"><span className="fw-bold">4.9</span></span>
                                        <span className="h6 align-self-end ms-2">Avg. Ratings..</span>
                                    </div>

                                    <div className="mt-4">
                                        {
                                            progresses?.map((data, i)=> (
                                        <div key={i} className="progress-box my-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="title text-muted">{data.name}</h6>
                                                <div className="progress-value d-block text-muted h6">{data.value} Star</div></div>
                                            <div className="progress">
                                                <div className="progress-bar position-relative bg-primary" style={{width:`${(100/5)*data.value}%`}}>
                                                </div>
                                            </div>
                                        </div>
                                            ))
                                        }

                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-xl-9 col-lg-7 col-md-7 col-12 mt-4 pt-2">
                                <div className="card p-4 rounded shadow border-0">
                                    <div className="row">
                                       {reviews?.map((review, i)=> (
                                         <div key={i} className="col-xl-4 col-md-6 my-4">
                                         <ReviewCard />
                                        </div>
                                       ))}
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
        </>
    )
}