import React, { Component } from 'react'
import WeatherLocation from './WeatherLocation/'

class LocationList extends Component {
  constructor() {
    super()

    this.state = {
      cities: []
    }
  }
  componentWillMount() {
    const cities = ['Buenos Aires,ar', 'London,uk']

    fetch('https://geoip-db.com/json/')
      .then(response => response.json())
      .then(data => {
        let currentLocation = `${data.city},${data.country_code.toLowerCase()}`
        cities.unshift(currentLocation)
        this.setState({ cities })
    })
  }

  render(){
    const { cities } = this.state

    return(
      <div className='LocationList'>
        {
          cities.map((city, index) => (
            <WeatherLocation key={index} city={city} />
          ))
        }
      </div>
    )
  }
}

export default LocationList