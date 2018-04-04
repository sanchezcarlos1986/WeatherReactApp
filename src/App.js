import React, { Component } from 'react'
import LocationList from './components/LocationList'
import ForecastExtended from './components/ForecastExtended'

class App extends Component {
  constructor() {
    super()
    this.state = { city: null }
  }

  handleSelectedLocation = city => {
    this.setState({city})
  }
  
  render() {
    const { city } = this.state
    return (
      <div className="App">
        <h1>World Weather</h1>
        <LocationList onSelectedLocation={this.handleSelectedLocation} />
        <div className="detail">
          { city && <ForecastExtended city={city} /> }
        </div>
      </div>
    );
  }
}

export default App
