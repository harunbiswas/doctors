import { useEffect, useRef, useState } from 'react'
import bg1 from '../../assets/images/bg/01.jpg'
import bg2 from '../../assets/images/bg/02.jpg'
import bg3 from '../../assets/images/bg/03.jpg'
import bg4 from '../../assets/images/bg/04.jpg'
import iconImg from '../../assets/images/logo-icon.png'


export default function Hero(){
    const [bgs, setBgs] = useState([bg1, bg2, bg3, bg4]);
    const [bgCount, setBgCount] = useState(0)


const bg= useRef()


useEffect(()=>{
    const bgChange= setInterval(()=>{
        if(bgCount<3){
         setBgCount(bgCount + 1)
        }else{
         setBgCount(0)
        }   
     }, 7000)    
    bg.current.style.backgroundImage= `url('${bgs[bgCount]}')`;
    return ()=> clearInterval(bgChange);
},[bgCount])

    return(
        <>
         {/* <!-- Start Hero --> */}
         <section ref={bg} className="bg-half-170 d-table w-100" id="home">
         <div className="bg-overlay bg-overlay-dark"></div>
         <div className="container">
             <div className="row justify-content-center mt-5">
                 <div className="col-xl-10">
                     <div className="heading-title text-center">
                         <img src={iconImg} height="50" alt="" />
                         <h4 className="heading fw-bold text-white title-dark mt-3 mb-4">Booking Your Appointments</h4>
                         <p className="para-desc mx-auto text-white-50 mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                         
                         <div className="mt-4 pt-2">
                             <form className="rounded text-start shadow p-4 bg-white-50">
                                 <div className="row align-items-center">
                                     <div className="col-md">
                                         <div className="input-group bg-white border rounded" style={{opacity: 0.7}}>
                                             <span className="input-group-text bg-white border-0"><i className="ri-map-pin-line text-primary h5 fw-normal mb-0"></i></span>
                                             <input name="name" id="location" type="text" className="form-control border-0" placeholder="Location:" />
                                         </div>
                                     </div>
                                     {/* <!--end col--> */}

                                     <div className="col-md mt-4 mt-sm-0">
                                         <div className="input-group bg-white border rounded" style={{opacity: 0.7}}>
                                             <span className="input-group-text bg-white border-0"><i className="ri-user-2-line text-primary h5 fw-normal mb-0"></i></span>
                                             <input name="name" id="name" type="text" className="form-control border-0" placeholder="Doctor Name:" />
                                         </div>
                                     </div>
                                     {/* <!--end col--> */}
                                     
                                     <div className="col-md-auto mt-4 mt-sm-0">
                                         <div className="d-grid d-md-block">
                                             <button type="submit" className="btn btn-primary">Search</button>
                                         </div>
                                     </div>
                                     {/* <!--end col--> */}
                                 </div>
                                 {/* <!--end row--> */}
                             </form>
                             {/* <!--end form--> */}
                         </div>
                     </div>
                 </div>
                 {/* <!--end col--> */}
             </div>
             {/* <!--end row--> */}
         </div>
         {/* <!--end container--> */}
     </section>
     {/* <!--end section--> */}
     {/* <!-- End Hero --> */}
     </>
    )
}