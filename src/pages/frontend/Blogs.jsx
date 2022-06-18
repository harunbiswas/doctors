import { useState } from "react";
import ItemShowButton from "../../components/basic/ItemShowButton";
import Blog from "../../components/blogs/Blog";
import CommonHero from "../../layouts/frontend/basic/CommonHero";
import Header from "../../layouts/headers/Header";

export default function Blogs() {
    const [blogs, setBlogs] = useState([1,11,1,1,1,1,1,1,1])

    return(
        <>
        <Header />
        <div className="blogs">
            <CommonHero />
            <section className="section">
            <div className="container">
                <div className="row">
                    
                    {
                        blogs?.map((blog, i)=> (
                            <div key={i} className="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                            <Blog />
                            </div>
                        ))
                    }
                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
            <ItemShowButton />
        </section>
        {/* <!--end section--> */}
        </div>
        </>
    )
}