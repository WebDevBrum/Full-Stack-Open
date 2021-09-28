import React from 'react'

const Persons = ({filteredPersons, persons, handleDelete}) => {
  return (
    <div>
      {
      filteredPersons.length > 0 
      ? 
      filteredPersons.map((person, index) => 
        <div key={index}>
          <p >{person.name}: {person.number}</p>
          <button onClick={() => handleDelete(person.id)}>DELETE</button>
        </div>
        )
        :
      persons.map((person, index) => 
        <div key={index}>
          <p >{person.name}: {person.number}</p>
          <button onClick={() => handleDelete(person.id, person)}>DELETE</button>
        </div>
        )} 
    </div>
    
  )
}

export default Persons;