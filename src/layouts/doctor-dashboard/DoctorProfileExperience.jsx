import { useState } from "react";
import Slider from "react-slick";

export default function DoctorProfileExperience() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

      };

      const [items, setItem] = useState([1,1,1,1,1,1,1,1,1,])
    return(
        <>
        <div className="tab-pane fade show active" id="pills-experience" role="tabpanel" aria-labelledby="experience-tab">
                                    <h5 className="mb-1">Experience:</h5>

                                    <p className="text-muted mt-4">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                                
                                    <h6>Professional Experience:</h6>

                                    <div className="row">
                                        <div className="col-12 mt-4">
                                            <div className="col-md-12">
                                                <div className="slider-range-four tiny-timeline">
                                                    <Slider {...settings}>
                                                    {
                                                        items?.map((item,i)=> (
                                                            <div key={i} className="tiny-slide text-center">
                                                        <div className="card border-0 p-4 item-box mb-2 shadow rounded">
                                                            <p className="text-muted mb-0">2010 - 2014</p>
                                                            <h6 className="mt-1">Master Of Science</h6>
                                                            <p className="text-muted mb-0">X.Y.Z Hospital (NZ)</p>
                                                        </div>
                                                    </div>
                                                        ))
                                                    }
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                    </div>
                                    {/* <!--end row--> */}
                                </div>
                                {/* <!--end teb pane--> */}
        </>
    )
}