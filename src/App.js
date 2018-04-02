import React, { Component } from 'react'
import LocationList from './components/LocationList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>World Weather</h1>
        <LocationList />
      </div>
    );
  }
}

export default App
