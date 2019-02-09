import React, { Component } from 'react'
import Slide from '../components/Slide'

//class based react component
class Carousel extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="carousel">
                    <div className="carousel-inner">
                        {this.props.data.map((slideData) => <Slide key={slideData.id} data={slideData} />)}
                    </div>
                </div>
                <div className="carousel-footer">
                    <div className="row justify-content-center footer">
                        <button className="btn prev">Prev</button>
                        <button className="btn next">Next</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Carousel