import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Country = ({country}) => {

  const [weather, setWeather] = useState();

  const api_key = process.env.REACT_APP_API_KEY
  // variable api_key has now the value set in startup

  useEffect(() => {
    console.log('effect')
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
      .then(response => {
        console.log('promise fulfilled')
        setWeather(response.data)
      })
  }, [country.capital, api_key])
  
  console.log('api key', api_key);
  console.log(weather);



  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h3>Languages</h3>
      <ul>
      {Object.keys(country.languages).map((language, index) => 
        <li key={country.languages[language]}>{country.languages[language]}</li> 
        )}
      </ul>   
      <img src={country.flags[0]} alt="flag" height="150" />
      <h3>Weather in {country.capital}</h3>
      <p>Temperature: {weather?.current.temperature}</p>
      <img src={weather?.current.weather_icons[0]} alt="weather" height="150" />
      <p>Wind: {weather?.current.wind_speed}mph</p>
      <p> Direction: {weather?.current.wind_dir} </p>
    </div>
    )
}

export default Country;
