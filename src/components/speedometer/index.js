import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  speedIncr=()=>{
    const {count} = this.state

    if(count<200){
        this.setState((prevState)=>({count:prevState.count+10}))
    }
    
}

speedDecr=()=>{
    const {count} = this.state
    if(count>0){
        
        this.setState((prevState)=>({count:prevState.count-10}))
    }
    
}

  render() {
    const {count} = this.state 

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer" className="image"
        />
        <h1 className="description">Speed is {count} mph</h1>
        <p className="caption">Min limit is 0 mph, Max limit is 200 mph</p>
        <div>
          <button onClick={this.speedIncr} className="btn1">
            Accelerate
          </button>
          <button onClick={this.speedDecr} className="btn2">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
