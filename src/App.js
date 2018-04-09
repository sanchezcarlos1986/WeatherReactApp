import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LocationList from './components/LocationList'
import ForecastExtended from './components/ForecastExtended'
import { setCity } from './actions'

class App extends Component {
  constructor() {
    super()
		this.state = { city: null }
  }

  handleSelectedLocation = city => {
		this.props.setCity(city)
		this.setState({city})
  }

  render() {
		console.log('props de App', this.props)
    const { city } = this.state
    return (
      <div className="App">
        <h1>World Weather</h1>
        <LocationList onSelectedLocation={this.handleSelectedLocation} />
        <div className="detail">
          { city && <ForecastExtended city={city} /> }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  setCity: PropTypes.func.isRequired
}

const mapStateToProps = null

// mapDispatchToProps retorna un objeto que despacha una acción, en este caso se despacha la acción "SET_CITY" a través del action creator "setCity"
const mapDispatchToProps = dispatch => ({
	setCity: value => dispatch(setCity(value))
})

// Conectamos App a la store para que pueda recibir el estado y las acciones como props y lo exportamos
export default connect(mapStateToProps, mapDispatchToProps)(App)
