import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation/'

class LocationList extends Component {
  constructor() {
    super()

    this.state = {
      cities: []
    }
  }
  componentWillMount() {
    const { cities } = this.props

    fetch('https://geoip-db.com/json/')
      .then(response => response.json())
      .then(data => {
        let currentLocation = `${data.city},${data.country_code.toLowerCase()}`
        cities.unshift(currentLocation)
        this.setState({ cities })
    })
  }

  handleWeatherLocationClick = city => {
    const { onSelectedLocation } = this.props
    onSelectedLocation(city)
  }

  render(){
    const { cities } = this.state

    return(
      <div className='LocationList'>
        {
          cities.map(city => (
            <WeatherLocation key={city} city={city} onWeatherLocationClick={() => this.handleWeatherLocationClick(city)} />
          ))
        }
      </div>
    )
  }
}

LocationList.propTypes = {
  onSelectedLocation: PropTypes.func
}

export default LocationList
