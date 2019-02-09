import React, { Component} from "react"
import "./App.css"
import Header from './components/Header'
import Carousel from './containers/Carousel'

class App extends Component{
  render(){
    return(
      <div>
        <div className="container-fluid">
            <Header />
            <Carousel />
        </div>
      </div>
    );
  }
}

export default App;
