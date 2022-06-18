import { BiHome } from 'react-icons/bi'
import img from '../../assets/images/svg/error.svg'

export default function Error() {
    
    return(
        <>
        <div class="back-to-home rounded d-none d-sm-block ">
            <a href="/" class="btn btn-icon btn-primary"><i data-feather="home" class="icons"><BiHome /></i></a>
        </div>

        {/* <!-- Hero Start --> */}
        
        <section class="bg-home d-flex bg-light align-items-center" >
            <div class="container ">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <img src={img} class="img-fluid" alt="" />
                        <h3 class="mb-4">Page Not Found</h3>
                        <p class="text-muted para-desc mx-auto">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        <a href="/" class="btn btn-primary mt-2">Go To Home</a>
                    </div>
                    {/* \<!--end col--> */}
                </div>
                {/* \<!--end row--> */}
            </div>
            {/* \<!--end container--> */}
        </section>
        
        {/* \<!--end section--> */}
        {/* <!-- Hero End --> */}
        </>
    )
}