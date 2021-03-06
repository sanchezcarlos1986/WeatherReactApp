import React, { Component } from 'react'
import Location from './Location'
import PropTypes from 'prop-types'
import logo from '../../logo.svg'
import WeatherData from './WeatherData'
import transformWeather from '../../services/transformWeather'

const api_key = '01a56e0ee2eb0a460a195c66b6b31168'
const url = 'http://api.openweathermap.org/data/2.5/weather'

class WeatherLocation extends Component {
   constructor({city}) {
		super()

      this.state = {
        city,
        country: '',
        data: {
          temperature: 0,
          weatherState: '',
          humidity: 0,
          wind: '0m/s'
        }
      }
   }

   componentWillMount() {
		const { city } = this.state
		const api_weather = `${url}?q=${city}&appid=${api_key}`

      fetch(api_weather)
         .then(response => response.json())
         .then(data => {
            this.setState({
               country: data.sys.country,
               data: transformWeather(data)
            })
         })
         .catch(err => {
            console.error(`Hubo un error al hacer el fetch: ${err}`)
         })
   }

   render() {
    const { city, country, data } = this.state
    const { onWeatherLocationClick } = this.props

      return(
			<div className={`WeatherLocation WeatherLocation-${data.weatherState}`} onClick={onWeatherLocationClick}>
				<Location city={city} country={country} />
				{country === ''
					? <img className='WeatherLocation__loader' src={logo} alt='WeatherLocation__loader' />
					: <WeatherData data={data} />
				}
			</div>
      )
   }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation
