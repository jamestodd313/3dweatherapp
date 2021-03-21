import React from 'react'

export const WeatherDetails = (data) => {
    const {weatherData, locationData} = data.data

    console.log(weatherData)
    return (
        <div id="weather-details">
            <h1>{`${locationData.name}`}</h1>
            <span className="location-data fs-med">{`${locationData.region}, ${locationData.country}`}</span>
            <div className="weather-data">
                <span className="temperature fs-large">{`${weatherData.temp_f}°F / ${weatherData.temp_c}°C`}</span>
                <span className="condition fs-large">{`${weatherData.condition.text}`}</span>
            </div>
        </div>
    )
}
