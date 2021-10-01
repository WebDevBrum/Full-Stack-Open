import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import phoneService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationClass, setNotificationClass] = useState()


  useEffect(() => {
    console.log('effect hello')
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
    //Update existing number if person exists
    if(persons.filter(person => person.name.toLowerCase() === newName.toLowerCase()).length > 0) {
      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)

      
      let existingPerson = persons.find(n => n.name === newName.toLowerCase())
      let changedPerson =  { ...existingPerson, number: newNumber }
      
      //setPersons uses existing state and only modifies the item changed on the server using the response from the server put request.
    phoneService
    .update(existingPerson.id, changedPerson)
    .then(returnedPerson => {
      setPersons(persons.map(person => person.id !== existingPerson.id ? person : returnedPerson))

      setNotificationClass('added');
      setNotificationMessage(
        `${existingPerson.name} was updated on the server`
      )
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
    })
    .catch(error => {
      setNotificationClass('error');
      setNotificationMessage(
        `${existingPerson.name} was already removed from the server`
      )
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
      setPersons(persons.filter(n => n.id !== existingPerson.id))
    })
    } else {
      //Add a new person
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
        setNotificationClass('added');
        setNotificationMessage(
          `${nameObject.name} was added to the server`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
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

  const handleDelete = (id, person) => {
    
    window.confirm(`Delete ${person.name}?`)
    
    phoneService
      .remove(id)
      .then(
        setPersons(persons.filter(n => n.id !== id))
      ).catch(error => {
        setNotificationClass('error');
        setNotificationMessage(
          `${person.name} was already removed from the server`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
              setPersons(persons.filter(n => n.id !== id))
            })
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }


  
    return (
      <div className={notificationClass}>
        {message}
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} class={notificationClass} />
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
        persons={persons} 
        handleDelete={handleDelete}
        />
    </div>
  )
}

export default App
