export default function TitleText({data}){
    return(
        <>
            <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">{data.title}</h4>
                            <p className="text-muted para-desc mx-auto mb-0">{data.text}</p>
                        </div>
                    </div>
                    {/* <!--end col--> */}
                </div>
                {/* <!--end row--> */}
        </>
    )
}