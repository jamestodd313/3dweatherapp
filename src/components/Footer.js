import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="credit-section">
                <a href="ADD A LINK HERE" className="credit-link" target="_blank" rel="noreferrer noopener">A Windy Day </a>
                by
                <a href="ADD A LINK HERE" className="credit-link" target="_blank" rel="noreferrer noopener"> Loïc Norgeot </a>
                is licensed under Creative Commons Attribution
            </div>
            <div className="credit-section">     
                Data provided by
                <a href="ADD A LINK HERE" className="credit-link" target="_blank" rel="noreferrer noopener"> WeatherAPI.com </a>
            </div>
            <div className="credit-section">
                3D Weather App by
                <a href="ADD A LINK HERE" className="credit-link" target="_blank" rel="noreferrer noopener"> James Todd </a>
            </div>
        </footer>
    )
}
