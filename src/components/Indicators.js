import React from 'react'

// functional component
const Indicator = (props) => {
 
    return (      
        <div className={`indicator ${(props.active >= props.index*props.total && 
            props.active < (props.index+1)*props.total) ? 'selected' : ''}`} 
            onClick={() => {props.slideToView(props.index, props.total)}}>
        </div>
    )
}

export default Indicator