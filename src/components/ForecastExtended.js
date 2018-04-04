import React, { Component } from 'react'
import ForecastItem from './ForecastItem'
import PropTypes from 'prop-types'

/*
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
*/

const api_key = '01a56e0ee2eb0a460a195c66b6b31168'
const url = 'http://api.openweathermap.org/data/2.5/forecast'

class ForecastExtended extends Component {
  constructor() {
    super()
    this.state = { forecastData: null }
  }

  renderForecastItemDays = () => {
    return 'render items!'
    // return days.map(day => <ForecastItem key={day} weekDay={day} hour={10} data={data} />)
  }

  renderProgress = () => {
    return 'render pronóstico extendido...'
  }

  componentDidMount() {
		const { city } = this.props
    const api_weather = `${url}?q=${city}&cnt=5&appid=${api_key}`

      fetch(api_weather)
         .then(response => response.json())
         .then(data => {
            console.log('data forecast extended:::', data)
            this.setState({
              forecastData: {
                temperature: 10,
                weatherState: 400,
                humidity: 40,
                wind: '40/mk/h'
              }
            })
         })
         .catch(err => {
            console.error(`Hubo un error al hacer el fetch: ${err}`)
         })
   }

  render() {
    const { city } = this.props
    const { forecastData } = this.state
    return (
      <div className="ForecastExtended">
        <h4>{`ForecastExtended: ${city}`}</h4>
        {
          forecastData ? 
            this.renderForecastItemDays() :
            this.renderProgress()
        }
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForecastExtended
