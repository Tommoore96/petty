import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { compose, withProps } from "recompose";
import { Provider } from 'react-redux';
import store from './store';
import logo from './petty.png';
import './App.css';
import Map from './components/map'


class App extends React.Component {
  state = {
    reg: '',
    start: '',
    finish: ''
  }

  constructor(props) {
    super(props)

  }

handleRegChange = (e) => this.setState({
  reg: e.target.value
})

handleStartChange = (e) => this.setState({
  start: e.target.value
})

handleEndChange = (e) => this.setState({
  end: e.target.value
})

displayPrice = () => {
  const distance = 123;
  const mpg = 42;
  const gallons = distance / mpg;
  const litresUsed = gallons / 4.5609;
  const price = litresUsed * 1.2;
  return price;
}

  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Petty</h1>
            <p className="App-intro">
              Insert your number plate
            </p>
            <input type="text"
            onChange={this.handleRegChange}
            value={this.state.reg}
            placeholder="REG"/>
            <button onClick={this.fetchMpg}>Search</button>
            <p className="App-intro">
              Type in your <input type="text"
              onChange={this.handleStartChange}
              value={this.state.start}
              placeholder="start"/> and 
              <input type="text"
              onChange={this.handleEndChange}
              value={this.state.end}
              placeholder="end"/> point
              <button onClick={this.diplayPrice}>Go</button>
            </p>
          </div>
          <Map />
        </div>
      </Provider>
    );
  }
}

export default App;
