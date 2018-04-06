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

	componentWillReceiveProps(nextProps) {
		if(nextProps.city !== this.props.city) {
			this.setState({ forecastData: null })
			this.updateCity(nextProps.city)
		}
	}

  componentDidMount() {
		const { city } = this.props
		this.updateCity(city)
	}

	updateCity = city => {
		const api_weather = `${url}?q=${city}&appid=${api_key}`

		fetch(api_weather)
			.then(response => response.json())
			.then(data => {
				const forecastData = transformForecast(data)
				this.setState({ forecastData })
			})
			.catch(err => {
				console.error(`Hubo un error al hacer el fetch: ${err}`)
			})
	}


	renderForecastItemDays = forecastData => {
		return forecastData.map((forecast, index) =>
			<ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data} />
		)
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
            this.renderForecastItemDays(forecastData) :
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
