import React from 'react'
import CountryList from './CountryList';

const Countries = ({countries}) => {
  return (
    <div>
      {
      countries.length < 10 
      ? 
        <CountryList  countries={countries} />
        :
        <p>Too many countries</p>
        } 
      
    </div>
    )
  
}

export default Countries;