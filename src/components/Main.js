import React, {useState} from 'react'
// import {init} from './3d/init'
import { SearchForm } from './SearchForm'
import { WeatherDetails } from './WeatherDetails'
export const Main = (setLoading) => {
    const [weatherData, setWeatherData] = useState(null)
    const [locationData, setLocationData] = useState(null)
    return (
        <>
            <section id="main-container">
                {locationData && locationData.name ? <WeatherDetails data={{locationData, weatherData}}/> : <h1>3D<br/>WEATHER</h1>}
            </section>
            <SearchForm setLoading={setLoading} setWeatherData={setWeatherData} setLocationData={setLocationData}/>
            <section id="3d-container">
            </section>
        </>
    )
}
