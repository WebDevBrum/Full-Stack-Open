import React, { useState } from 'react'
import Country from './Country';

const CountryList = ({countries}) => {

  const [visibility, setVisibility] = useState(false);
  const [singleCountry, setCountry] = useState([]);

  const handleClick = (value) => {
    setVisibility(!visibility);
    setCountry([value]);
  }

  
  return (
    <div>
    {
      (countries.length > 1 && visibility === false)
      ? 
      countries.map((country, index) => 
      <div key={index} >
        <label for="show">{country.name.common}: </label>
        <button  name="show" onClick={() => handleClick(country)}>show</button>
      </div>
      
        )
        :
        (
          (countries.length > 0  && visibility === false) ? <Country country={countries[0]}/>
          :
          visibility && <Country country={singleCountry[0]} />
        )
    } 
    </div>
    )

}

export default CountryList;

//TO DO : SINGLE COUNTRY RENDER