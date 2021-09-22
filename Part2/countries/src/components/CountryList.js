import React from 'react'
import Country from './Country';

const CountryList = ({countries}) => {
  return (
    <div>
    {
      countries.length > 1 
      ? 
      countries.map((country, index) => 
        <p key={country.name}>{country.name}</p> 
        )
        :
        countries[0] && <Country country={countries[0]}/>

    } 
    </div>
    )

}

export default CountryList;

//TO DO : SINGLE COUNTRY RENDER