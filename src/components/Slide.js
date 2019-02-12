import React from 'react'

// functional component
const Slide = (props) => {

    const title = props.data.tags.split(',')[0]

    // Slide JSX renders individual slide of carousel, props- active and index helps achieve sliding functionality
    return (        
        <div className={`carousel-slide col-12 col-md-4 col-lg-2 ${props.active == props.index ? 'active' : ''}`}
        style={{'transform': `translateX(-${props.active*100}%) ${props.active == props.index ? 'scaleY(1.2)' : ''}`}}>
            <span className="img-number d-none d-md-block">{props.index + 1}</span>
            <img className="img-fluid" src={props.data.webformatURL} />
            <h4 className="mt-2">{title}</h4>
        </div>
    )
}

export default Slide