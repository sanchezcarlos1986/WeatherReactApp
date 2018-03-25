import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import {
   CLOUD,
   CLOUDY,
   SUN,
   RAIN,
   SNOW,
   WINDY
} from '../../constants/weathers'

class WeatherLocation extends Component {
   constructor() {
      super()

      this.state = {
         city: 'Buenos Aires',
         temperature: 27,
         weatherState: SUN,
         humidity: 10,
         wind: '10m/s'
      }
   }

   handleUpdateClick = () => {
      this.setState({
         temperature: 10,
         weatherState: WINDY,
         humidity: 60,
         wind: '50m/s'
      })
   }

   render() {
      const data = this.state
      return(
         <div>
            <Location city={data.city} />
            <WeatherData data={data} />
            <button onClick={this.handleUpdateClick}>Update</button>
         </div>
      )
   }
}

export default WeatherLocation