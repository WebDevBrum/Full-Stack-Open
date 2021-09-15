import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter';
import Countries from './components/Countries';


const App = () => {
  const [ countries, setCountries ] = useState([]);
  const [newFilter, setNewFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('there are', countries.length, 'countries')
  console.log(countries);

  const handleFilter = (event) => {
    const value = (event.target.value);
    setNewFilter(value);
    
    if(value === '') {
      setFilteredCountries([]) 
    } else {  
       let filter = countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase()));
       setFilteredCountries(filter);  
    }
   }
   console.log(filteredCountries);
  return (
    <>
      <Filter value={newFilter} onChange={handleFilter}/>
      <Countries countries={filteredCountries} />
    </>
  )
}

export default App
