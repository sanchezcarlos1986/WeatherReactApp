import React, { Component } from 'react'
import ForecastItem from './ForecastItem'
import PropTypes from 'prop-types'

const days = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
]

const data = {
  temperature: 10,
  weatherState: 400,
  humidity: 40,
  wind: '40/mk/h'
}

class ForecastExtended extends Component {
  renderForecastItemDays = () => {
    return days.map(day => <ForecastItem key={day} weekDay={day} hour={10} data={data} />)
  }

  render() {
    const { city } = this.props
    return (
      <div className="ForecastExtended">
        <h4>{`ForecastExtended: ${city}`}</h4>
        {this.renderForecastItemDays()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForecastExtended
