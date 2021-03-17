import {init} from './3d/init'
import {fetchWeather} from './utils/fetchWeather'
import {useEffect, useState} from 'react'

function App() {
  const [view, setView] = useState('home')
  const [query, setQuery] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [locationData, setLocationData] = useState(null)
  const [fetchError, setFetchError] = useState(false)
  useEffect(() => {
    console.log({weatherData, locationData})
  }, [weatherData])


  const handleChange = function(e){
    setQuery(e.target.value)
  }
  const handleSubmit = async function(e){
    e.preventDefault()
    setView('weather')
    const apiData = await fetchWeather(query)
    if(apiData.location){
      setFetchError(false)
      setWeatherData(apiData.current)
      setLocationData(apiData.location)
    }else{
      setFetchError(true)
    }

  }
  return (
    <div className="App">
      <header>
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="36.007" height="22.5" viewBox="0 0 36.007 22.5">
            <path id="Icon_ionic-ios-cloud-outline" data-name="Icon ionic-ios-cloud-outline" d="M20.25,8.719a8.582,8.582,0,0,1,8.529,7.65l.084.78a.918.918,0,0,0,.752.809l.773.141a4.391,4.391,0,0,1,2.58,1.554,4.693,4.693,0,0,1,1.069,2.96A4.855,4.855,0,0,1,32.709,25.9a4.314,4.314,0,0,1-3.1,1.378H6.391A4.24,4.24,0,0,1,3.3,25.9a4.842,4.842,0,0,1-1.329-3.291A5.014,5.014,0,0,1,2.9,19.73a4.552,4.552,0,0,1,2.37-1.765l.724-.232a.921.921,0,0,0,.64-.858l.014-.759a3.425,3.425,0,0,1,.949-2.278A2.9,2.9,0,0,1,9.7,12.9a3.053,3.053,0,0,1,1.146.225l.78.316a.917.917,0,0,0,1.1-.33l.478-.689a8.556,8.556,0,0,1,7.045-3.7m0-1.969A10.532,10.532,0,0,0,11.573,11.3a4.984,4.984,0,0,0-1.891-.373,5.207,5.207,0,0,0-5.02,5.161A6.868,6.868,0,0,0,0,22.605,6.613,6.613,0,0,0,6.391,29.25H29.616a6.618,6.618,0,0,0,1.125-13.092A10.559,10.559,0,0,0,20.25,6.75Z" transform="translate(0 -6.75)" fill="#C6C7C6"/>
          </svg>
        </a>
      </header>
      <section id="main-container">
        {locationData && locationData.name ? <h1>{locationData.name}</h1> : <h1>3D<br/>WEATHER</h1>}
      </section>
      <form id="search-form" onSubmit={e=> handleSubmit(e)}>
        <h2>Enter a location to get a 3D weather report</h2>
        <input type="location" value={query} onChange={e=>handleChange(e)} error={`${fetchError}`}/>
      </form>
      <figure id="3d-container">

      </figure>
      <footer>

      </footer>
    </div>
  );
}

export default App;
