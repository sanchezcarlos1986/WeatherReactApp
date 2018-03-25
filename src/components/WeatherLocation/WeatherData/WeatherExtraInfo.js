import React from 'react'
import PropTypes from 'prop-types'

const WeatherExtraInfo = ({ humidity, wind }) => (
   <div className='WeatherExtraInfo'>
      <div className='WeatherExtraInfo__humidity'>
         <strong>Humidity: </strong>{`${humidity} %`}
      </div>
      <div className='WeatherExtraInfo__wind'>
         <strong>Wind: </strong>{`${wind}`}
      </div>
   </div>
)

WeatherExtraInfo.propTypes = {
   humidity: PropTypes.number.isRequired,
   wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo