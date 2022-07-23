import { useState } from "react";

 export default function Schedule() {
    const[buttons, setButtons] = useState([
        {
        name: "Metting"
    },
    {
        name: "Operations"
    },
    {
        name: "Lunch"
    },
    {
        name: "Conference"
    },
    {
        name: "Business Metting"
    },
])



    return(
        <>
        <h5 className="mb-0">Schedule Timing</h5>
                        
                        <div className="row">
                            <div className="col-xl-2 col-lg-4 col-12 mt-4">
                                <div id="external-events">
                                    <div className="card border-0 p-4 shadow rounded">
                                        <span className="h6">All Events</span>
                                    
                                    {buttons?.map((button, i)=>(
                                        <div key={i} className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event rounded">
                                            <div className="fc-event-main text-white">{button.name}</div>
                                        </div>
                                    ))}
                                    
                                        <div className="mt-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="drop-remove" />
                                                <label className="form-check-label" htmlFor="drop-remove">Remove after drop</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                            
                            <div className="col-xl-10 col-lg-8 col-12 mt-4">
                                <div id="calendar-container" className="card rounded border-0 shadow p-4">
                                    {/* <ScheduleCalender /> */}
                                </div>
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <ScheduleCalender /> */}
                        {/* <!--end row--> */}
        </>
    )
 }