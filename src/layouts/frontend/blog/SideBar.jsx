import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import blogImg from '../../../assets/images/blog/07.jpg'
 
 export default function SideBar() {
    return(
        <>
        <div className="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="card border-0 sidebar sticky-bar rounded shadow">
                            <div className="card-body">
                                {/* <!-- SEARCH --> */}
                                <div className="widget mb-4 pb-2">
                                    <h5 className="widget-title">Search</h5>
                                    <div id="search2" className="widget-search mt-4 mb-0">
                                        <form role="search" method="get" id="searchform" className="searchform">
                                            <div>
                                                <input type="text" className="border rounded" name="s" id="s" placeholder="Search Keywords..." />
                                                <input type="submit" id="searchsubmit" value="Search" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* <!-- SEARCH --> */}
    
                                {/* <!-- RECENT POST --> */}
                                <div className="widget mb-4 pb-2">
                                    <h5 className="widget-title">Recent Post</h5>
                                    <div className="mt-4">
                                        <div className="clearfix post-recent">
                                            <div className="post-recent-thumb float-start"> <a href="jvascript:void(0)"> <img alt="img" src={blogImg} className="img-fluid rounded" /></a></div>
                                            <div className="post-recent-content float-start"><a href="jvascript:void(0)">Consultant Business</a><span className="text-muted mt-2">15th June, 2019</span></div>
                                        </div>
                                        <div className="clearfix post-recent">
                                            <div className="post-recent-thumb float-start"> <a href="jvascript:void(0)"> <img alt="img" src={blogImg} className="img-fluid rounded" /></a></div>
                                            <div className="post-recent-content float-start"><a href="jvascript:void(0)">Look On The Glorious Balance</a> <span className="text-muted mt-2">15th June, 2019</span></div>
                                        </div>
                                        <div className="clearfix post-recent">
                                            <div className="post-recent-thumb float-start"> <a href="jvascript:void(0)"> <img alt="img" src={blogImg} className="img-fluid rounded" /></a></div>
                                            <div className="post-recent-content float-start"><a href="jvascript:void(0)">Research Financial.</a> <span className="text-muted mt-2">15th June, 2019</span></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- RECENT POST --> */}
    
                                {/* <!-- TAG CLOUDS --> */}
                                <div className="widget mb-4 pb-2">
                                    <h5 className="widget-title">Tags Cloud</h5>
                                    <div className="tagcloud mt-4">
                                        <a href="jvascript:void(0)" className="rounded">Business</a>
                                        <a href="jvascript:void(0)" className="rounded">Finance</a>
                                        <a href="jvascript:void(0)" className="rounded">Marketing</a>
                                        <a href="jvascript:void(0)" className="rounded">Fashion</a>
                                        <a href="jvascript:void(0)" className="rounded">Bride</a>
                                        <a href="jvascript:void(0)" className="rounded">Lifestyle</a>
                                        <a href="jvascript:void(0)" className="rounded">Travel</a>
                                        <a href="jvascript:void(0)" className="rounded">Beauty</a>
                                        <a href="jvascript:void(0)" className="rounded">Video</a>
                                        <a href="jvascript:void(0)" className="rounded">Audio</a>
                                    </div>
                                </div>
                                {/* <!-- TAG CLOUDS --> */}
                                
                                {/* <!-- SOCIAL --> */}
                                <div className="widget">
                                    <h5 className="widget-title">Follow us</h5>
                                    <ul className="list-unstyled social-icon mb-0 mt-4">
                                        <li className="list-inline-item mx-1"><a href="javascript:void(0)" className="rounded"><i data-feather="facebook" className="fea icon-sm fea-social">
                                            <FiFacebook />
                                            </i></a></li>
                                        <li className="list-inline-item mx-1"><a href="javascript:void(0)" className="rounded"><i data-feather="instagram" className="fea icon-sm fea-social">
                                            <FiInstagram />
                                            </i></a></li>
                                        <li className="list-inline-item mx-1"><a href="javascript:void(0)" className="rounded"><i data-feather="twitter" className="fea icon-sm fea-social">
                                            <FiTwitter />
                                            </i></a></li>
                                        <li className="list-inline-item mx-1"><a href="javascript:void(0)" className="rounded"><i data-feather="linkedin" className="fea icon-sm fea-social">
                                            <FiLinkedin />
                                            </i></a></li>
                                        
                                    </ul>
                                    {/* <!--end icon--> */}
                                </div>
                                {/* <!-- SOCIAL --> */}

                            </div>
                        </div>
                    </div>
        </>
    )
 }