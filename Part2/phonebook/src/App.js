import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' ,
      number: "0121-477-4132"}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')


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
      setNewName('')
      setNewNumber('')
    }
    
  }

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person, index) => 
            <p key={person.name}>{person.name}: {person.number}</p>
            )}
    </div>
  )
}

export default App
