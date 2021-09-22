import React from 'react'


const Country = ({country}) => {
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
