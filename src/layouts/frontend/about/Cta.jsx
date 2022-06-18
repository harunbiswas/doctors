import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img from '../../../assets/images/bg/05.jpg';
import ctaImg1 from '../../../assets/images/client/01.jpg';

export default function Cta() {
    const bg= useRef()

    const settings = {
        dots: true,
        arrow: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
      };

useEffect(()=> {
    bg.current.style.backgroundImage= `url('${img}')`
    bg.current.style.backgroundPosition = "center left";
},[])

const [tosti, setTosti] = useState([1,1,1,1,1])

    return(
        <>
        {/* <!-- Cta Start --> */}
        <div className="container-fluid mt-100 mt-60">
                {/* <div className="py-5 rounded" style={{background: url('../assets/images/bg/05.jpg')}}> */}
                <div ref={bg} className="py-5 rounded">
                    <div className="container">
                        <div className="row">
                            <div className="offset-lg-8 offset-md-6 col-lg-4 col-md-6">
                                <div className="cta-review bg-primary shadow-md mb-lg-4 rounded p-4 py-5">
                                    <div className="client-review-slider">
                                        <Slider {...settings}>
                                            {
                                                tosti?.map((data, i)=> (
                                                    <div key={i} className="tiny-slide">
                                                        <p className="text-white-50 fst-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                                        
                                                        <div className="d-inline-flex align-items-center">
                                                            <img src={ctaImg1} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt="" />
                                                            <h6 className="text-light title-dark fw-normal ms-3">Thomas Israel <small className="text-white-50 d-block">C.E.O</small></h6>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        
                                        
                                        </Slider>
                                        
                                        
                                    </div>
                                    {/* <!--end carousel--> */}
                                </div>
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                    </div>
                    {/* <!--end container--> */}
                </div>
            </div>
            {/* <!--end container--> */}
        </>
    )
}