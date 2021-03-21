import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <span className="credit-section">
                <a href="https://sketchfab.com/3d-models/a-windy-day-fb78f4cc938144e6902dd5cff354d525" className="credit-link" target="_blank" rel="noreferrer noopener">A Windy Day </a>
                by
                <a href="https://sketchfab.com/norgeotloic" className="credit-link" target="_blank" rel="noreferrer noopener"> Loïc Norgeot </a>
                is licensed under Creative Commons Attribution
            </span>
            <span className="credit-section">     
                Data provided by
                <a href="https://www.weatherapi.com" className="credit-link" target="_blank" rel="noreferrer noopener"> WeatherAPI.com </a>
            </span>
            <span className="credit-section">
                3D Weather App by
                <a href="https://jamestodd.dev" className="credit-link" target="_blank" rel="noreferrer noopener"> James Todd </a>
            </span>
        </footer>
    )
}
