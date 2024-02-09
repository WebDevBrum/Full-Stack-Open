import { useState } from "react";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const duplicateName = (name) => {
    return persons.some((person) => person.name === name);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (duplicateName(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <form>
      <h2>Add a New</h2>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit" onClick={addPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
