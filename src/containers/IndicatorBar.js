import React from 'react'
import Indicator from '../components/Indicators'

class IndicatorBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slidesPerView: 1
        }
    }

    componentDidMount () {
        if (window.screen.width > 992) {
            this.setState({
                slidesPerView: 5
            })
        } else if(window.screen.width > 768 && window.screen.width < 992) {
            this.setState({
                slidesPerView: 3
            })
        }
    }

    render() {
        var indicators = [];
        if(this.props.data) {
            for (var i = 0; i < Math.ceil(this.props.data.length/this.state.slidesPerView); i++) {
                indicators.push(<Indicator key={i} total={this.state.slidesPerView} 
                index={i} active={this.props.active} slideToView={this.props.slideToView}/>);
            }
        }
        
        return (
            <div className="row justify-content-center footer">
                {indicators}
            </div>
        )
    }
}

export default IndicatorBar