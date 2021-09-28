import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import phoneService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]);

  const [filteredPersons, setFilteredPersons] = useState([])
  
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('');


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('there are', persons.length, 'persons')
  console.log(persons);

  const addNewPerson = (event) => {
    event.preventDefault();
    
    //Filter returns an array based on tetscondition, so if this array is longer than 0 the name exists.
    if(persons.filter(person => person.name.toLowerCase() === newName.toLowerCase()).length > 0) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber}
      setPersons(persons.concat(nameObject))
      
      
      phoneService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilter = (event) => {
   const value = (event.target.value);
   setNewFilter(value);
   
   if(value === '') {
     setFilteredPersons([]) 
   } else {  
      let filter = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()));
      setFilteredPersons(filter);  
   }
  }

  return (
    
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilter}/>
      <h3>Add a New</h3>
      <PersonForm 
        submit={addNewPerson} 
        newName={newName} 
        handleNewName={handleNewName} 
        newNumber={newNumber} 
        handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <Persons 
        filteredPersons={filteredPersons}
        persons={persons} />
    </div>
  )
}

export default App
