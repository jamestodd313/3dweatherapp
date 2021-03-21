import React, {useState} from 'react'
import { Header } from './components/Header'
import { Spinner } from './components/Spinner'
import { Main } from './components/Main'
import { WeatherDetails } from './components/WeatherDetails'
import { Model } from './components/Model'
import { SearchForm } from './components/SearchForm'
import { Footer } from './components/Footer'
function App() {
  const [loading, setLoading] = useState(false)
  const [weatherData, setWeatherData] = useState(null)
  const [locationData, setLocationData] = useState(null)
  return (
    <div className="App">
      <Header/>
      {loading && <Spinner/>}
      <Main>
        {locationData && weatherData ? <WeatherDetails data={{locationData, weatherData}}/> : <h1>3D<br/>WEATHER</h1>}
        <Model condition={weatherData.condition.text}/>
        <SearchForm setLoading={setLoading} setWeatherData={setWeatherData} setLocationData={setLocationData}/>
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
