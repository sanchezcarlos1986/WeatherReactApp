import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'
import PropTypes from 'prop-types'

const WeatherData = ({ data }) => {
   const { temperature, weatherState, humidity, wind } = data

   return(
      <div className='WeatherData'>
         <WeatherTemperature temperature={temperature} weatherState={weatherState} />
         <WeatherExtraInfo humidity={humidity} wind={wind} />
      </div>
   )
}

WeatherData.propTypes = {
   data: PropTypes.shape({
      temperature: PropTypes.number.isRequired,
      weatherState: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      wind: PropTypes.string.isRequired
   })
}

export default WeatherData