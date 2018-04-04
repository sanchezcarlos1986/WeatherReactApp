import React from 'react'
import WeatherIcons from 'react-weathericons'
import {
   CLOUDY,
   SUN,
   RAIN,
   SNOW,
   THUNDER,
   DRIZZLE
   } from '../../../constants/weathers'
import PropTypes from 'prop-types'

const stateToIconName = weatherState => {
	if (weatherState < 300) {
		return THUNDER
	} else if(weatherState < 400) {
		return DRIZZLE
	} else if(weatherState < 600) {
		return RAIN
	} else if(weatherState < 700) {
		return SNOW
	} else if(weatherState === 800) {
		return SUN
	} else if(weatherState < 800) {
		return CLOUDY
	} else {
            return SUN
      }
}

const getWeatherIcon = weatherState => (
      <WeatherIcons className='WeatherTemperature__icon' name={stateToIconName(weatherState)} />
)

const WeatherTemperature = ({ temperature, weatherState }) => (
      <div className='WeatherTemperature'>
      { getWeatherIcon(weatherState) }
      <span className='WeatherTemperature__temperature'>{`${temperature} C°`}</span>
   </div>
)

WeatherTemperature.propTypes = {
   temperature: PropTypes.number.isRequired,
   weatherState: PropTypes.number.isRequired
}

export default WeatherTemperature