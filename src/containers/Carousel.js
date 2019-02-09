import React, { Component } from 'react'
import Slide from '../components/Slide'
import Arrow from '../../public/img/arrow.svg'

//class based react component
class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0
        }
    }

    // fn to move to prev slide
    showPrevSlide = () => {
        console.log('prev clicked!', this.state.active);
        this.setState({
            active: this.state.active - 1
        })
    }

    // fn to move to next slide
    showNextSlide = () => {
        console.log('next clicked!', this.state.active);
        this.setState({
            active: this.state.active + 1
        })
    }

    render() {
        return (
            <div>
                <div className="carousel">
                    <div className="carousel-inner">
                        {this.props.data && this.props.data.map((slideData, index) => <Slide 
                                                                key={slideData.id} 
                                                                data={slideData} 
                                                                index={index}
                                                                active={this.state.active} />)}
                    </div> 
                    <img className={`arrow-prev ${this.state.active <= 0 ? 'disabled-arrow' : ''}`} 
                        src={Arrow}
                        onClick={this.state.active <= 0 ? null : this.showPrevSlide} />  
                    <img className={`arrow-next ${this.state.active >= (this.props.data &&this.props.data.length - 1) ? 
                        'disabled-arrow' : ''}`} 
                        src={Arrow}
                        onClick={this.state.active >= (this.props.data && this.props.data.length - 1) ? null : this.showNextSlide} />                 
                </div>
                <div className="carousel-footer d-none d-md-block">
                    <div className="row justify-content-center footer">
                        <button disabled={this.state.active == 0 ? 'disabled' : ''} 
                                className="btn prev" onClick={this.showPrevSlide}>Prev</button>
                        <button disabled={this.state.active == (this.props.data && this.props.data.length - 1) ? 'disabled' : ''} 
                                className="btn next" onClick={this.showNextSlide}>Next</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Carousel