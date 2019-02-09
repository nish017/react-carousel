import React from 'react'

// functional component
const Slide = (props) => {

    const title = props.data.tags.split(',')[0]

    // Slide JSX renders individual slide of carousel, props- active and index helps achieve sliding functionality
    return (        
        <div className={`carousel-slide col-12 col-md-4 col-lg-2 ${props.active == props.index ? 'active' : ''}`}
        style={{'transform': `translateX(-${props.active*100}%) ${props.active == props.index ? 'scale(1.1)' : ''}`}}>
            <div>
                <img src={props.data.webformatURL} />
            </div>
            <h4 className="mt-2">{title}</h4>
        </div>
    )
}

export default Slide