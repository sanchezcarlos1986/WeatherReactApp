import React, { Component } from 'react'
import LocationList from './components/LocationList'

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation: ${city}`)
  }
  render() {
    return (
      <div className="App">
        <h1>World Weather</h1>
        <LocationList onSelectedLocation={this.handleSelectedLocation} />
      </div>
    );
  }
}

export default App
