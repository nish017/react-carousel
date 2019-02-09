import React, { Component } from 'react'

//class based react component
class Carousel extends Component {

    render() {
        return (
            <div>
                <div className="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-slide">
                            <div>
                                <img src="https://cdn.pixabay.com/user/2018/01/12/08-06-25-409_250x250.jpg" />
                            </div>
                            <h4>Image Title</h4>
                        </div>
                        <div className="carousel-slide">
                            <div>
                                <img src="https://cdn.pixabay.com/user/2018/01/12/08-06-25-409_250x250.jpg" />
                            </div>
                            <h4>Image Title</h4>
                        </div>  
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