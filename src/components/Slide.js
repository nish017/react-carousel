import React from 'react'

// functional component
const Slide = (props) => {
    const title = props.data.tags.split(',')[0]
    return (        
        <div className="carousel-slide">
            <div>
                <img src={props.data.previewURL} />
            </div>
            <h4>{title}</h4>
        </div>
    )
}

export default Slide