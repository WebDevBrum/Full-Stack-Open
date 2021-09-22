import React, { useState } from 'react'
import Country from './Country';

const CountryList = ({countries}) => {

  const [visibility, setVisibility] = useState(false);
  const [countryList, setCountryList] = useState(countries);

  const handleClick = (value) => {
    setVisibility(!visibility);
    setCountryList([value]);
  }

  console.log(countryList);
  return (
    <div>
    {
      countries.length > 1
      ? 
      countries.map((country, index) => 
      <div key={index} >
        <p>{country.name}</p>
        <button  onClick={() => handleClick(country)}>show</button>
      </div>
      
        )
        :
        countries.length > 0  && <Country country={countries[0]}/>
    } 
    </div>
    )

}

export default CountryList;

//TO DO : SINGLE COUNTRY RENDER