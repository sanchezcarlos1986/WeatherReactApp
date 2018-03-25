import React from 'react'
import WeatherIcons from 'react-weathericons'
import {
   CLOUD,
   CLOUDY,
   SUN,
   RAIN,
   SNOW,
   WINDY
   } from '../../../constants/weathers'
import PropTypes from 'prop-types'

const stateToIconName = weatherState => {
   switch (weatherState) {
      case CLOUD:
         return 'cloud'
      case CLOUDY:
         return 'cloudy'
      case SUN:
         return 'day-sunny'
      case RAIN:
         return 'rain'
      case SNOW:
         return 'snow'
      case WINDY:
         return 'windy'
      default:
         return 'day-sunny'
   }
}

const getWeatherIcon = weatherState => (
      <WeatherIcons className='WeatherTemperature__icon' name={stateToIconName(weatherState)} size='2x' />
)

const WeatherTemperature = ({ temperature, weatherState }) => (
      <div className='WeatherTemperature'>
      { getWeatherIcon(weatherState) }
      <span className='WeatherTemperature__temperature'>{`${temperature} C°`}</span>
   </div>
)

WeatherTemperature.propTypes = {
   temperature: PropTypes.number.isRequired,
   weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature