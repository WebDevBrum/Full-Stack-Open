import React from 'react'

const Persons = ({filteredPersons, persons}) => {
  return (
    <div>
      {
      filteredPersons.length > 0 
      ? 
      filteredPersons.map((person, index) => 
        <p key={person.name}>{person.name}: {person.number}</p>
        )
        :
      persons.map((person, index) => 
        <p key={person.name}>{person.name}: {person.number}</p>
        )} 
    </div>
    
  )
}

export default Persons;