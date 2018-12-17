import React, { Component } from 'react';
import './App.css';
import Light from './Light'
import Header from './Header'
import AddLight from './AddLight'

class App extends Component {



  render() {
    return (
      <div className="App">
        <Header/>
        <div className="LightFlex">
          <AddLight/>
        </div>
      </div>
    );
  }
}

export default App;
