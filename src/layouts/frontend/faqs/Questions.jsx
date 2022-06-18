import { useRef, useState } from "react";

export default function Questions() {
    const [items, setItems] = useState([
        {
            id: 1,
            title: "How does it work ?",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            id: 2,
            title: "Do I need a designer to use Doctris ?",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            id: 3,
            title: " What do I need to do to start selling ?",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            id: 4,
            title: "How does it work ?",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            id: 5,
            title: "How does it work ?",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
    ])

    const [id, setId] = useState(1)


    const btns= useRef()
    const bodys = useRef();

    const collapsHandler =(e)=>{
        if(e===id) {
            setId(null)
        }else{
            setId(e)
        }
    }

    return(
        <>
        <div className="row justify-content-center">
                    <div className="col-lg-12 mt-4 pt-2">
                        <div className="accordion" id="accordionExample">
                            {items?.map((item, i)=> (
                            <div key={i} className="accordion-item border rounded">
                                <h2 className="accordion-header" id="headingOne">
                                    <button onClick={(e)=>collapsHandler(item.id)} ref={btns} className={`accordion-button border-0 bg-light ${id !== item.id && "collapsed"|| ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        {item.title}
                                    </button>
                                </h2>
                                <div ref={bodys} id="collapseOne" className={`accordion-collapse border-0 collapse  ${id === item.id && "show"|| ""} `}aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-muted">
                                       {item.text}
                                    </div>
                                </div>
                            </div>
                            ))}

                        </div>
                    </div>
                </div>
        </>
    )
}