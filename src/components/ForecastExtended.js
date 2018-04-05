import React, { Component } from 'react'
import ForecastItem from './ForecastItem'
import PropTypes from 'prop-types'
import transformForecast from '../services/transformForecast'

const api_key = '01a56e0ee2eb0a460a195c66b6b31168'
const url = 'http://api.openweathermap.org/data/2.5/forecast'

class ForecastExtended extends Component {
  constructor() {
    super()
    this.state = { forecastData: null }
  }

  componentDidMount() {
		const { city } = this.props
    const api_weather = `${url}?q=${city}&appid=${api_key}`

    fetch(api_weather)
      .then(response => response.json())
      .then(data => {
        const forecastData = transformForecast(data)
        console.log('forecastData', forecastData)
        this.setState({ forecastData })
      })
      .catch(err => {
        console.error(`Hubo un error al hacer el fetch: ${err}`)
      })
  }
  

  renderForecastItemDays = () => {
    return 'render items!'
    // return days.map(day => <ForecastItem key={day} weekDay={day} hour={10} data={data} />)
  }

  renderProgress = () => {
    return 'render pronóstico extendido...'
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
