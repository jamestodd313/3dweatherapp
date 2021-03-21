import React from 'react'

export const WeatherDetails = (data) => {
    const {weatherData, locationData} = data.data

    console.log(weatherData)
    return (
        <div>
            <h1>{`${locationData.name}`}</h1>
            <span className="location-data">{`${locationData.region}, ${locationData.country}`}</span>
            <div className="weather-data">
                <span className="temperature">{`${weatherData.temp_f}F / ${weatherData.temp_c}C`}</span>
                <span className="condition">{`${weatherData.condition.text}`}</span>
            </div>
        </div>
    )
}
