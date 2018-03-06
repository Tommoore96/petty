import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { compose, withProps } from "recompose";
import { Provider } from 'react-redux';
import store from './store';
import logo from './petty.png';
import './App.css';
import Map from './components/map';
import SimpleForm from './containers/places'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      reg: '',
      mpg: '',
      start: '',
      end: '',
      distance: '',
      cost: ''
    }

  }

  async fetchMpg() {
    fetch(`http://localhost:3003/${this.state.reg.replace(/\s/g, '')}`)
    .then(response => this.setState({
      mpg: response.mpg
    }))
  }

  handleRegChange = (e) => this.setState({
    reg: e.target.value
  })

  handleStartChange = (e) => {
    console.log(e)
    this.setState({
      start: e.target.value
    }, ()=>{
    console.log('this.state.start', this.state.start)
    })
  }

  handleEndChange = (e) => this.setState({
    end: e.target.value
  }, ()=>{
    console.log('this.state.end ', this.state.end)
  })


  displayPrice = async () => {
    console.log('this state start ',this.state.start);
    const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.start}&destination=${this.state.end}&key=AIzaSyBBXRJN49A0k34Lb_gUT58Mzy1F_kiYXsw`);
    const json = await response.json();
    console.log('JSON IS ', json)
    // const distance = json.routes.legs.distance;
    // const mpg = 42;
    // const gallons = distance / mpg;
    // const litresUsed = gallons / 4.5609;
    // const price = litresUsed * 1.2;
    // return price;
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
            <button onClick={()=>{this.fetchMpg()}}>Search</button>
            <p className="App-intro">
              Type in your
            </p>
            <SimpleForm
              onSelect={this.handleStartChange}
              value={this.state.start}
              placeholder="start"/>
            <p> and </p>
            <SimpleForm
              onSubmit={this.handleEndChange}
              value={this.state.end}
              placeholder="end"/>
            <p> point </p>
              <button onClick={()=>{this.displayPrice()}}>Go</button>

            <p id="result">Your jouney will cost...</p>
          </div>
          <Map className="Map" style={{align: `right`}}/>
        </div>
      </Provider>
    );
  }
}

export default App;
