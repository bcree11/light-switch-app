import React, { Component } from 'react'
import './App.css';


class Light extends Component {
  constructor(props){
    super(props)
    this.state = {
      light: "Off",
      switchImg: "https://i.imgur.com/H98NYyG.png",
      bulbImg: "https://i.imgur.com/HvY3DPs.png"
    }
  }

  LightSwitch(){
    let { light, switchImg, bulbImg } = this.state
    light = light === "Off" ? "On" : "Off"
    switchImg = light === "Off" ? "https://i.imgur.com/H98NYyG.png" : "https://i.imgur.com/UoQGmr9.png"
    bulbImg = light === "Off" ? "https://i.imgur.com/HvY3DPs.png" : "https://i.imgur.com/9tvzReN.png"
    this.setState({light: light, switchImg: switchImg, bulbImg: bulbImg})
  }



  render(){
      let switchBackImg = {
        backgroundImage: `url(${this.state.switchImg})`
      }
      let bulbBackImg = {
        backgroundImage: `url(${this.state.bulbImg})`
      }
    return(
      <div className="LightApp">
        <div className="Bulb" style={bulbBackImg}>
        </div>
        <div style={switchBackImg} className="LightBox" onClick={this.LightSwitch.bind(this)}>
        </div>
      </div>
    )
  }
}

export default Light


//
// class Light extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       switch: "Off"
//     }
//   }
//
//   LightSwitch(){
//     let { light } = this.state
//     light = (light === "Off" ? "On" : "Off")
//     this.setState({light: light})
//     console.log(light);
//   }
//
//
//   render(){
//     return(
//       <div className="LightBox" onClick={this.LightSwitch.bind(this)}>
//         <h3>{this.state.light}</h3>
//       </div>
//     )
//   }
// }
