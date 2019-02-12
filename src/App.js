import React, { Component} from "react"
import Header from './components/Header'
import Carousel from './containers/Carousel'
import CarouselAPI from './api/CarouselAPI'

//Class based component
class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            carouselData : [],
            views : 1
        };
    }

    // Images are loaded while the component is created
    componentWillMount() {
        CarouselAPI.getPixabayData()
        .then((data) => {
            console.log(data.hits)
            return this.setState({
                carouselData: data.hits,
                views: data.hits.length / 5
            })
        })
    }


    render(){
        return(
          <div>
            <div className="container-fluid">
                <Header />
                <Carousel data={this.state.carouselData} views={this.state.views} />
            </div>
          </div>
        );
      }
}

export default App;
