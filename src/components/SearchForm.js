import React, {useState} from 'react'
import { fetchWeather } from '../utils/fetchWeather'
export const SearchForm = (setLoading, setWeatherData, setLocationData) => {
    const [query, setQuery] = useState('')
    const [fetchError, setFetchError] = useState(false)
    const handleChange = function(e){
      setQuery(e.target.value)
    }
    const handleSubmit = async function(e){
      e.preventDefault()
      setLoading(true)
      const response = await fetchWeather(query)
      if(response.location){
        setFetchError(false)
        setWeatherData(response.current)
        setLocationData(response.location)
      }else{
        setFetchError(true)
      }
      setLoading(false)
    }
    return (
        <form id="search-form" onSubmit={e=> handleSubmit(e)}>
        <h2>Enter a location to get a 3D weather report</h2>
        <input type="location" value={query} onChange={e=>handleChange(e)} error={`${fetchError}`}/>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="30.621" height="30.621" viewBox="0 0 30.621 30.621">
            <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3 -3)">
              <path id="Path_1" data-name="Path 1" d="M28.5,16.5a12,12,0,1,1-12-12,12,12,0,0,1,12,12Z" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
              <path id="Path_2" data-name="Path 2" d="M31.5,31.5l-6.525-6.525" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            </g>
          </svg>
        </button>
      </form>
    )
}
