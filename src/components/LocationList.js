import React from 'react'
import WeatherLocation from './WeatherLocation/'

const cities = ['Santiago,cl', 'Buenos Aires,ar', 'London,uk']

const LocationList = () => (
  <div>
    <h1>LocationList</h1>
    {
      cities.map((city, index) => (
        <WeatherLocation key={index} city={city} />
      ))
    }
  </div>
)

export default LocationList