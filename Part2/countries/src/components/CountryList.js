import React from 'react'

const CountryList = ({countries}) => {
  return (
    <div>
    {
      countries.map((country, index) => 
        <p key={country.name}>{country.name}</p> 
        )
    } 
    </div>
    )

}

export default CountryList;

//TO DO : SINGLE COUNTRY RENDER