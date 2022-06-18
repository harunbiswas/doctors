import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import { BiMessage } from 'react-icons/bi'
import img from '../../assets/images/blog/01.jpg'

export default function Blog() {
    return(
        <>
        
                        <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                            <img src={img} className="img-fluid" alt="" />
                            <div className="card-body p-4">
                                <ul className="list-unstyled mb-2">
                                    <li className="list-inline-item text-muted small me-3"><i className="uil uil-calendar-alt text-dark h6 me-1"></i>20th November, 2020</li>
                                    <li className="list-inline-item text-muted small"><i className="uil uil-clock text-dark h6 me-1"></i>5 min read</li>
                                </ul>
                                <a href="blog-detail.html" className="text-dark title h5">Easily connect to doctor and make a treatment</a>
                                <div className="post-meta d-flex justify-content-between mt-3">
                                    <ul className="list-unstyled mb-0">
                                        <li className="list-inline-item me-2 mb-0"><a href="#" className="text-muted like"><i className="mdi mdi-heart-outline me-1">{<AiOutlineHeart />|| <AiTwotoneHeart />}</i>33</a></li>
                                        <li className="list-inline-item"><a href="#" className="text-muted comments"><i className="mdi mdi-comment-outline me-1">
                                            <BiMessage />
                                            </i>08</a></li>
                                    </ul>
                                    <a href="/blog-detail/1" className="link">Read More <i className="mdi mdi-chevron-right align-middle"></i></a>
                                </div>
                            </div>
                        </div>
                    
        </>
    )
}