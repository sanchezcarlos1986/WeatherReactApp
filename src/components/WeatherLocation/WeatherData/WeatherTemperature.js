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
	switch (weatherState) {
		case CLOUDY:
				return "cloudy";
		case SUN:
				return "day-sunny";
		case RAIN:
				return "rain";
		case SNOW:
				return "snow";
		case THUNDER:
				return "day-thunderstorm";
		case DRIZZLE:
				return "day-showers";
		default:
				return "day-sunny";
	}
};

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
	weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature
