import React from 'react'
import PropTypes from 'prop-types'

const stateToCountryName = country => {
   switch (country) {
      case 'AR':
         return 'Argentina'
      case 'CL':
         return 'Chile'
      case 'UK':
         return 'Reino Unido'
      default:
         return 'País'
   }
}

const getCountryName = country => (
   <div className='Location__country'>{stateToCountryName(country)}</div>
)

const Location = ({city, country}) => (
   <div className='Location'>
      <h1>{city} {getCountryName(country)}</h1>
      
   </div>
)

Location.propTypes = {
   city: PropTypes.string.isRequired,
   country: PropTypes.string.isRequired
}

export default Location