import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCity } from '../actions'
import PropTypes from 'prop-types'
import LocationList from '../components/LocationList'

class LocationListContainer extends Component {
	handleSelectedLocation = city => {
		this.props.setCity(city)
	}

  render(){
    return(
      <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectedLocation} />
    )
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired
}

const mapStateToProps = null

// mapDispatchToProps retorna un objeto que despacha una acción, en este caso se despacha la acción "SET_CITY" a través del action creator "setCity"
const mapDispatchToProps = dispatch => ({
	setCity: value => dispatch(setCity(value))
})

// Conectamos App a la store para que pueda recibir el estado y las acciones como props y lo exportamos. Este tipo de componentes se conocen como "Container"
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)
