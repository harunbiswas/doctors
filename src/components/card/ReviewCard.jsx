import { useState } from "react";
import img from '../../assets/images/client/01.jpg';

 export default function ReviewCard() {
    const [reviews, setReviews] = useState([1,1,1,1,1])
    return(
        <>
        <div  className="tiny-slide text-center">
            
            <img src={img} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3" alt="" />
               <ul className="list-unstyled mb-0">
               {reviews?.map((review, i)=> (
                        <li key={i} className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                    ))}
            </ul>
            <h6 className="text-primary">- Thomas Israel <small className="text-muted">C.E.O</small></h6>

            <p className="text-muted h6 fw-normal fst-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
           </div>
        </>
    )
 }