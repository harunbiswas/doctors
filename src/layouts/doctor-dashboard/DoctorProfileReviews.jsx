import { useState } from "react";
import Slider from "react-slick";
import logoImg from "../../assets/images/client/amazon.png";
import ReviewCard from "../../components/card/ReviewCard";

export default function DoctorProfileReviews() {
    const [items, setItems] = useState([1,1,1,1,1,1])
    const [reviews, setReviews] = useState([1,1,1,1,1])
    const [logos, setLogos] = useState([1,1,1,1,1,1])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
      };

    return(
        <>
        <div className="tab-pane fade show active" id="pills-review" role="tabpanel" aria-labelledby="review-tab">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8 mt-4 pt-2 text-center">
                                            <div className="client-review-slider">
                                                <Slider {...settings}>
                                                    {items?.map((item, i)=> (
                                                        <ReviewCard key={i} />
                                                    ))}
                                                
                                                </Slider>
                                                
                                            </div>
                                            {/* <!--end carousel--> */}
                                        </div>
                                        {/* <!--end col--> */}
                                    </div>
                                    {/* <!--end row--> */}

                                    <div className="row justify-content-center">
                                        {logos?.map((logo,i )=>(
                                            <div key={i} className="col-lg-2 col-md-2 col-6 text-center py-4">
                                            <img src={logoImg} className="avatar avatar-client" alt="" />
                                        </div>
                                        ))}
                                        
                                        
                                        
                                    </div>
                                    {/* <!--end row--> */}
                                </div>
                                {/* <!--end teb pane--> */}
        </>
    )
}