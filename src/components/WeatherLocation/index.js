import React from 'react'
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

const data = {
   temperature: 27,
   weatherState: SUN,
   humidity: 10,
   wind: '10m/s'
}

const WeatherLocation = () => (
   <div>
      <Location city={'Buenos Aires!'} />
      <WeatherData data={data} />
   </div>
)

export default WeatherLocation