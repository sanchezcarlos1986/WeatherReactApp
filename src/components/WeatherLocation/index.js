import React, { Component } from 'react'
import Location from './Location'
import convert from 'convert-units'
import PropTypes from 'prop-types'
import logo from '../../logo.svg'
import WeatherData from './WeatherData'

const api_key = '01a56e0ee2eb0a460a195c66b6b31168'
const url = 'http://api.openweathermap.org/data/2.5/weather'

class WeatherLocation extends Component {
   constructor({city}) {
		super()	
		
      this.state = {
        city,
        country: '',
        temperature: 0,
        weatherState: '',
        humidity: 0,
        wind: '0m/s'
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
               temperature: Number(convert(data.main.temp).from('K').to('C').toFixed()),
               weatherState: data.weather[0].id,
               humidity: data.main.humidity,
               wind: `${data.wind.speed}m/s`
            })
         })
         .catch(err => {
            console.error(`Hubo un error al hacer el fetch: ${err}`)
         })
   }

   render() {
    const data = this.state
    const { onWeatherLocationClick } = this.props

      return(
			<div className={`WeatherLocation WeatherLocation-${data.weatherState}`} onClick={onWeatherLocationClick}>
				<Location city={data.city} country={data.country} />
				{data.country === '' 
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