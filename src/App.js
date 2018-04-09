import React, { Component } from 'react'
import LocationListContainer from './containers/LocationListContainer'
import ForecastExtended from './components/ForecastExtended'

const cities = ['Buenos Aires,ar', 'London,uk', 'Madrid,es', 'Bogota,co']

class App extends Component {
  constructor() {
    super()
		this.state = { city: null }
  }

  render() {
    const { city } = this.state
    return (
      <div className="App">
        <h1>World Weather</h1>
        <LocationListContainer cities={cities} />
        <div className="detail">
          { city && <ForecastExtended city={city} /> }
        </div>
      </div>
    );
  }
}

export default App
