export const fetchWeather = function(query){
    const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY
    return fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": WEATHER_API_KEY,
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
      }
    })
    .then(response => {
      return response.json()
    })
    .then(weatherData=>{
      return weatherData
    })
    .catch(err => {
      console.error(err);
      throw new Error(err)
    });
    
    // return {location: {name: 'Minneapolis'}, current: {lastUpdated: 1234564}}
}