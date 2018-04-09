import React from 'react'
import LocationListContainer from './containers/LocationListContainer'
import ForecastExtendedContainer from './containers/ForecastExtendedContainer'

const cities = ['Buenos Aires,ar', 'London,uk', 'Madrid,es', 'Bogota,co']

const App = () => (
	<div className="App">
		<h1>World Weather</h1>
		<LocationListContainer cities={cities} />
		<div className="detail">
			{ <ForecastExtendedContainer /> }
		</div>
	</div>
)

export default App
