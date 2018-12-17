import React, { Component } from 'react'
import Light from './Light'
import { Button } from 'reactstrap';
import './App.css';


class AddLight extends Component {
  constructor(props){
    super(props)
    this.state ={
      lightArray: [<Light/>]
    }
  }

  addLight(){
    let {lightArray} = this.state
      lightArray.push(<Light/>)
    this.setState({lightArray: lightArray})
  }

  removeLight(){
    let {lightArray} = this.state
    if (lightArray.length > 1){
      lightArray.pop()
    }
    this.setState({lightArray: lightArray})
  }


  render(){
    return(
      <div>
        <div className="Buttons">
          <button type="button" class="btn btn-success BothButtons" onClick={this.addLight.bind(this)}>Add Light</button>
          <button type="button" class="btn btn-danger BothButtons" onClick={this.removeLight.bind(this)}>Remove Light</button>
        </div>
        <div className="LightAddition">
          {this.state.lightArray}
        </div>
      </div>

    )
  }
}

export default AddLight
