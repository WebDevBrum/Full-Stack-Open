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
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
      {country.languages.map((language, index) => 
        <li key={language.name}>{language.name}</li> 
        )}
      </ul>   
      <img src={country.flag} alt="flag" height="150" />
    </div>
    )
}

export default Country;
