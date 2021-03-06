import React from 'react'
import PropTypes from 'prop-types'

const stateToCountryName = country => {
   switch (country) {
      case 'AR':
         return 'Argentina'
      case 'CL':
         return 'Chile'
      case 'GB':
         return 'Reino Unido'
      case 'ES':
         return 'España'
      case 'CO':
         return 'Colombia'
      default:
         return country
   }
}

const getCountryName = country => (
   <div className='Location__country'>{stateToCountryName(country)}</div>
)

const Location = ({city, country}) => (
   <div className='Location'>
      <h1>{city.split(',')[0]} {getCountryName(country)}</h1>
      
   </div>
)

Location.propTypes = {
   city: PropTypes.string.isRequired,
   country: PropTypes.string.isRequired
}

export default Location