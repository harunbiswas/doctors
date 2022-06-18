import { useState } from 'react';
import { AiFillStar, AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import img from '../../assets/images/doctors/01.jpg';

export default function DoctorCard() {
    const [starts, setStarts] = useState([1,1,1,1,1]);
    const [isFavorite, setIsFavorite] = useState(false)

    const favoriteHandler =() => {
        if(isFavorite){
            setIsFavorite(false)
        }else{
            setIsFavorite(true)
        }
    }

    return(
        <>
        <div className="card team border-0 rounded shadow overflow-hidden">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="team-person position-relative overflow-hidden">
                                        <img src={img} className="img-fluid" alt="" />
                                        <ul className="list-unstyled team-like">
                                            <li>
                                                <a onClick={favoriteHandler} href="#" className="btn btn-icon btn-pills btn-soft-danger">
                                                    <i data-feather="heart" className="icons">
                                                    {isFavorite && <AiTwotoneHeart />||<AiOutlineHeart /> }
                                                    </i>
                                                    </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <a href="#" className="title text-dark h5 d-block mb-0">Calvin Carlo</a>
                                        <small className="text-muted speciality">Eye Care</small>
                                        <div className="d-flex justify-content-between align-items-center mt-2">
                                            <ul className="list-unstyled mb-0">
                                               {starts?.map((start,i)=> (
                                                 <li key={i} className="list-inline-item"><i className="mdi mdi-star text-warning"><AiFillStar /></i></li>
                                               ))}
                                            </ul>
                                            <p className="text-muted mb-0">5 Star</p>
                                        </div>
                                        <ul className="list-unstyled mt-2 mb-0">
                                            <li className="d-flex">
                                                <i className="ri-map-pin-line text-primary align-middle"></i>
                                                <small className="text-muted ms-2">63, PG Shustoke, UK</small>
                                            </li>
                                            <li className="d-flex mt-2">
                                                <i className="ri-time-line text-primary align-middle"></i>
                                                <small className="text-muted ms-2">Mon: 2:00PM - 6:00PM</small>
                                            </li>
                                            <li className="d-flex mt-2">
                                                <i className="ri-money-dollar-circle-line text-primary align-middle"></i>
                                                <small className="text-muted ms-2">$ 75 USD / Visit</small>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled mt-2 mb-0">
                                            <li className="list-inline-item mx-1"><a href="#" className="btn btn-icon btn-pills btn-soft-primary"><i data-feather="facebook" className="icons"><FiFacebook /></i></a></li>
                                            <li className="mt-2 list-inline-item mx-1"><a href="#" className="btn btn-icon btn-pills btn-soft-primary"><i data-feather="linkedin" className="icons"><FiLinkedin /></i></a></li>
                                            <li className="mt-2 list-inline-item mx-1"><a href="#" className="btn btn-icon btn-pills btn-soft-primary"><i data-feather="github" className="icons"><FiInstagram /></i></a></li>
                                            <li className="mt-2 list-inline-item mx-1"><a href="#" className="btn btn-icon btn-pills btn-soft-primary"><i data-feather="twitter" className="icons"><FiTwitter /></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}