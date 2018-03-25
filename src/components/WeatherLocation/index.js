import React, { Component } from 'react'
import Location from './Location'
import convert from 'convert-units'
import WeatherData from './WeatherData'
import {
   CLOUD,
   CLOUDY,
   SUN,
   RAIN,
   SNOW,
   WINDY
} from '../../constants/weathers'

const location = 'Buenos Aires,ar'
const api_key = '01a56e0ee2eb0a460a195c66b6b31168'
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`

class WeatherLocation extends Component {
   constructor() {
      super()

      this.state = {
         city: 'Ciudad',
         country: 'País',
         temperature: 27,
         weatherState: SUN,
         humidity: 10,
         wind: '10m/s'
      }
   }

   handleUpdateClick = () => {
      fetch(api_weather)
         .then(response => {
            return response.json()
         })
         .then(data => {
            console.log(data)
            this.setState({
               city: data.name,
               country: data.sys.country,
               temperature: Number(convert(data.main.temp).from('K').to('C').toFixed()),
               weatherState: SUN,
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

      return(
         <div className={`WeatherLocation WeatherLocation-${data.weatherState}`}>
            <Location city={data.city} country={data.country} />
            <WeatherData data={data} />
            <button onClick={this.handleUpdateClick}>Update</button>
         </div>
      )
   }
}

export default WeatherLocation